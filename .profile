# ~/.profile: executed by the command interpreter for login shells.
# This file is not read by bash(1), if ~/.bash_profile or ~/.bash_login
# exists.
# see /usr/share/doc/bash/examples/startup-files for examples.
# the files are located in the bash-doc package.

# the default umask is set in /etc/profile; for setting the umask
# for ssh logins, install and configure the libpam-umask package.
umask 022

if [ -n "$BASH_VERSION" ]; then
	if [ -f "$HOME/.bashrc" ]; then
		. "$HOME/.bashrc"
	fi
fi

if [ -d "$HOME/bin" ]; then
	PATH="$HOME/bin:$PATH"
fi

if [ -d "$HOME/.local/bin" ]; then
	PATH="$HOME/.local/bin:$PATH"
fi

if [ -d "$(yarn global bin)" ]; then
	PATH="$(yarn global bin):$PATH"
fi

if [ -d "/opt/firefox/firefox" ]; then
	PATH=/opt/firefox/firefox:$PATH
fi

if [ -d "$HOME/.rustup" ]; then
	RUSTUP_HOME="$HOME/.rustup"
fi
if [ -d "$HOME/.cargo" ]; then
	CARGO_HOME="$HOME/.cargo"
fi
. "$HOME/.cargo/env"

if [ -d "/usr/local/go/bin" ]; then
	PATH="$PATH:/usr/local/go/bin"
fi

if [ -d "/usr/local/go/src" ]; then
	PATH="$PATH:/usr/local/go/src"
fi

if [ -d "/usr/local/cuda-11.7/bin" ]; then
	PATH="$PATH:/usr/local/cuda-11.7/bin"
fi

export PATH="$PATH:$HOME/.local/share/JetBrains/Toolbox/scripts"
