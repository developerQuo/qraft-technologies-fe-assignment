import { Exchange } from "@/enums/exchange";

export type Content = {
  id: string;
  dataDate: string;
  korName: string;
  details: {
    secName: string[];
    secCode: string[];
    categoryId: string[];
  };
  analysisDetails: {
    topicKor: string;
    summarizeTinyKor: string;
    summarizeLongKor: string;
  };
  exchange: Exchange.SHENZHEN | Exchange.HONGKONG;
};

export type TQueryContents = {
  items: Content[];
  page: {
    next: number;
    page: number;
    perPage: number;
    prev: number;
    total: number;
    totalPage: number;
  };
};

export type TQueryParams = {
  exchange: Exchange;
  startDate: string;
  endDate: string;
  keyword: string;
  page: number;
};
