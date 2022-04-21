#! /bin/bash

set -euxo

git clone https://github.com/tfutils/tfenv.git "$HOME"/.tfenv
sudo ln -s "$HOME"/.tfenv/bin/* /usr/local/bin
tfenv install
tfenv use
terraform -version
terraform -install-autocomplete
