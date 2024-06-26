#!/usr/bin/env bash

alias rm-trash='echo -n "Emptying Trash... " && sudo rm -rf "/home/sid/.local/share/Trash/**" && echo -e "\033[0;32mDone.\033[0m"'
alias rm='trash'
alias tree='tree -aI ".git|.idea|.node_modules"'

alias py=$($HOME/.pyenv/bin/pyenv which python3)
alias pip=$($HOME/.pyenv/bin/pyenv which pip)

alias fun-date='while true; do echo "$(date "+%d/%m/%Y %T" | toilet -f term -F border --gay)"; sleep 1; printf "\033[F\033[F\033[F"; done'
alias ccat='batcat'
alias rg='batgrep --hidden'
alias man='batman'
alias diff='batdiff'
alias fzf='fzf --preview "bat --color=always --style=numbers --line-range=:500 {}"'

alias cpu-usage='while true; do echo "$(ps -A -o pcpu | tail -n+2 | paste -sd+ | bc)%"; echo -e "\033[F\033[F"; done'
alias cls='clear'
alias firefox='/opt/firefox/firefox'
alias powershell='pwsh'
alias init-chroot='source /etc/profile; source /home/sid/.bashrc; export PS1="(chroot) $PS1"'

alias sync-pc='git-pull-all Desktop --home && full-update && pushd /home/sid/Desktop/Android && git-pull-all && popd'
alias pyenv-install-latest='pyenv install $(pyenv install --list | grep -v - | grep -v b | grep -v a | tail -1)'
alias full-update='sudo apt update -y && sudo apt full-upgrade -y && sudo apt autoremove -y && sudo apt clean -y && sudo apt autoclean -y && [ $(command -v snap) ] && sudo snap refresh'
alias pip-upgrade-all='pip list --outdated --format=freeze | grep -v '"'"'^\-e'"'"' | cut -d = -f 1  | xargs -n1 pip install -U'

function git-status-all() {
    [ "$1" == "--home" ] && pushd /home/sid

	directory=$(if test -z "$1"; then echo "."; else echo "$1"; fi)
	cmd="cd '{}' && pwd && git status -s -uno; echo -e '\n$(printf '=%.0s' {1..80})\n'"

	find $directory -maxdepth 1 -type d \( ! -name $directory \) -exec bash -c "$cmd" \;
}

function git-pull-all() {
    [ "$1" == "--home" ] && pushd /home/sid

	directory=$(if test -z "$1"; then echo "."; else echo "$1"; fi)
	cmd="cd '{}' && pwd && git pull --recurse-submodules; echo -e '\n$(printf '=%.0s' {1..80})\n'"

	find $directory -maxdepth 1 -type d \( ! -name $directory \) -exec bash -c "$cmd" \;
}

function mcd() {
    mkdir -p "$1" && cd "$1"
}

function update-discord() {
    killall Discord
    if [ ! -f /home/sid/Downloads/discord-latest.tar.gz ]; then
		echo -n "File not found. Downloading... "
		wget -qO "/home/sid/Downloads/discord-latest.tar.gz" "https://discord.com/api/download?platform=linux&format=tar.gz"
		echo "Done."
	fi

	sudo tar -xzf /home/sid/Downloads/discord-latest.tar.gz -C /opt/
	sudo cp /usr/share/applications/discord.desktop /opt/Discord/discord.desktop
	sudo rm -rf /home/sid/Downloads/discord-latest.tar.gz
}

alias weather='curl wttr.in'
alias ext-ip='curl ip.me'

