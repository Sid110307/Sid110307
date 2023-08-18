-- Config
vim.g.autosave = true

vim.opt.tabstop = 4
vim.opt.softtabstop = 4
vim.opt.smartindent = true

vim.opt.mouse = "a"
vim.opt.mousefocus = true
vim.opt.termguicolors = true

-- Plugins
require('packer').startup(function(use)
  use 'github/copilot.vim'
  use 'mhartington/formatter.nvim'
  use 'andweeb/presence.nvim'

  -- Custom Plugins
  use '~/.config/syntax/vim-qas'
end)

-- nvim-tree
vim.g.loaded_netrw = 1
vim.g.loaded_netrwPlugin = 1

local nvimTree = require("nvim-tree")
nvimTree.setup({
  sort_by = "case_sensitive",
  view = {
    width = 30,
    side = "left"
  },
  renderer = {
    group_empty = true,
    show_hidden = true
  },
  filters = {
    dotfiles = true,
    exclude = {".idea", ".vs", ".git", nvimTree.git.ignore, nvimTree.filters.dotfiles}
  }
})

local function open_nvim_tree(data)
  if vim.fn.isdirectory(data.file) == 1 then vim.cmd.cd(data.file) end

  require("nvim-tree.api").tree.open()
end

vim.api.nvim_create_autocmd({ "VimEnter" }, { callback = open_nvim_tree })

-- QAS
vim.api.nvim_create_autocmd("FileType", { pattern = "*.qas", callback = (function() vim.bo.filetype = "qas" end) })

-- formatter.nvim
require("formatter").setup({
  logging = true,
  log_level = vim.log.levels.WARN,
  filetype = {
    lua = {
      require("formatter.filetypes.lua").stylua,
    },
    ["*"] = {
      require("formatter.defaults.prettier")
    },
    c = {
      function()
        return {
          exe = "clang-format",
          args = { "-style=Google" },
          stdin = true
        }
      end
    },
    cpp = {
      function()
        return {
          exe = "clang-format",
          args = { "-style=Google" },
          stdin = true
        }
      end
    },
  }
})

