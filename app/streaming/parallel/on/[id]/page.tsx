import { Params } from "@/app/type";
import List from "@/app/component/list";
import Delay from "@/app/utils/delay";

export default async function ParallelOn({ params }: Params) {
  const { id } = params;
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

  const getLeader = getNameList();
  const getTeams = getAgeList();

  const [leader, teams] = await Promise.all([getLeader, getTeams]);

  return (
    <div className="flex flex-col gap-10">
      <div>
        parallel을 사용한 구조
        <br /> → 첫번째 요청 1초
        <br /> → 두번째 요청 2초
        <br /> → 두 요청을 동시에 시작하기 때문에 응답 시간이 더 긴 2초만
        기다리면 페이지 렌더링 완료
        <br /> → 사용자 경험 향상
      </div>
      <h1>팀장: {leader.username}</h1>
      <List teams={teams} />
    </div>
  );
}
