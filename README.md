# echo-req-ip
This is a very simple web server which will display the IP of the client which first requested a file path.  This is useful for discovering the external IP address of a device which cannot easily render a webpage like [ipify.org](https://api.ipify.org?format=json).

## How to install and run
Just clone thi git repo, make sure you've got node installed, and simply do a `node index.js`.  The web server will bind to all IP's on port 80.

## How to use
Once the web server is running, from the device you want to identify the external IP of, make a request like `http://myserver.com/ew0gj8i4weg0`.  Now all subsequent requests to `http://myserver.com/ew0gj8i4weg0` will echo the first client's IP address.  Restarting the web server will clear the log.

## Why bother with this?
Some devices are not able to easily render a web page over even return the result of a GET request, and that makes it difficult to identify the device's external IP.  This is especially true when proxies or tunnels are involved.

## Quick Start
```curl -o- https://raw.githubusercontent.com/creationix/nvm/master/install.sh  | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
nvm install node
nvm use node
apt update
apt install git
git clone https://github.com/triwebb1/echo-req-ip.git
cd echo-req-ip
node index.js
```
