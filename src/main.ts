import "./style.css";
import { clockTime } from "./test";

const app = document.querySelector<HTMLDivElement>("#app")!;
app.innerHTML = `
  <h1>Hello Vite!</h1>
  <h2>${clockTime.hours + clockTime.ampm}</h2>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
