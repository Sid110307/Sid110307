#!/usr/bin/env bash

alias rm-trash='echo -n "Emptying Trash... "; command rm -rf /home/sid/.local/share/Trash/**; echo -e "\033[0;32mDone.\033[0m"'
alias rm='trash'
alias tree='tree -aI ".git|.idea|.node\_modules"'

alias py='python3.10'
alias pip='pip3'

alias fun-date='while true; do echo "$(date "+%d/%m/%Y %T" | toilet -f term -F border --gay)"; sleep 1; printf "\033[F\033[F\033[F"; done'
alias ccat='pygmentize -g'
alias cpu-usage='while true; do echo "$(ps -A -o pcpu | tail -n+2 | paste -sd+ | bc)%"; echo -e "\033[F\033[F"; done'
alias webshare='curl -F "sprunge=<-" http://sprunge.us | xclip'

alias cls='clear'
alias firefox='/opt/firefox/firefox'
alias powershell='pwsh'
alias init-chroot='source /etc/profile; source /home/sid/.bashrc; export PS1="(chroot) $PS1"'

alias full-update='sudo apt update -y && sudo apt full-upgrade -y && sudo apt autoremove -y && sudo apt clean -y && sudo apt autoclean -y'
alias pip-upgrade-all='pip list --outdated --format=freeze | grep -v '"'"'^\-e'"'"' | cut -d = -f 1  | xargs -n1 pip install -U'

function git-status-all() {
	directory=$(if test -z "$1"; then echo "."; else echo "$1"; fi)
	cmd="cd '{}' && pwd && git status; echo -e '\n$(printf '=%.0s' {1..80})\n'"

	find $directory -maxdepth 1 -type d \( ! -name $directory \) -exec bash -c "$cmd" \;
}

function mcd() {
		mkdir -p "$1" && cd "$1"
}

