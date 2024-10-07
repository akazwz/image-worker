<p align="center">
  <span>
   English |
   <a href="https://github.com/akazwz/image-worker/blob/main/README.zh_CN.md">简体中文</a>
  </span>
<p>
<br />
<div align="center">
  <p>Use cloudflare worker and rust wasm to build an image processing service<p>
</div>

# Cloudflare Worker Image Processing Demo

## Introduction
Welcome to our project showcasing a Cloudflare worker utilizing Rust/WASM to process images. Visit our demo site at [https://image-worker.zwz.workers.dev](https://image-worker.zwz.workers.dev).

## How It Works
Use our service with ease through a set of URL query parameters:

- `url`: Specify the image URL you want to process.
- `width`: The desired width of your output image.
- `height`: The desired height of your output image.

For example, if you have an image at `https://avatars.githubusercontent.com/u/50396286?v=4` and want to modify it to a width of 50px and a height of 50px, your URL would look like this:

```
https://image-worker.zwz.workers.dev?url=https://avatars.githubusercontent.com/u/50396286?v=4&width=50&height=50
```

## Custom Deployment
Remember, the provided instance is a demo version. Users are invited to deploy their own instance of this worker for image processing under their domain.

## Extensible Features
This demonstration worker is compatible with additional features offered by the Rust image library, thereby allowing you to expand its functionalities based on your specifications.

## Conclusion
Experience practicality and convenience with this Cloudflare worker for instant image manipulation. Explore, modify, and extend the service to match your needs. Thank you for your interest, and enjoy your image processing!

# Cloudflare Worker 图像处理演示

## 介绍
欢迎参观我们的项目，展示了一个使用Rust/WASM处理图像的Cloudflare worker。请访问我们的演示站点 [https://image-worker.zwz.workers.dev](https://image-worker.zwz.workers.dev).

## 使用方式
通过一组URL查询参数轻松使用我们的服务：

- `url`: 指定您希望处理的图像URL。
- `width`: 输出图像的期望宽度。
- `height`: 输出图像的期望高度。

例如，如果你有一张位于 `https://avatars.githubusercontent.com/u/50396286?v=4` 的图像，并希望其宽度为50px，高度为50px，你的URL应该是：

```
https://image-worker.zwz.workers.dev?url=https://avatars.githubusercontent.com/u/50396286?v=4&width=50&height=50
```

## 自定义部署
请记住，这只是一个演示版本。用户被邀请在他们的域下部署自己的该worker实例来处理图像。

## 可扩展的功能
此演示worker与Rust图像库提供的额外功能兼容，从而使您可以根据自己的规格扩展其功能。

## 总结
体验使用此 Cloudflare worker 进行即时图像处理的实用性和便利性。探索、修改并扩展服务以满足你的需求。感谢您的兴趣，祝您处理图像愉快！
