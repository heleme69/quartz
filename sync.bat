@echo off
echo Syncing Obsidian to Quartz...
xcopy /E /Y /I "D:\LeHuy\MyObsidian\MyObsidian\Content\*" "D:\LeHuy\quartz\content\"
echo Done! Now commit and push in GitHub Desktop.
pause