import Delay from "../utils/delay";

export default async function Search({
  name,
  ms,
  title,
}: {
  name: string;
  ms: number;
  title: string;
}) {
  await Delay(ms);
  const getData = await fetch("https://dummyjson.com/users?limit=5");
  const data = await getData.json();
  const userData = data.users;

  console.log(data);

  return (
    <div className="flex flex-col gap-3">
      {userData.map((person: any, i: number) => {
        return (
          <div key={person.id}>
            팀원 {i + 1} {title === "이름" ? "이름" : "나이"} :{" "}
            {title === "이름" ? person.username : person.age}
          </div>
        );
      })}
    </div>
  );
}
