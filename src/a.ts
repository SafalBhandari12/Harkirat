interface User {
  firstName: string;
  secondName: string;
  email: string;
  age: number;
}

function isLega(user: User): boolean {
  return user.age > 18;
}

console.log(
  isLega({
    firstName: "safal",
    secondName: "bhandari",
    email: "safalbhandari069@gmail.com",
    age: 19,
  })
);
