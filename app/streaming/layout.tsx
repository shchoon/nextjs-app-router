import Link from "next/link";

export default function StreamingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-10">
      <header className="flex gap-10">
        <strong>Streaming</strong>
      </header>
      {/* <span>
        서버 컴포넌트에서 async/await을 사용하면 nextjs는 기본적으로{" "}
        <strong>dynamic rendering</strong>
        (기본적으로 fetch의 cache option이 'no-store'이기 때문, 매 요청마다
        데이터가 다를 수 있다고 가정)
      </span> */}
      <div className="flex gap-10">
        {/* <Link href={"/streaming/sequential/1"}>sequential</Link>
        <Link href={"/streaming/parallel/2"}>parallel</Link> */}
      </div>
      {children}
    </div>
  );
}
