#!/bin/sh

cat <<\EOF
Creating a symlink from scripts/git-hooks/pre-commit.sh to .git/hooks/pre-commit
EOF

ln -s ../../scripts/git-hooks/pre-commit.sh .git/hooks/pre-commit
