@echo off
cd /d "%~dp0"
where py >nul 2>nul
if %errorlevel%==0 (py serve.py & pause & exit /b)
where python >nul 2>nul
if %errorlevel%==0 (python serve.py & pause & exit /b)
echo Python not found. Install Python 3 to run the local static server.
pause
