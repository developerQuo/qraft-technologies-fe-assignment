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
