import "./style.css";
import { clockTime } from "./fn/dateFn";
import { phoneNum } from "./fn/stringFn";

const app = document.querySelector<HTMLDivElement>("#app")!;
document.getElementById("phone").addEventListener("keyup", (e) => {
  const input = e.target as HTMLInputElement;
  const value = input.value;
  input.value = phoneNum(value);
});

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <h2>${clockTime.hours + clockTime.ampm}</h2>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
