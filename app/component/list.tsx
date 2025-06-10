import { User } from "../type";

export default function List({ teams }: { teams: User[] }) {
  return (
    <div className="flex flex-col">
      {teams.map((person) => {
        return <div key={person.id}>이름 : {person.username}</div>;
      })}
    </div>
  );
}
