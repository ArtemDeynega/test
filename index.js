/// стрелочные функции и this

const input = document.querySelector("#input");

input.addEventListener("input", function () {
  //   let value = "";

  setInterval(() => {
    console.log(this.value);
  }, 1000);
});
// const sayHi = () => {
//   console.log("THIS: ", this);
// };

// sayHi();

// const user = {
//   name: "Jhon",
//   greet: sayHi, // method
// };
// user.greet();

// const user2 = {
//   name: "Ivan",
//   handleEvent() {
//     const someHeader = document.querySelector("#heading");
//     someHeader.addEventListener("click", () => {
//       console.log("THIS CLICK: ", this);
//     });
//   },
// };
// // user.greet();

// // user2.handleEvent();

// function test(param1, param2) {
//   console.log(this, param1, param2);
// }
// test.apply({ name: "ololo" }, ["hello", "join"]);
// test.call({ test: "TEST" }, "hello", "join");

// const test2 = test.bind(user2);

// test2();

// function sayHi() {
//   console.log(`THIS:, `, this);
// }
// // sayHi();

// const user = {
//   name: "Jhon",
//   greet: sayHi, // method
// };
// // user.greet();

// const user2 = {
//   name: "Ivan",

//   greet() {
//     console.log(this);
//   },
//   //   greet: sayHi, // method
// };
// // user.greet();

// user2.greet();
