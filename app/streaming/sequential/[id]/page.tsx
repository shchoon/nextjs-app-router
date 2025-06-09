import Image from "next/image";
import User from "@/app/component/user";
import delay from "@/app/utils/delay";
import { Params } from "@/app/type";
import { Suspense } from "react";
import SearchName from "@/app/component/search";

export default async function Sequential({ params }: Params) {
  const { id } = await params;
  const user = await fetch(`https://dummyjson.com/users/${id}`);
  const userData = await user.json();

  return (
    <div className="flex flex-col gap-10">
      <div>
        각 컴포넌트에 필요한 데이터가 서로 의존적일 경우, Suspense를 사용하여
        먼저 렌더링 된 컴포넌트를 우선적으로 보여줄 수 있음
        <br />→ 전체 페이지가 렌더링 될때까지 기다리지 않고 렌더링이 완료된
        컴포넌트를 순차적으로 보여줌으로써 사용자 경험 향상
      </div>
      <h1>이름 : {userData.username}</h1>
      <Suspense fallback={<div>팀원 이름을 검색중입니다...</div>}>
        <SearchName name={userData.username} ms={1000} title="이름" />
      </Suspense>
      <Suspense fallback={<div>팀원 나이를 검색중입니다...</div>}>
        <SearchName name={userData.username} ms={2000} title="나이" />
      </Suspense>
    </div>
  );
}
