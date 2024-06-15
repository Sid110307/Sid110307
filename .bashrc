case $- in
  *i*) ;;
  *) return ;;
esac

HISTCONTROL=ignoreboth
shopt -s histappend
PROMPT_COMMAND="history -a;$PROMPT_COMMAND"
HISTSIZE=2500
HISTFILESIZE=5000

shopt -s checkwinsize
shopt -s globstar
stty -ixon

[ -x /usr/bin/lesspipe ] && eval "$(SHELL=/bin/sh lesspipe)"
[ -z "${debian_chroot:-}" ] && [ -r /etc/debian_chroot ] && debian_chroot=$(cat /etc/debian_chroot)

PS1="${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$ "
case "$TERM" in
  xterm* | rxvt*) PS1="\[\e]0;${debian_chroot:+($debian_chroot)}\u@\h: \w\a\]$PS1" ;;
  *) ;;
esac

if [ -x /usr/bin/dircolors ]; then
  test -r /home/sid/.dircolors && eval "$(dircolors -b /home/sid/.dircolors)" || eval "$(dircolors -b)"
  alias ls='ls -F --color=auto'
  alias dir='dir --color=auto'
  alias vdir='vdir --color=auto'

  alias grep='grep --color=auto'
  alias fgrep='fgrep --color=auto'
  alias egrep='egrep --color=auto'
fi

export GCC_COLORS='error=01;31:warning=01;35:note=01;36:caret=01;32:locus=01:quote=01'

alias ll='ls -AlF'
alias lr='ls -ARF'
alias la='ls -AF'
alias l='ls -lF'

[ -f /home/sid/.bash_aliases ] && . /home/sid/.bash_aliases
[ -f /home/sid/.bash_inits ] && . /home/sid/.bash_inits

if ! shopt -oq posix; then
  [ -f /usr/share/bash-completion/bash_completion ] && . /usr/share/bash-completion/bash_completion
  [ -f /etc/bash_completion ] && . /etc/bash_completion
fi

export DISPLAY=:0
export EDITOR=vim

export NVM_DIR="/home/sid/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"                   
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" 
[ -f "/home/sid/.yarn/bin/nvm" ] && nvm use --lts >>/dev/null

export PYENV_ROOT="$HOME/.pyenv"
export PATH="$PYENV_ROOT/bin:$PATH"
command -v pyenv 1>/dev/null 2>&1 && eval "$(pyenv init -)"

export ANDROID_HOME=$HOME/Android/Sdk
export PATH="$ANDROID_HOME/tools:$ANDROID_HOME/tools/bin:$ANDROID_HOME/platform-tools:$PATH"
[ -s "/etc/profile.d/devkit-env.sh" ] && \. "/etc/profile.d/devkit-env.sh"

export BAT_THEME="OneHalfDark"
export FZF_DEFAULT_COMMAND="rg --hidden --no-ignore -l \"\""

