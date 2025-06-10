import Image from "next/image";
import { User } from "@/app/type";

export default async function Link2() {
  const getData = await fetch("https://dummyjson.com/users?limit=200");
  const data = await getData.json();
  const userData: User[] = data.users;

  return (
    <div>
      <h1 className="pb-10">Link2</h1>
      <h2>prefetching false</h2>
      <div className="flex-1 flex flex-col gap-10">
        {userData.map((user) => {
          return (
            <div key={user.id}>
              <Image width={100} height={100} src={user.image} alt="" />
              <div>name: {user.username}</div>
              <div>company: {user.company.name}</div>
              <div>address: {user.address.address}</div>
              <div>phone: {user.phone}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
