//interface
function getFullName(person: { firstName: string; lastName: string }) {
  return `${person.firstName} ${person.lastName}`;
}

let person40 = {
  firstName: "Nam",
  lastName: "Nguyen",
  address: "Hanoi",
};

console.log(">>>check person:", getFullName(person40));

//interface dung de dinh nghia cau truc cua doi tuong truyen vao ham
//Cach dinh nghia object Person co 2 thuoc tinh o tren
//Convention: luon bdau bang chu hoa, sdung camelcase
//hoac bdau bang chu I (IPerson)

interface IPerson {
  readonly firstName: string; //mutate
  lastName?: string;
  address: string;
}

function getName(person: IPerson) {
  //   person.firstName = "nem"; -> ko the modify read-only attribute
  return `${person.firstName} ${person.lastName}`;
}

console.log(">>>interface person:", getName(person40));
