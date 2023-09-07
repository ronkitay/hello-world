#!/bin/sh

# 1. find . -type f -maxdepth 1 --> Find all files in current directory without sub directories
# 1.1. -exec du {} + --> Run `du`` on each file to get their file size
# 2. sort -n --> Sort the list numerically

find . -type f -maxdepth 1 -exec du {} + | sort -n

# 1. find . -type f -maxdepth 1 --> Find all files in current directory without sub directories
# 1.1. -exec du -h {} + --> Run `du`` on each file to get their human readable file size (KB/MB/GB/etc)
# 2. sort -h --> Sort the list by human readable sizes (KB/MB/GB/etc)

find . -type f -maxdepth 1 -exec du -h {} + | sort -h