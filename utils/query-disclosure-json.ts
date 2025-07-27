import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { Exchange } from "@/enums/exchange";

export const queryJsonFile = async (
  exchange: Exchange.SHENZHEN | Exchange.HONGKONG
) => {
  const KOR_NAME = exchange === Exchange.SHENZHEN ? "심천" : "홍콩";

  const response = await fs.readFile(
    path.join(process.cwd(), "public", "data", `${KOR_NAME}_공시_데이터.json`),
    "utf-8"
  );
  if (!response.length) {
    return NextResponse.json({
      status: 404,
      error: `${KOR_NAME} 공시 데이터를 찾을 수 없습니다.`,
    });
  }

  const { data } = JSON.parse(response);
  return data.getDisclosure;
};
