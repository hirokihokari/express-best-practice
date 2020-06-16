#!/bin/sh

git stash push -q --keep-index --include-untracked

cat <<\EOF
=============================
Running test(s)
=============================
EOF

npm run test
ret=$?

git stash pop -q

if [ $ret -ne 0 ]
then
  cat <<\EOF
=============================
Error: Node test failed.
=============================
EOF
  exit 1
else
  cat <<\EOF
=============================
Test passed.
=============================
EOF
fi
