import React from "react";
import { AboutPage } from "./AboutPage";
import { NewsPage } from "./NewsPage";
import { Products } from "./DeepProducts";
import { ContactUs } from "./ContactPage";
import { WhyChooseUs } from "./QuestionPage";

export const contentMap: Record<string, React.ReactNode> = {
  about: <AboutPage />,
  news: <NewsPage />,
  "product-intro": <Products />,
  contact: <ContactUs />,
  problems: <WhyChooseUs />,
};
