#! /bin/bash
set -eu

docker build . -t localhost:32000/linkerd1:0.1.0
docker push localhost:32000/linkerd1:0.1.0
cat deployment.yml | linkerd inject - | kubectl apply -f -
kubectl get deploy
kubectl get pods

curl http://localhost/linkerd1
