#!/usr/bin/env sh
# abort on errors
set -e
# build
yarn run build
# navigate into the build output directory
cd dist
# if you are deploying to a custom domain
echo 'www.gnbdesign.online' > CNAME
cp index.html 404.html
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:alitokmakci/gnb-ui-docs.git master:gh-pages
cd -