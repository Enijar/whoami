#!/usr/bin/env bash

ssh root@iamjames.app -T <<EOF
	cd /var/www/html/whoami
	echo "Pulling from master..."
	echo -e ""
	git stash
	git pull
	git stash clear

	echo "Installing dependencies..."
	echo -e ""
	npm install

	echo "Building assets..."
	echo -e ""
	npm run assets:build

	echo "Building server..."
	echo -e ""
	npm run server:build

	echo "Restarting server..."
	echo -e ""
	forever restart build/server
	exit
EOF
