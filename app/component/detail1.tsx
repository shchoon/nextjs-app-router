import Image from "next/image";

export default async function Detail1() {
  //   const [data, setData] = useState<any[]>();

  //   const getData = async () => {
  //     const getData = await fetch("https://dummyjson.com/users?limit=200");
  //     const data = await getData.json();
  //     const userData = data.users;

  //     setData(userData);
  //   };
  //   useEffect(() => {
  //     setTimeout(() => {
  //       getData();
  //     }, 2000);
  //   });

  const getData = await fetch("https://dummyjson.com/users?limit=200");
  const data = await getData.json();
  let userData;
  setTimeout(() => {
    userData = data.users;
  }, 2000);

  return (
    <div>
      {data && (
        <div key={data[0].id}>
          <Image width={100} height={100} src={data[0].image} alt="" />
          <div>name: {data[0].username}</div>
          <div>company: {data[0].company.name}</div>
          <div>address: {data[0].address.address}</div>
          <div>phone: {data[0].phone}</div>
        </div>
      )}
    </div>
  );
}
