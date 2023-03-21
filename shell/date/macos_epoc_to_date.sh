#!/bin/sh

OUTPUT_FORMAT=+"%Y-%m-%d %H:%M:%S"
EPOC="1679403245"

date -r${EPOC} "${OUTPUT_FORMAT}"
