import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ya Yu Fans Layout",
  description:
    "This is the YaYuFans route, I have a root route above me. Because layout supports nesting",
};

export default function YaYuFansLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={inter.className}>
      <h1 className="text-center m-24">
        这是 YaYuFans 路由，我的上面还有根路由。因为 layout 支持嵌套
      </h1>
      <div className="text-center">
        <Link href="/">
          <span className="btn">Home</span>
        </Link>
      </div>
      {children}
    </div>
  );
}
