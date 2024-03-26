import "./src/08.js";
import collect from "collect.js";

import imageUrl from "./src/img/javascript.svg";
document.getElementById("test").src = imageUrl;
console.log("image: ", imageUrl);

const data = import.meta.glob("./src/10/*.js", { eager: true });
console.log("folder 10: ", data);
console.log("collect.js: ", collect([1, 3, 3, 7]).avg());

// Object.values(modules).forEach((module) => {
//   module().then((data) => {
//     console.log(data.default);
//   });
// });
