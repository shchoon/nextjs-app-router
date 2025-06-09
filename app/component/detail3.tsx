import { useEffect, useState } from "react";
import Image from "next/image";

export default function Detail3() {
  const [data, setData] = useState<any[]>();

  const getData = async () => {
    const getData = await fetch("https://dummyjson.com/users?limit=200");
    const data = await getData.json();
    const userData = data.users;

    setData(userData);
  };
  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 2000);
  });

  console.log(data);
  return (
    <div>
      {data && (
        <div key={data[20].id}>
          <Image width={100} height={100} src={data[20].image} alt="" />
          <div>name: {data[20].username}</div>
          <div>company: {data[20].company.name}</div>
          <div>address: {data[20].address.address}</div>
          <div>phone: {data[20].phone}</div>
        </div>
      )}
    </div>
  );
}
