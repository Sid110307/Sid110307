#!/bin/bash

get_player_info() {
    local status=$(playerctl -p "$1" status 2>/dev/null)
    local metadata=$(playerctl -p "$1" metadata 2>/dev/null)

    if [ -n "$metadata" ]; then
        local artist=$(playerctl -p "$1" metadata artist)
        local title=$(playerctl -p "$1" metadata title)

        if [ "$status" = "Playing" ]; then
            echo -e "\uf04c $artist - $title"
        else
            echo -e "\uf04b $artist - $title"
        fi
    else
        echo ""
    fi
}

if [ "$1" = "--toggle" ]; then
    playerctl play-pause
elif [ "$1" = "--next" ]; then
    playerctl next
elif [ "$1" = "--prev" ]; then
    playerctl previous
fi

if [ -n "$(playerctl -p spotify metadata)" ]; then
    get_player_info "spotify"
elif [ -n "$(playerctl metadata)" ]; then
    get_player_info ""
else
    echo ""
fi

