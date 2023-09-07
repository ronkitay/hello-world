#!/bin/sh

# 1. du -s * --> Aggregated disk usage per file/directory in the current location
# 2. sort -n --> Sort numerical values

du -s * | sort -n

# 1. du -s * --> Aggregated disk usage in human readable sizes (KB/MB/GB/etc) per file/directory in the current location
# 2. sort -n --> Sort human readable sizes (KB/MB/GB/etc)

du -sh * | sort -h