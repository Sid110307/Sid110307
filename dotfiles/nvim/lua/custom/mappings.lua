local M = {}

M.custom = {
  n = {
    ["<C-p>"] = {":w<CR> :!python3 %<CR> i"}
  }
}

return M

