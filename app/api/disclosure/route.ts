import { NextRequest, NextResponse } from "next/server";
import { ShenZhenData, HongKongData } from "@/types/disclosure";
import { Exchange } from "@/enums/exchange";
import { queryJsonFile } from "@/utils/query-disclosure-json";
import { paginateArray } from "@/utils/pagination";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const exchange = searchParams.get("exchange");
    const startDate = searchParams.get("startDate");
    const endDate = searchParams.get("endDate");
    const keyword = searchParams.get("keyword");
    const page = parseInt(searchParams.get("page") || "0");

    // query json file
    let shenzhenData: ShenZhenData[] = [];
    let hongkongData: HongKongData[] = [];

    if (exchange === Exchange.SHENZHEN || exchange === Exchange.ALL) {
      shenzhenData = await queryJsonFile(Exchange.SHENZHEN);
    }
    if (exchange === Exchange.HONGKONG || exchange === Exchange.ALL) {
      hongkongData = await queryJsonFile(Exchange.HONGKONG);
    }
    const data = [
      ...shenzhenData.map((item) => ({ ...item, exchange: Exchange.SHENZHEN })),
      ...hongkongData.map((item) => ({ ...item, exchange: Exchange.HONGKONG })),
    ];

    // filtering
    const filteredData = data.filter((item) => {
      let dateFilter = false;
      let keywordFilter = true;
      if (startDate && endDate) {
        const endDateOfNextDay = new Date(endDate);
        endDateOfNextDay.setDate(endDateOfNextDay.getDate() + 1);
        dateFilter =
          new Date(item.dataDate) >= new Date(startDate) &&
          new Date(item.dataDate) < endDateOfNextDay;
      }
      if (keyword) {
        const lowerKeyword = keyword.toLowerCase();
        keywordFilter =
          item.analysisDetails.summarizeTinyKor
            .toLowerCase()
            .includes(lowerKeyword) ||
          item.analysisDetails.summarizeLongKor
            .toLowerCase()
            .includes(lowerKeyword);
      }
      return dateFilter && keywordFilter;
    });

    // pagination
    const paginatedResult = paginateArray(filteredData, { page });

    return NextResponse.json({
      items: paginatedResult.items,
      page: { next: paginatedResult.page.next },
    });
  } catch (error) {
    console.log("Error:", error);
    return NextResponse.json(
      { error: "서버 요청 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
