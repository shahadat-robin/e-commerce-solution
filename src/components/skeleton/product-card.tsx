import { Skeleton } from "antd";

export default function ProductCardSkeleton() {
  return (
    <div className="border-[0.5px]">
      <Skeleton.Image active className="w-full h-[200px]" />

      <div className="p-3 flex flex-col items-center gap-2">
        <Skeleton.Input active size="small" block />
        <Skeleton.Input active size="small" className="h-5" />
        <Skeleton.Input active size="small" className="h-5" />
      </div>
    </div>
  );
}
