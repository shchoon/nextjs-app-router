export type PageProps = {
  params: {
    id: number;
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
