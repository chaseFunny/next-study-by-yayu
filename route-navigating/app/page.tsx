import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <p>这是根页面，我在根路由里面，</p>
      <p>因为 layout 会包裹同层级的 page。</p>
      <Link href="/yayufans" className="">
        <span className="btn">YaYuFans</span>
      </Link>
      <div className="h-4"></div>
      <Link href="/error" className="">
        <span className="btn">去错误页面</span>
      </Link>
      <Link href="/history" className="">
        <span className="btn">去history页面</span>
      </Link>
      <Link href="/info" className="">
        <span className="btn">去 info 页面</span>
      </Link>
      <Link href="/setting" className="">
        <span className="btn">去 setting 页面</span>
      </Link>
      <Link href="/weizhi" className="">
        <span className="btn">去未知页面</span>
      </Link>
    </main>
  );
}
