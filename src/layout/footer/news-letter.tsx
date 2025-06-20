import { Button, Input, Space, Typography } from "antd";
import { HiOutlineMailOpen } from "react-icons/hi";

export default function NewsLetter() {
  return (
    <section className="bg-brand py-10">
      <div className="container flex flex-col gap-5 md:flex-row md:items-center justify-between">
        <div className="flex flex-col md:flex-row md:items-center md:gap-5">
          <HiOutlineMailOpen className="text-5xl" />
          <div>
            <Typography.Title level={3} className="uppercase tracking-widest">
              Newsletter
            </Typography.Title>
            <p>Signup Our newsletter And get latest updates!</p>
          </div>
        </div>

        <Space.Compact>
          <Input
            placeholder="Enter your email"
            size="large"
            className="text-dark w-full max-w-[500px]"
          />
          <Button size="large" className="font-semibold">
            Subscribe
          </Button>
        </Space.Compact>
      </div>
    </section>
  );
}
