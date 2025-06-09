import Image from "next/image";
import Link from "next/link";

export default async function Streaming() {
  const getData = await fetch("https://dummyjson.com/users/1");
  const user = await getData.json();

  return (
    <div>
      <div className="flex-1 flex flex-col gap-10">
        <h1>comparing UI by streaming</h1>
        <div key={user.id}>
          <Image width={100} height={100} src={user.image} alt="" />
          <Link href={`streaming/on/${user.id}`}>streaming on</Link>
          <br />
          <Link href={`streaming/off/${user.id}`}>streaming off</Link>
          <br />
          <Link href={`/streaming/sequential/${user.id}`}>sequential</Link>
          <br />
          <Link href={`/streaming/parallel/on/${user.id}`}>parallel on</Link>
          <br />
          <Link href={`/streaming/parallel/off/${user.id}`}>parallel off</Link>
        </div>
      </div>
    </div>
  );
}
