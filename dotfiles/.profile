umask 022

[ -n "$BASH_VERSION" ] && [ -f "$HOME/.bashrc" ] && . "$HOME/.bashrc"
export PATH="/usr/bin:/usr/sbin:$HOME/.local/bin:$(yarn global bin):$HOME/.local/share/JetBrains/Toolbox/scripts:$PATH"

