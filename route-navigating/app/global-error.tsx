"use client";
// app/global-error.js
export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2>
          Something went
          wrong!我是全局异常捕获的，我是处理根目录文件下的错误的，子路由还是需要写自己的error
          页面
        </h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
