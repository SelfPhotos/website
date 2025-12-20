# 第一阶段：构建
FROM node:22-alpine AS builder

WORKDIR /app

# 安装 zip 工具
RUN apk add --no-cache zip

# 复制依赖文件
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制源码
COPY . .

# 构建项目
RUN npm run build

# 压缩 dist 目录内容 (进入 dist 目录打包，这样解压后直接是文件)
RUN cd dist && zip -r ../dist.zip .

# 第二阶段：运行
# 用户请求 nginx:1.29-alpine-slim，但该 tag 不存在，使用最接近的 nginx:alpine (基于 Alpine Linux)
FROM nginx:1.29-alpine-slim

# 安装 unzip
#RUN apk add --no-cache unzip

# 移除默认 nginx 页面
RUN rm -rf /usr/share/nginx/html/*

# 复制构建产物 (zip)
COPY --from=builder /app/dist.zip /usr/share/nginx/html/dist.zip

# 复制 Nginx 配置
COPY docker/nginx/nginx.conf /etc/nginx/nginx.conf
COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf

# 复制 SSL 证书
RUN mkdir -p /etc/nginx/ssl
COPY docker/nginx/aikanxiangce.com_bundle.crt /etc/nginx/ssl/aikanxiangce.com_bundle.crt
COPY docker/nginx/aikanxiangce.com.key /etc/nginx/ssl/aikanxiangce.com.key

# 复制并设置启动脚本 (利用 nginx 镜像的 docker-entrypoint.d 机制)
COPY docker/entrypoint.sh /docker-entrypoint.d/99-unzip.sh
RUN chmod +x /docker-entrypoint.d/99-unzip.sh

# 暴露端口
EXPOSE 80 443

# 启动 Nginx (默认 CMD)
CMD ["nginx", "-g", "daemon off;"]
