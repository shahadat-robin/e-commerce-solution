import { useGetProductsQuery } from "@/store/api-slices/products-api";
import { Skeleton, Typography } from "antd";
import ProductCard from "./product-card";

export default function ProductListingSection() {
  return (
    <section className="py-10">
      <div className="container space-y-5">
        <Typography.Title
          level={3}
          className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-[3rem] after:bg-brand"
        >
          Collections
        </Typography.Title>

        <ProductListing />
      </div>
    </section>
  );
}

const ProductListing = () => {
  const { data, error, isLoading } = useGetProductsQuery("products");

  const wrapperClassName = "grid grid-cols-6 border-[0.5px]";

  if (isLoading)
    return (
      <div className={wrapperClassName}>
        {new Array(12).fill("").map((_, index) => (
          <div key={index} className="border-[0.5px]">
            <Skeleton.Image active className="w-full h-[200px]" />

            <div className="p-3 flex flex-col items-center gap-2">
              <Skeleton.Input active size="small" block />
              <Skeleton.Input active size="small" className="h-5" />
              <Skeleton.Input active size="small" className="h-5" />
            </div>
          </div>
        ))}
      </div>
    );

  if (!data || error) return <p>Error loading products.</p>;

  return (
    <div className={wrapperClassName}>
      {data.products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};
