import Filter from "@/components/filter/Filter";
import { Exchange } from "@/constants/enums";
import { useFilterStore } from "@/stores/filter-store";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Filter",
  component: Filter,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  beforeEach: () => {
    useFilterStore.setState({
      exchange: Exchange.ALL,
      keyword: "",
      startDate: "2025-07-01",
      endDate: "2025-07-28",
    });
  },
} satisfies Meta<typeof Filter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SelectExchange: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const exchangeSelector = canvas.getByRole("combobox", { name: "거래소" });
    await userEvent.click(exchangeSelector);
    await userEvent.selectOptions(exchangeSelector, "심천");
    await expect(exchangeSelector).toHaveTextContent("심천");
  },
};

export const SelectKeyword: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const keywordInput = canvas.getByRole("textbox", { name: "키워드" });
    await userEvent.type(keywordInput, "상장");
    await expect(keywordInput).toHaveValue("상장");
  },
};

export const SelectDateRange: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("시작 날짜 설정", async () => {
      const startDateInput = canvas.getByRole("textbox", { name: "startDate" });
      await userEvent.clear(startDateInput);
      await userEvent.type(startDateInput, "2024-01-01");
      await expect(startDateInput).toHaveValue("2024-01-01");
    });

    await step("종료 날짜 설정", async () => {
      const endDateInput = canvas.getByRole("textbox", { name: "endDate" });
      await userEvent.clear(endDateInput);
      await userEvent.type(endDateInput, "2024-12-31");
      await expect(endDateInput).toHaveValue("2024-12-31");
    });
  },
};
