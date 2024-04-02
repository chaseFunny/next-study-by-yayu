"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [num, setNum] = React.useState(0);
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1 className="text-center m-24">
          这是根路由，它的子路由都有它。因为 layout 支持嵌套
        </h1>
        <div className="text-center">
          <button
            className="btn"
            onClick={() => {
              setNum(num + 1);
            }}
          >
            点我 +1
          </button>
          <p>我是根布局，当前数字: {num}</p>
        </div>
        {children}
      </body>
    </html>
  );
}
