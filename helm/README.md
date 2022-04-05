# Helm

- [Helm](#helm)
  - [Initialization](#initialization)
  - [Template Testing](#template-testing)
  - [Installation](#installation)
  - [Upgrade](#upgrade)
  - [Query](#query)
    - [See Charts](#see-charts)
    - [Chart History](#chart-history)
  - [Rollback](#rollback)
  - [Uninstall](#uninstall)
  - [Where is the state stored?](#where-is-the-state-stored)
  - [Install a pre-canned chart](#install-a-pre-canned-chart)

## Initialization

```bash
helm create <name>
```

## Template Testing

```bash
helm template . --set "image.repository"="ealen/echo-server" --set "image.tag"="latest"
```

## Installation

```bash
helm install echo-server . --set "image.repository"="ealen/echo-server" --set "image.tag"="latest"
```

## Upgrade

```bash
helm upgrade echo-server . --set "image.repository"="ealen/echo-server" --set "image.tag"="latest" --set "replicaCount"=2
```

## Query

### See Charts

```bash
helm ls
```

Example:

```text
NAME                NAMESPACE   REVISION   UPDATED                                   STATUS     CHART                APP VERSION
echo-server         ronk        3          2022-04-05 11:29:52.414111 +0300 IDT      deployed   echo-server-0.1.0    1.16.0
```

### Chart History

```bash
helm history echo-server
```

```text
REVISION    UPDATED                     STATUS        CHART                APP VERSION    DESCRIPTION
1           Tue Apr  5 11:25:09 2022    superseded    echo-server-0.1.0    1.16.0         Install complete
2           Tue Apr  5 11:28:04 2022    superseded    echo-server-0.1.0    1.16.0         Upgrade complete
3           Tue Apr  5 11:29:52 2022    deployed      echo-server-0.1.0    1.16.0         Upgrade complete
```

## Rollback

```bash
helm rollback echo-server
```

Or

```bash
helm history echo-server <target revision>
```

## Uninstall

```bash
helm uninstall echo-server
```

## Where is the state stored?

```bash
kubectl get secrets
```

```text
NAME                                                      TYPE                                  DATA   AGE
sh.helm.release.v1.echo-server.v1                         helm.sh/release.v1                    1      13m
sh.helm.release.v1.echo-server.v2                         helm.sh/release.v1                    1      10m
sh.helm.release.v1.echo-server.v3                         helm.sh/release.v1                    1      8m58s
sh.helm.release.v1.echo-server.v4                         helm.sh/release.v1                    1      65s
```

## Install a pre-canned chart

```bash
helm install <chart-name> <actual-chart>
```

```bash
helm install my-grafana grafana/grafana
```
