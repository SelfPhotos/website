#!/bin/sh
# 99-unzip.sh
# 运行在 /docker-entrypoint.d/ 下，nginx 启动前自动执行

if [ -f /usr/share/nginx/html/dist.zip ]; then
    echo "Found dist.zip, extracting..."
    # 解压到当前目录 (/usr/share/nginx/html)
    unzip -o /usr/share/nginx/html/dist.zip -d /usr/share/nginx/html/
    
    # 删除压缩包以释放空间（虽然在容器层删除不会减少镜像大小，但能保持运行时干净）
    rm /usr/share/nginx/html/dist.zip
    echo "Extraction complete."
else
    echo "dist.zip not found, skipping extraction."
fi
