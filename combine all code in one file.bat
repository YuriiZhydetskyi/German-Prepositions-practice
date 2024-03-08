@echo off
setlocal enabledelayedexpansion

set "outputFile=result.txt"

echo. > %outputFile%

for %%F in (*) do (
    if not "%%F"=="%outputFile%" (
        echo %%F >> %outputFile%
        echo ''' >> %outputFile%
        type "%%F" >> %outputFile%
        echo ''' >> %outputFile%
        echo. >> %outputFile%
    )
)

echo Combined all files into %outputFile%