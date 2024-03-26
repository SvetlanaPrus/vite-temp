// import "./src/08.js";

import imageUrl from "./src/img/javascript.svg";
document.getElementById("test").src = imageUrl;

// const data = import.meta.glob("./src/10/*.js", { eager: true });
// const data = import.meta.glob("./src/10/*.js", { as: "raw", eager: true }); // string
// const data = import.meta.glob("./src/10/*.js", { as: "url", eager: true }); // path

// const modules = import.meta.glob("./src/10/*.js", { import: "myname" }); // print myname, see below document
// const modules = import.meta.glob("./src/10/*.js", { import: "default" }); // print default, see below document

// document.addEventListener("click", () => {
//   Object.values(modules).forEach((module) => {
//     module().then((myname) => {
//       console.log(myname);
//     });
//   });
// });

const modules = import.meta.glob("./src/10/*.js", {
  eager: true,
  import: "myname",
});

console.log(modules); // print object with values (myname)
