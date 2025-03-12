#!/bin/bash

# Usage checking ############################################
if [[ $# -lt 2 ]]; then
	echo "Usage: $0 <table> <file>"
	exit 1
fi

if [[ ( $@ == "--help") ||  $@ == "-h" ]]
then 
	echo "Usage: $0 <table> <file>"
    echo "file: first row must contain column names separated by commas"
    echo "all later lines must contain data separated by columns"
	exit 0
fi 
##############################################################

export PGHOST=localhost
export PGUSER=postgres
export PGDATABASE=beaversearchtesting

file=$2
table=$1
columns=$(head -n 1 $file)

##############################################################

while IFS= read -r line
do
	echo "$(psql -c "insert into $table($columns) values('$line');")"
done < <(tail -n +2 $file)

##############################################################