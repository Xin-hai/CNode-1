#!/usr/bin/env sh

#!/usr/bin/env sh

# 发生错误时中止
set -e

# 构建
yarn build

# 进入dist目录
cd dist

git init
git add -A
git commit -m 'deploy'


# 部署到 https://xin-hai.github.io  -f 强制执行
git push -f git@github.com:Xin-hai/CNode-website-1.git master:gh-pages

# 回到之前的那一层目录
cd -