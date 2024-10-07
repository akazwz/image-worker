import * as imports from '../rustimg/pkg/rustimg_bg.js'
import WASM from '../rustimg/pkg/rustimg_bg.wasm'

const instance = new WebAssembly.Instance(WASM)

imports.__wbg_set_wasm(instance.exports)

export * from '../rustimg/pkg/rustimg_bg.js'

