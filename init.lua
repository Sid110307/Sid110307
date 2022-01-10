-- Config
local Plug = vim.fn['plug#']
vim.cmd("set number")
vim.cmd("set tabstop=4")

-- Plugins
vim.call("plug#begin")

Plug 'preservim/nerdtree'
Plug 'github/copilot.vim'
Plug 'nvim-lua/plenary.nvim'
Plug 'TimUntersberger/neogit'
Plug 'sbdchd/neoformat'

-- Custom Plugins
Plug '~/.config/plugin/vim-qas'

vim.call("plug#end")

-- NERDTree
vim.cmd("au VimEnter * NERDTree")

vim.api.nvim_set_keymap("n", "<F9>", "<cmd>NERDTreeToggle<CR>", {noremap = true, silent = true})
vim.api.nvim_set_keymap("n", "<F8>", "<cmd>NERDTreeRefreshRoot<CR>", {noremap = true, silent = true})

-- Cursor Movement

vim.api.nvim_set_keymap("n", "<C-k>", "<cmd>wincmd k<CR>", {noremap = true, silent = true})
vim.api.nvim_set_keymap("n", "<C-j>", "<cmd>wincmd j<CR>", {noremap = true, silent = true})
vim.api.nvim_set_keymap("n", "<C-h>", "<cmd>wincmd h<CR>", {noremap = true, silent = true})
vim.api.nvim_set_keymap("n", "<C-l>", "<cmd>wincmd l<CR>", {noremap = true, silent = true})

-- QAS
vim.cmd("autocmd BufRead,BufNewFile *.qas set filetype=qas")

-- Neogit
local neogit = require('neogit')
neogit.setup {}

vim.api.nvim_set_keymap("n", "<leader>g", "<cmd>Neogit<CR>", {noremap = true, silent = true})

-- Neoformat
vim.api.nvim_set_keymap("n", "<leader>f", "<cmd>Neoformat<CR>", {noremap = true, silent = true})

vim.cmd("augroup neoformat")
vim.cmd("\tautocmd!")
vim.cmd("\tautocmd BufWritePre * undojoin | Neoformat")
vim.cmd("augroup END")
