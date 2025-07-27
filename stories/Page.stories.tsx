import Home from "@/app/page";
import type { Meta, StoryObj } from "@storybook/nextjs";
import {
  expect,
  fireEvent,
  userEvent,
  waitFor,
  within,
} from "storybook/internal/test";
import { http, HttpResponse } from "msw";
import {
  filterHongkongMock,
  hongkongMock,
  searchShenzhenMock,
  shenzhenMock,
} from "./__mocks__/contents";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFilterStore } from "@/stores/filter-store";
import { Exchange } from "@/enums/exchange";
import { ONE_YEAR_AGO, TODAY } from "@/utils/date";

const queryClient = new QueryClient();

const meta = {
  title: "Home",
  component: Home,
  parameters: {
    layout: "fullscreen",
    msw: {
      handlers: [
        http.get("/api/contents", ({ request }) => {
          const url = new URL(request.url);
          const exchange = url.searchParams.get("exchange");
          const startDate = url.searchParams.get("startDate");
          const endDate = url.searchParams.get("endDate");
          const keyword = url.searchParams.get("keyword");
          console.log("msw params:", { exchange, startDate, endDate, keyword });

          if (
            exchange === "hongkong" &&
            startDate === "2024-04-22" &&
            endDate === "2024-04-22"
          ) {
            return HttpResponse.json(filterHongkongMock);
          }

          if (keyword === "티안치 몰드") {
            return HttpResponse.json(searchShenzhenMock);
          }

          return HttpResponse.json(
            exchange === "hongkong"
              ? hongkongMock
              : [...shenzhenMock, ...hongkongMock]
          );
        }),
      ],
    },
  },
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
  beforeEach: () => {
    useFilterStore.setState({
      exchange: Exchange.ALL,
      keyword: "",
      startDate: ONE_YEAR_AGO,
      endDate: TODAY,
    });
  },
} satisfies Meta<typeof Home>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TestFilterHongkongData: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("홍콩 거래소 선택", async () => {
      const exchangeSelector = canvas.getByRole("combobox", { name: "거래소" });
      await userEvent.click(exchangeSelector);
      await userEvent.selectOptions(exchangeSelector, "홍콩");
    });

    await step("공시일 선택", async () => {
      await step("시작 날짜 설정", async () => {
        const startDateInput = canvas.getByRole("textbox", {
          name: "startDate",
        });
        await fireEvent.change(startDateInput, {
          target: { value: "2024-04-22" },
        });
      });

      await step("종료 날짜 설정", async () => {
        const endDateInput = canvas.getByRole("textbox", {
          name: "endDate",
        });
        await fireEvent.change(endDateInput, {
          target: { value: "2024-04-22" },
        });
      });
    });

    await step("렌더링 콘텐츠 확인", async () => {
      const contents = canvas.getByRole("list");

      await waitFor(() => {
        expect(contents.children).toHaveLength(3);
      });

      const firstName = await within(
        contents.children[0] as HTMLElement
      ).findByTestId("name");
      expect(firstName).toHaveTextContent("짱구식품");

      const secondName = await within(
        contents.children[1] as HTMLElement
      ).findByTestId("name");
      expect(secondName).toHaveTextContent("YADONG GROUP");

      const thirdName = await within(
        contents.children[2] as HTMLElement
      ).findByTestId("name");
      expect(thirdName).toHaveTextContent("HAITONG UT");
    });
  },
};

export const TestSearchKeyword: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("키워드 검색", async () => {
      const keywordInput = canvas.getByRole("textbox", { name: "키워드" });
      await userEvent.type(keywordInput, "티안치 몰드");
    });

    await step("검색 결과 확인", async () => {
      const contents = canvas.getByRole("list");

      expect(contents.children).toHaveLength(1);
      const name = await within(
        contents.children[0] as HTMLElement
      ).findByTestId("name");
      expect(name).toHaveTextContent("톈진모터다이스");
    });
  },
};

// export const TestInfiniteScroll: Story = {
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);

//     const contents = canvas.getByRole("list");
//     expect(contents.children).toHaveLength(10);

//     const lastChild = contents.children[contents.children.length - 1];
//     await fireEvent.scroll(lastChild, {
//       target: { scrollTop: lastChild.scrollHeight },
//     });

//     expect(contents.children).toHaveLength(20);
//   },
// };
