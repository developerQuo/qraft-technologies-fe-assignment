import { Exchange } from "@/enums/exchange";

export type ShenZhenContent = {
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
  exchange: Exchange.SHENZHEN;
};

export type HongKongContent = {
  id: string;
  dataDate: string;
  korName: string;
  details: {
    secName: string[];
    secCode: string[];
    categoryId: string;
    fileLink: string;
  };
  analysisDetails: {
    topicKor: string;
    summarizeTinyKor: string;
    summarizeLongKor: string;
  };
  exchange: Exchange.HONGKONG;
};

export type Content = ShenZhenContent | HongKongContent;

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
