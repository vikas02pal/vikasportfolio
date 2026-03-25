@echo off
git rm -r --cached node_modules
git add .
git commit -m "Initial_Commit"
gh repo create vikasportfolio --public --source=. --remote=origin --push
exit
