import { Skeleton } from "antd";

export default function CartProductSkeleton() {
  return (
    <div className="flex gap-2">
      <Skeleton.Image active className="h-[70px] w-[70px]" />
      <div className="flex-1 space-y-2">
        <Skeleton.Input className="w-full h-7" />
        <div className="flex items-center justify-between">
          <Skeleton.Input className="h-5" />
          <Skeleton.Input className="h-5" />
        </div>
      </div>
    </div>
  );
}
