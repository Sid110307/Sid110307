#!/bin/bash

if [ "$1" = "--toggle" ]; then
	playerctl play-pause
elif [ "$1" = "--next" ]; then
	playerctl next
elif [ "$1" = "--prev" ]; then
	playerctl previous
fi

if [ -n "$(playerctl metadata)" ]; then
	if [ "$(playerctl status)" = "Playing" ]; then
		echo -e "\uf04c $(playerctl metadata artist) - $(playerctl metadata title)"
	else
		echo -e "\uf04b $(playerctl metadata artist) - $(playerctl metadata title)"
	fi
else
	echo ""
fi
