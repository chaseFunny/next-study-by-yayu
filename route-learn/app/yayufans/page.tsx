import Image from "next/image";
import { use } from "react";
async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    message: "Hello, Dashboard!",
  };
}
export default function YaYuFans() {
  // const { message } = await getData();
  const { message } = use(getData());
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <p>{message}</p>
      <p>这是根页面，我在根路由里面，</p>
      <p>因为 layout 会包裹同层级的 page。</p>
    </main>
  );
}
