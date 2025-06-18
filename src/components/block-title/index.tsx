import { Typography } from "antd";
import type { PropsWithChildren } from "react";

export default function BlockTitle({ children }: PropsWithChildren) {
  return (
    <Typography.Title
      level={3}
      className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-[3rem] after:bg-brand"
    >
      {children}
    </Typography.Title>
  );
}
