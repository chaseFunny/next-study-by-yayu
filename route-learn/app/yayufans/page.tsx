import Image from "next/image";

export default function YaYuFans() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <p>这是根页面，我在根路由里面，</p>
      <p>因为 layout 会包裹同层级的 page。</p>
    </main>
  );
}
