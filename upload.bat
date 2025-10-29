@echo off
cd /d "C:\Users\nouri\OneDrive\Desktop\New-Portfolio"
if not exist .git (
    git init
)
git add .
git commit -m "Updated portfolio with latest changes"
if not exist .git/refs/remotes/origin (
    git remote add origin https://github.com/Nour-ibrahem30/New-Portfolio.git
    git branch -M main
    git push -u origin main
) else (
    git push
)
echo Upload complete.
pause
