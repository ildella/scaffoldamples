#! /bin/bash
# !!! Server must be running !!!
# yarn workspace @scaffoldup/region-from-postcode start

set -euxo

yarn workspace @scaffoldample/region-from-postcode start
k6 run w/e2e/smoke.k6.js
