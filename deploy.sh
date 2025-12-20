#!/bin/bash

# 容器名称
CONTAINER_NAME="aikanxiangce_website"
# 镜像名称 (默认)
IMAGE_NAME="website:t4"

# 如果传入了参数，则作为镜像名称
if [ -n "$1" ]; then
    IMAGE_NAME="$1"
fi

echo "Deploying $IMAGE_NAME..."

# 停止并删除旧容器
if [ "$(docker ps -q -f name=$CONTAINER_NAME)" ]; then
    echo "Stopping existing container..."
    docker stop $CONTAINER_NAME
fi

if [ "$(docker ps -aq -f name=$CONTAINER_NAME)" ]; then
    echo "Removing existing container..."
    docker rm $CONTAINER_NAME
fi

# 确保 deploy 目录存在 (用于挂载)
if [ ! -d "${HOME}/deploy" ]; then
    mkdir -p "${HOME}/deploy"
    echo "Created ${HOME}/deploy directory"
fi

# 运行新容器
echo "Starting new container..."
docker run -d \
  --name $CONTAINER_NAME \
  --restart always \
  -p 80:80 \
  -p 443:443 \
  -e TZ="Asia/Shanghai" \
  -v ${HOME}/deploy:/deploy:ro \
  $IMAGE_NAME

echo "Deployment successful!"
