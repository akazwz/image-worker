use std::io::Cursor;
use wasm_bindgen::prelude::*;
use image::{load_from_memory, ImageFormat};

#[wasm_bindgen]
pub fn resize_image(binary: Vec<u8>, width: u32, height: u32) -> Vec<u8> {
    // 重新调整图像大小
    let img = load_from_memory(&binary).unwrap();
    let img = img.resize(width, height, image::imageops::FilterType::Lanczos3);
    let mut buf = Cursor::new(Vec::new());
    img.write_to(&mut buf, ImageFormat::WebP).unwrap();
    buf.into_inner()
}

#[wasm_bindgen]
pub fn hello() -> String {
    "Hello, wasm!".to_string()
}

