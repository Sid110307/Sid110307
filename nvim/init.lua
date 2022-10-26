-- Config
local Plug = vim.fn["plug#"]
local nnoremap = function(lhs, rhs)
	vim.api.nvim_set_keymap("n", lhs, rhs, { noremap = true, silent = true })
end

vim.opt.number = true

vim.opt.tabstop = 4
vim.opt.softtabstop = 4
vim.opt.smartindent = true

vim.opt.guifont = "Fira Code 12"
vim.opt.mouse = "a"
vim.opt.mousefocus = true

-- Plugins
vim.call("plug#begin")

Plug 'preservim/nerdtree'
Plug 'github/copilot.vim'
Plug 'nvim-lua/plenary.nvim'
Plug 'TimUntersberger/neogit'
Plug 'sbdchd/neoformat'
Plug 'joshdick/onedark.vim'
Plug 'nvim-treesitter/nvim-treesitter'

-- Custom Plugins
Plug '~/.config/syntax/vim-qas'

vim.call("plug#end")

-- NERDTree
vim.cmd("au VimEnter * NERDTree")
vim.g.NERDTreeIgnore = {"^node_modules$", "\\~$"}

nnoremap([[<F9>]], [[:NERDTreeToggle<CR>]])
nnoremap([[<F8>]], [[:NERDTreeRefreshRoot<CR>]])

-- Cursor Movement
nnoremap([[<C-k>]], [[:wincmd k<CR>]])
nnoremap([[<C-j>]], [[:wincmd j<CR>]])
nnoremap([[<C-h>]], [[:wincmd h<CR>]])
nnoremap([[<C-l>]], [[:wincmd l<CR>]])

-- QAS
vim.cmd("autocmd BufRead,BufNewFile *.qas set filetype=qas")

-- Neogit
local neogit = require("neogit")
neogit.setup {}

nnoremap([[<leader>g]], [[:Neogit<CR>]])

-- Neoformat
nnoremap([[<leader>f]], [[:Neoformat<CR>]])

vim.cmd([[
	augroup fmt
		autocmd!
		autocmd BufWritePre * undojoin | Neoformat
	augroup END
]])

-- Tree-sitter
vim.wo.foldmethod = "expr"
vim.wo.foldexpr = "nvim_treesitter#foldexpr()"
vim.o.foldtext = [[substitute(getline(v:foldstart),'\\t',repeat('\ ',&tabstop),'g').'...'.trim(getline(v:foldend)) . ' (' . (v:foldend - v:foldstart + 1) . ' lines)']]
vim.wo.fillchars = "fold:\\"
vim.wo.foldnestmax = 3
vim.wo.foldminlines = 1

require("nvim-treesitter.configs").setup {
  ensure_installed = "all",
  sync_install = true,
  auto_install = true,
  highlight = {
    enable = true,
	disable = function(lang, buf)
        local max_filesize = 100 * 1024 -- 100 KB
        local ok, stats = pcall(vim.loop.fs_stat, vim.api.nvim_buf_get_name(buf))
        if ok and stats and stats.size > max_filesize then
            return true
        end
    end,
  },
}