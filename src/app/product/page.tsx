
import productData from "@/components/Products/productData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import SingleProduct from "@/components/Products/SingleProduct";

export const metadata: Metadata = {
  title: "Product Page "
};

const Products = () => {
  return (
    <>
      <Breadcrumb
        pageName="Products Page"
        description=""
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {productData.map((product) => (
              <div
                key={product.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleProduct product={product} />
              </div>
            ))}
          </div>

          
        </div>
      </section>
    </>
  );
};

export default Products;
