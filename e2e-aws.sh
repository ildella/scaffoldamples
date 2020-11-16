#! /bin/bash
set -eu

aws lambda invoke --region=eu-west-2 --function-name=ScaffoldamplesPostcodeMatrix postcode-matrix-output.txt
