# Scaffoldup

[![CircleCI](https://circleci.com/gh/ildella/scaffoldamples.svg?style=svg&circle-token=f049e49529737c3aab90d8ec09492822089fbf78)](https://circleci.com/gh/ildella/scaffoldup)

## Try it

```shell
yarn
yarn test
```

At this stage, to try a smoke end-to-end test on local machine, we need to start the app and run tests in a different shell:

```shell
## shell 1
yarn workspace @scaffoldample/region-from-postcode start

## shell 2
./e2e-local.sh
```

## Install local dependencies

```shell
./installers/install-circleci-cli.sh
./installers/install-k6.sh
./installers/install-terraform.sh
```

## Manual Deployment

So far we can deploy 1 service with these shell script:

```shell
aws s3api create-bucket --bucket=scaffoldamples-serverless --region=eu-west-2 --create-bucket-configuration LocationConstraint=eu-west-2
cd infrastructure && terraform init && cd ..
yarn workspace @scaffoldample/region-from-postcode deploy.postcode
```
