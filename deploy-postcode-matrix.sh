#! /bin/bash
set -eu

version=0.1.2
appName=postcode-matrix

rm -rf dist
ncc build w/region-from-postcode/src/lambda
cd dist
zip "$appName".zip index.js
aws s3 cp "$appName".zip s3://scaffoldamples-serverless/v"$version"/"$appName".zip
rm "$appName".zip
cd ..

cd infrastructure
terraform apply -var="app_version=$version"
cd ..
