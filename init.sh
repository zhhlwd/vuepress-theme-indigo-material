# !/usr/bin/env sh
# 此脚本只能在下后运行一次
# 确保脚本抛出遇到的错误
set -e

# 初始化一个仓库,用来保存以后新建文章的时间,
git init

# 下载依赖,实在没有cnpm就该成npm吧
cnpm i

# 打开测试环境
npm run dev
