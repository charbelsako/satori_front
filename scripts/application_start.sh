#!/bin/bash
sudo chmod -R 777 /home/ubuntu/app-web
#navifate into our worling directory where we have all our github files
cd /home/ubuntu/app-web

#add npm and node to path
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" # loads nvm bash_copletion (node is in)

#install node modules
# npm install
# npm run dev-build
# #!/bin/bash
# pm2 describe appname > /dev/null
# RUNNING=$?

# if [ "${RUNNING}" -ne 0 ]; then
#     pm2 start server.js --name "app-web" 
# else
#   pm2 restart "app-web"
# fi;

# #start our node app in the background
# node server.js > app.out.log 2> app.err.log < /dev/null &