#!/bin/bash

#download node and npm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install 16
nvm use 16
#create our working directory if ot doesnt exist
DIR="/home/ubuntu/app-web"
if [ -d "$DIR" ]; then
    echo "${DIR} exists"
else 
    echo "Creating ${DIR} directory"
    mkdir ${DIR}
fi
rm -rf ${DIR}/dist