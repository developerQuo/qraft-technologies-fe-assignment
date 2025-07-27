import Card from "@/app/components/disclosure-data/Card";

import type { Meta, StoryObj } from "@storybook/nextjs";
import { cardMock } from "./__mocks__/card";
import { Exchange } from "@/enums/exchange";

const meta = {
  title: "Card",
  component: Card,
  parameters: {
    layout: "fullscreen",
  },
  globals: {
    backgrounds: {
      value: "light",
    },
  },
  args: { ...cardMock, exchange: Exchange.SHENZHEN },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardView: Story = {};
