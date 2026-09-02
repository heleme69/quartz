@echo off
echo Syncing Obsidian to Quartz...
xcopy /E /Y /I "D:\LeHuy\GitHub\MyObsidian\Content\*" "D:\LeHuy\GitHub\quartz\content\"
echo Done! Now commit and push in GitHub Desktop.
pause