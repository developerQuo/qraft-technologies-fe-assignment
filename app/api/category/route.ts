import { NextRequest, NextResponse } from "next/server";
import { Exchange } from "@/enums/exchange";
import { queryJsonFile } from "@/utils/query-category-json";
import { Category } from "@/types/category";

export async function GET(request: NextRequest) {
  try {
    const exchange = request.nextUrl.searchParams.get("exchange") as
      | Exchange.SHENZHEN
      | Exchange.HONGKONG;

    // query json file
    const data: Category[] = await queryJsonFile(exchange);

    return NextResponse.json(data);
  } catch (error) {
    console.log("Error:", error);
    return NextResponse.json(
      { error: "서버 요청 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
