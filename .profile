# ~/.profile: executed by the command interpreter for login shells.
# This file is not read by bash(1), if ~/.bash_profile or ~/.bash_login
# exists.
# see /usr/share/doc/bash/examples/startup-files for examples.
# the files are located in the bash-doc package.
umask 022

if [ -n "$BASH_VERSION" ]; then
	if [ -f "$HOME/.bashrc" ]; then
		. "$HOME/.bashrc"
	fi
fi

if [ -d "$HOME/.rustup" ]; then
	RUSTUP_HOME="$HOME/.rustup"
fi
if [ -d "$HOME/.cargo" ]; then
	CARGO_HOME="$HOME/.cargo"
fi
. "$HOME/.cargo/env"

export PATH="$HOME/bin:$HOME/.local/bin:$(yarn global bin):/usr/local/go/bin:/opt/firefox/firefox:/usr/local/go/src:/usr/local/cuda-11.7/bin:$HOME/.local/share/JetBrains/Toolbox/scripts:$PATH"
