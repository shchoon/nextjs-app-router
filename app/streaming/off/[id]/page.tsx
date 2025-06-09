import delay from "@/app/utils/delay";
import Image from "next/image";
import { Params } from "@/app/type";

export default async function StreamOff({ params }: Params) {
  const { id } = await params;
  const getData = await fetch(`https://dummyjson.com/users/${id}`);
  await delay(2000);
  const user = await getData.json();

  return (
    <div>
      해당 컴포넌트의 렌더링이 완료될 때까지 UI에 아무런 변화가 없음
      <br />
      → 사용자 입장에서는 페이지가 로딩되고 있는지 모를 수 있음
      <br />→ 사용자 경험 저하
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
