#!/bin/bash

image='ccr.ccs.tencentyun.com/selfphotos/website:t9'
docker buildx build --platform linux/amd64 -t $image --push .
