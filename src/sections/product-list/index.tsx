import { Typography } from "antd";
import { products } from "./data";
import ProductCard from "./product-card";

export default function ProductListing() {
  return (
    <section className="py-10">
      <div className="container space-y-5">
        <Typography.Title
          level={3}
          className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-[3rem] after:bg-brand"
        >
          Collections
        </Typography.Title>

        <div className="grid grid-cols-6 border-[0.5px]">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
