#! /bin/bash
set -eu

INSTALL_FOLDER="./.k6"
version=0.28.0
mkdir "$INSTALL_FOLDER"
cd "$INSTALL_FOLDER" || exit
wget https://github.com/loadimpact/k6/releases/download/v"$version"/k6-v"$version"-linux64.tar.gz
tar xvfz k6-v"$version"-linux64.tar.gz
rm k6-v"$version"-linux64.tar.gz
# sudo ln -s "$INSTALL_FOLDER"/k6-v"$version"-linux64/k6 /usr/local/bin/k6
# k6 version
