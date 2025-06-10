import delay from "@/app/utils/delay";
import Image from "next/image";

export default async function StreamOn({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { id } = params;
  const getData = await fetch(`https://dummyjson.com/users/${id}`);
  await delay(2000);
  const user = await getData.json();

  return (
    <div>
      해당 컴포넌트가 렌더링 되기 전까지 로딩 화면을 보여줌
      <br />
      → 컴포넌트가 렌더링될 때까지 로딩 화면을 보여줌으로써 사용장에게 페이지가
      로딩되고 있다는 인식을 줄 수 있음
      <br />→ 사용자 경험 향상
      <div className="flex-1 flex flex-col gap-10">
        <div key={user.id}>
          <Image width={200} height={200} src={user.image} alt="image" />
          <div>name: {user.username}</div>
          <div>company: {user.company.name}</div>
          <div>address: {user.address.address}</div>
          <div>phone: {user.phone}</div>
        </div>
      </div>
    </div>
  );
}
