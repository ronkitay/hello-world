docker run -v /Users/ronk/Personal/hello-world/airflow:/tests/ \
     -e DAG_FOLDER=/tests/dags \
     -e AIRFLOW__CORE__PLUGINS_FOLDER="/tests/plugins" \
     -e REQUIREMENT_FILE="/tests/requirements/requirements.txt" \
     -e VAR_FILE="/tests/vars/var.json" \
     -e CONN_FILE="/tests/connections/conns.json" \
     qwilt/cicd-airflow-dag-py-3.11.3-airflow-2.5.1:v0.0.1