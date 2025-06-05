export type person = {
  fName: string;
  lName: string;
};
export type GreetProp = {
  name?: string;
  age: number;
  islogin: boolean;
  person: person;
  list?: person[];
  status: "loading" | "success" | "error";
};
