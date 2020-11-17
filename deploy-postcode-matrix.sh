#! /bin/bash
set -eu

version=0.1.3
appName=postcode-matrix

rm -rf dist
ncc build w/region-from-postcode/src/lambda
cd dist
zip "$appName".zip index.js
aws s3 cp "$appName".zip s3://scaffoldamples-serverless/v"$version"/"$appName".zip
rm "$appName".zip
cd ..

# cd infrastructure
# terraform apply -var="app_version=$version"
# cd ..

# https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-awscli.html
# This part is covered in basics.tf and the resulting arn:aws are in terraform.tfstate
# aws iam create-role --role-name lambda-ex --assume-role-policy-document file://trust-policy.json
# aws create-user

region=eu-west-2
apiId=postcode-matrix-api
stage=dev
stage=postcode-matrix-dev

lambdaFunction=ScaffoldamplesPostcodeMatrix
YOUR_ACCOUNT_ID=
aws lambda add-permission --function-name arn:aws:lambda:XXXXXX:$lambdaFunction --source-arn arn:aws:execute-api:$region:$YOUR_ACCOUNT_ID:$apiId/*/HTTP_METHOD/resource --principal apigateway.amazonaws.com --statement-id apigateway-access --action lambda:InvokeFunction

curl https://$apiId.execute-api.$region.amazonaws.com/$stage