# Infrastructure

## Setup AWS

Login to AWS as root and point to [IAM Users](https://console.aws.amazon.com/iam/home#/users). 
Create a user to generate and get **Access key ID and secret access key**.

The IAM User will need the be in a Group with Administrtor privilege 

Also remember to verify the email address, AWS will send a verification email with the link in a standard email verification fashion.

Then run:

```shell
sudo apt install awscli -V
aws configure
```

Insert the Access Key, the secret, region and default output and the default credentials and config will be created in `~/.aws/credentials` and `~/.aws/config`

Reference:
  * [AWS CLI docs](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html)
  * [AWS CLI quickstart]https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html#cli-configure-quickstart-creds
  * https://learn.hashicorp.com/tutorials/terraform/lambda-api-gateway

## Lambda terraform and deploy

Now create a service.tf by copying basic lambda config from https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/lambda_function
Remember to change region and bucket name accordingly

Setup once

```shell
aws s3api create-bucket --bucket=dellafiore-up-serverless --region=eu-west-2 --create-bucket-configuration LocationConstraint=eu-west-2
cd infrastructure
terraform init
cd ..
```

Deploy


```shell
version=1.0.2
cd src
zip ../example.zip main.js
cd ..
aws s3 cp example.zip s3://dellafiore-up-serverless/v$version/example.zip

cd infrastructure
terraform apply -var="app_version=$version"
cd ..
```

Test

```shell
aws lambda invoke --region=eu-west-2 --function-name=DellafioreUpServerless output.txt
```

## AWS API Gateway 
 
With Fastify: https://www.fastify.io/docs/latest/Serverless/#aws-lambda
Apparently, AWS API Gateway does not support `Streams` yet...

  * [AWS Docs](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/apigatewayv2_api)
  * [REST vs HTTP](https://www.learnaws.org/2020/09/12/rest-api-vs-http-api/)
  * [Streams]https://apifriends.com/api-streaming/stream-your-aws-api-gateway/
