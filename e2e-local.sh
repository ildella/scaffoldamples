#! /bin/bash
# !!! Server must be running !!!
# yarn workspace @scaffoldup/region-from-postcode start
set -eu
./.k6/k6-v0.28.0-linux64/k6 run w/e2e/smoke.k6.js
