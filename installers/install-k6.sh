#! /bin/bash

set -euxo

INSTALL_PARENT="$HOME"/apps
cd "$INSTALL_PARENT" || exit
version=0.37.0

release=k6-v"$version"-linux-amd64
filename=$release.tar.gz
wget https://github.com/grafana/k6/releases/download/v"$version"/$filename
tar xvfz $filename

sudo rm -f /usr/local/bin/k6
sudo ln -s "$INSTALL_PARENT"/$release/k6 /usr/local/bin/k6

k6 version

rm k6-v"$version"-linux64.tar.gz

# https://github.com/grafana/k6/releases
