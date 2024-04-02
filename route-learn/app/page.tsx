import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <p>这是根页面，我在根路由里面，</p>
      <p>因为 layout 会包裹同层级的 page。</p>
      <Link href="/yayufans" className="">
        <span className="btn">YaYuFans</span>
      </Link>
    </main>
  );
}
