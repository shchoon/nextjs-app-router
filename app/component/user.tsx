import Image from "next/image";
import delay from "../utils/delay";

export default async function User({ id }: { id: number }) {
  const res = await fetch(`https://dummyjson.com/users/${id}`);
  await delay(1000);
  const user = await res.json();

  return (
    <div className="flex flex-col gap3">
      <Image width={100} height={100} src={user.image} alt="" />
      <div>name: {user.username}</div>
      <div>company: {user.company.name}</div>
      <div>address: {user.address.address}</div>
      <div>phone: {user.phone}</div>
    </div>
  );
}
