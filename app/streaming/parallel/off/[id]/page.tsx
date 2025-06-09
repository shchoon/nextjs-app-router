import { Params } from "@/app/type";
import List from "@/app/component/list";
import Delay from "@/app/utils/delay";

export default async function ParallelOff({ params }: Params) {
  const { id } = await params;
  const getNameList = async () => {
    const getData = await fetch(`https://dummyjson.com/users/${id * 10}`);
    await Delay(1000);
    const data = await getData.json();
    return data;
  };

  const getAgeList = async () => {
    const getData = await fetch(`https://dummyjson.com/users?limit=${id + 5}`);
    await Delay(2000);
    const data = await getData.json();
    return data.users;
  };

  const leader = await getNameList();
  const teams = await getAgeList();

  return (
    <div className="flex flex-col gap-10">
      <div>
        suspense를 사용하지 않은 sequential 구조
        <br /> → 첫번째 요청 1초
        <br /> → 두번째 요청 2초
        <br /> → 총 3초의 api 요청을 기다린 후 페이지 렌더링
      </div>
      <h1>팀장: {leader.username}</h1>
      <List teams={teams} />
    </div>
  );
}
