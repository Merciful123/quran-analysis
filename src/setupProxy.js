// src/setupProxy.js
import { createProxyMiddleware } from "http-proxy-middleware";

export default (app) => {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://api.quran.com",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "", // Remove the '/api' prefix when forwarding the request
      },
    })
  );
};
