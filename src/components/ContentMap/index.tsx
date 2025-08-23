import React from "react";
import { AboutPage } from "./AboutPage";
// import { NewsPage } from "./NewsPage";
import { Products } from "./DeepProducts";
import { JoinUs } from "./JoinUs";
// import { WhyChooseUs } from "./QuestionPage";
import { MainPage } from "./MainPage";
import { ContactUs } from "./ContactUs";

export const contentMap: Record<string, React.ReactNode> = {
  main: <MainPage />,
  about: <AboutPage />,
  //   news: <NewsPage />,
  "product-intro": <Products />,
  join: <JoinUs />,
  //   problems: <WhyChooseUs />,
  contact: <ContactUs />,
};
