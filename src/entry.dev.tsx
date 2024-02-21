import { render, type RenderOptions } from "@builder.io/qwik";
import Root from "./root";

export default function (opts: RenderOptions) {
  console.log("render", opts);
  return render(document, <Root />, opts);
}
