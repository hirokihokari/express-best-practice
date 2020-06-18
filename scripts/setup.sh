#!/bin/sh

cat <<\EOF
Creating a symlink from scripts/git-hooks/pre-commit.sh to .git/hooks/pre-commit
EOF

ln -sf ../../scripts/git-hooks/pre-commit.sh .git/hooks/pre-commit
