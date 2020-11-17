#! /bin/bash
set -eu

microk8s.enable linkerd
sudo snap alias microk8s.linkerd linkerd
linkerd check
linkerd dashboard
linkerd logs
# these will show pods and deploy exposed via service+ingress. 
linkerd get pods
kubectl get deploy
kubectl -n linkerd get deploy
kubectl get clusterroles | grep linkerd

