#!/usr/bin/env bash
# Claude Code Stop hook: commit any pending changes and push them to GitHub.
# Runs after every Claude turn; does nothing when the tree is clean.
cd "${CLAUDE_PROJECT_DIR:-$(dirname "$0")/..}" || exit 0
git rev-parse --is-inside-work-tree >/dev/null 2>&1 || exit 0
git remote get-url origin >/dev/null 2>&1 || exit 0

if [ -n "$(git status --porcelain)" ]; then
  git add -A
  changed=$(git diff --cached --name-only | head -5 | tr '\n' ' ')
  git commit -q -m "Auto-update: ${changed}" || exit 0
fi

# Push anything not yet on the remote (also retries earlier failed pushes).
if [ -n "$(git log --oneline '@{u}..' 2>/dev/null)" ] || ! git rev-parse '@{u}' >/dev/null 2>&1; then
  if git push -q -u origin HEAD 2>/dev/null; then
    echo '{"systemMessage": "Changes pushed to GitHub."}'
  else
    echo '{"systemMessage": "Auto-push to GitHub failed - run git push manually."}'
  fi
fi
exit 0
