import BlockTitle from "@/components/block-title";
import ProductCardSkeleton from "@/components/skeleton/product-card";
import { useGetProductsQuery } from "@/store/api-slices/products-api";
import ProductCard from "./product-card";

export default function ProductListingSection() {
  return (
    <section className="py-10">
      <div className="container space-y-5">
        <BlockTitle>Collections</BlockTitle>
        <ProductListing />
      </div>
    </section>
  );
}

const ProductListing = () => {
  const { data, error, isLoading } = useGetProductsQuery("products");

  const wrapperClassName =
    "grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 border-[0.5px]";

  if (isLoading)
    return (
      <div className={wrapperClassName}>
        {new Array(12).fill("").map((_, index) => (
          <ProductCardSkeleton key={index} />
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
