import {
  AiOutlineStock,
  AiOutlineShoppingCart,
  AiOutlineCalendar,
} from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";
import { BsKanban } from "react-icons/bs";

export const links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "Your Holdings",
        icon: <FiShoppingBag />,
        to: "/protected",
      },
    ],
  },

  {
    title: "Sales",
    links: [
      {
        name: "Statistics and Predictions",
        icon: <AiOutlineStock />,
        to: "/protected/stats-prediction",
      },
      {
        name: "Buy and Sell",
        icon: <AiOutlineShoppingCart />,
        to: "/protected/buy-sell",
      },
    ],
  },
  {
    title: "Chat",
    links: [
      {
        name: "Global Chat",
        icon: <AiOutlineCalendar />,
        to: "/protected/global-chat",
      },
      {
        name: "Chat with Expert",
        icon: <BsKanban />,
        to: "/protected/expert-chat",
      },
    ],
  },
  {
    title: "Updates",
    links: [
      {
        name: "News",
        icon: <AiOutlineStock />,
        to: "/protected/news",
      },
    ],
  },
];

export const features = [
  {
    title: "Portfolio Management",
    description:
      "Keep track of your investments with our intuitive portfolio management tools. Monitor your holdings, track performance, and gain valuable insights to optimize your investment portfolio.",
    image: './stock2.jpg',
  },
  {
    title: "AI-Powered Trend Prediction to help you Trade",
    description:
      "Stay ahead of the market with our advanced machine learning model. Gain access to real-time insights and accurate trend predictions, empowering you to make informed trading decisions.",
    image: './stock1.jpg',
  },
  {
    title: "Chat with the Community and the Experts",
    description:
      "Connect with traders worldwide in our dynamic global chat feature or have one-on-one sessions with our seasoned professionals to make better trading decisions.",
    image: './stock3.jpg',
  },
  {
    title: "Get the Latest Updates",
    description:
      "Stay informed with the latest market news and updates. Access real-time financial news, earnings reports, and economic indicators to stay on top of market trends and make well-informed decisions.",
    image: './stock4.jpg',
  },
];
