# Installing

```
kubectl apply -f echo-server-deployment.yml
kubectl apply -f echo-server-service.yml
```

# Testing

```
kubectl port-forward svc/echo-server 8080:80
```

```
curl localhost:8080
```

# Uninstall

```
kubectl delete -f echo-server-service.yml
kubectl delete -f echo-server-deployment.yml
```
