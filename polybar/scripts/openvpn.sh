#!/bin/bash

if [ "$1" = "--toggle" ]; then
	sudo systemctl start openvpn-client@client
fi

if [ "$(systemctl is-active openvpn-client@client)" = "active" ]; then
	echo ""
else
	echo ""
fi
