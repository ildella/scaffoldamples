#! /bin/bash
set -eux -o

version=0.13.5

git clone https://github.com/tfutils/tfenv.git "$HOME"/.tfenv
sudo ln -s "$HOME"/.tfenv/bin/* /usr/local/bin
tfenv install $version
tfenv use $version
