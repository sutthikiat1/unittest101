//interface
//ในภาษา typescrtipt เราจะมีสิ่งหนึ่งที่เรียกกว่า interface

const person: IPerson = {
  name: "Boss",
  age: 28,
  gender: "male",
};

interface IPerson {
  name: string;
  age: number;
  gender: string;
}

interface IAddress {
  address: string;
}

interface ICorporate extends IPerson, IAddress {
  job: string;
}

//Type Alias
type Person = {
  name: string;
  age: number;
  gender: string;
};

type Address = {
  address: string;
};

type Corporate = IPerson &
  IAddress & {
    job: string;
  };
