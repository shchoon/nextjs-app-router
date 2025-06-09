"use client";

import Image from "next/image";

export default function Link1C(props: any) {
  const data: any[] = props.data.users;

  console.log(data);

  return (
    <div>
      <h1 className="pb-10">Link1</h1>
      <div className="flex-1 flex flex-col gap-10">
        {data.map((user) => {
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
