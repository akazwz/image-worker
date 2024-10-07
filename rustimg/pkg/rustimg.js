
import * as wasm from "./rustimg_bg.wasm";
import { __wbg_set_wasm } from "./rustimg_bg.js";
__wbg_set_wasm(wasm);
export * from "./rustimg_bg.js";
