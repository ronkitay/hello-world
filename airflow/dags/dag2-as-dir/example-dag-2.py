import datetime

from airflow import DAG
from airflow.operators.empty import EmptyOperator

my_dag = DAG(
    dag_id="example-dag-2-packed-as-dir",
    start_date=datetime.datetime(2023, 1, 1),
    schedule="@daily",
)

task1 = EmptyOperator(task_id="task-1", dag=my_dag)
task2 = EmptyOperator(task_id="task-2", dag=my_dag)
task3 = EmptyOperator(task_id="task-3", dag=my_dag)

task1 >> [task2, task3]
