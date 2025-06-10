export type PageProps = {
  params: {
    id: string;
  };
};
export type User = {
  id: number;
  username: string;
  age: number;
  image: string;
  phone: string;
  company: {
    name: string;
  };
  address: {
    address: string;
  };
};
