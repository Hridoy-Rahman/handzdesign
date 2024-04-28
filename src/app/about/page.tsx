import AboutSectionOne from "@/components/About/AboutSectionOne";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="H & Z Design Ltd"
      />
      <div>
        <h1 className="text-blue-500 text-4xl font-bold text-center pb-12"><u>About Us</u></h1>

          <p className="text-gray-500 text-xl text-center px-10 md:px-24 pb-12">
          H & Z Design Ltd. was established in the year 2008, by Md Zahirul Islam , as a towel manufacturing factory, Providing a range of most premium quality towels to our customer based in USA, Canada, Australia , Malaysia , Middle East, and many European countries. Because of our hard work, premium quality and customer satisfaction our company rapidly grew and become one of the best towel manufacturing industries in Pakistan. We manufacture all kinds of towels including shop towels which are one of our main product lines.
          </p>
      </div>
    </>
  );
};

export default AboutPage;
