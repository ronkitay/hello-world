#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

docker run --rm \
     -v "${SCRIPT_DIR}/dags:/opt/airflow/dags:ro" \
     -e AIRFLOW__CORE__LOAD_EXAMPLES=False \
     apache/airflow:3.3.2 \
     bash -c 'airflow db migrate && airflow dags list -l'
