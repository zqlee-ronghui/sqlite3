# install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
source ~/.bashrc

# install nodejs
nvm install 14.2.0
npm set registry https://registry.npm.taobao.org/

# download source file

# init
cd PATH
npm install

# install pm2
npm install -g pm2
pm2 startup
pm2 start index.js —name XXX
pm2 save

DONE!
