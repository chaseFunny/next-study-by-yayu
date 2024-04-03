"use client";
import Link from "next/link";
import React from "react";

const GoHome = () => {
  return (
    <div>
      <Link href={"/"}>
        <button className="btn">goHome</button>
      </Link>
    </div>
  );
};

export default GoHome;
