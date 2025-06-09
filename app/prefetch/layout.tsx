import Link from "next/link";

export default function PrefetchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header className="flex gap-10 mt-20">
        <Link href={"/prefetch/link1"}>
          Link1
          <br />
          prefetch false & static page
        </Link>
        <Link href={"/prefetch/link2"}>
          Link2
          <br />
          prefetch false & static page
        </Link>
      </header>
      {children}
    </div>
  );
}
