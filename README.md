# Scaffoldup

[![CircleCI](https://circleci.com/gh/ildella/scaffoldup.svg?style=svg&circle-token=3c234614374dfafea47fa01d51deac0d165af92c)](https://circleci.com/gh/ildella/scaffoldup)

## Try it

```shell
yarn
yarn test
```

At this stage, to try a smoke end-to-end test on local machine, we need to start the app and run tests in a different shell:

```shell
## shell 1
yarn workspace @scaffoldup/region-from-postcode start
## shell 2
./e2e-local.sh
```
