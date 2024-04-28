import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quality Assurance Page ",
};

const Quality = () => {
  return (
    <>
      <Breadcrumb
        pageName="Quality Assurance Page"
        description="Never Compromise On Quality."
      />
      <div className="overflow-hidden py-16 md:py-20 lg:py-28">
        <h3 className=" text-center text-xl text-gray-400">
          Never Compromise On Quality
        </h3>
        <h1 className="text-blue-600 font-bold text-center text-3xl pt-12">QUALITY ASSURANCE</h1>
        <p className="text-gray-500 text-center py-16 px-16">
          We believe quality comes first. By ensuring We emphasis on customer
          satisfaction through professional services by providing quality goods,
          competitive prices, timely delivery & conforming with industry
          standards. We aim to achieve above goals through an active
          participation and training of all staff members and by continual
          improvement of our quality system. Quality control is the process in
          which all factors involved in manufacture are checked for meeting
          quality level requirements. In the field of textiles, the processing
          laboratory plays a key role. It serves as the foundation for producing
          a quality product. All facilities are operated utilizing closely
          monitored quality control check points at each stage of product
          processing, packaging and shipping. Our operations are up to date with
          all safety, health and environmental standards.
        </p>
      </div>
    </>
  );
};

export default Quality;
