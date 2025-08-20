@echo off
setlocal EnableExtensions
title Angular - Clean & Fresh Build

REM --- Ensure we are in the Angular project root ---
if not exist package.json (
  echo [ERROR] package.json not found. Run this script from your Angular project's root folder.
  pause
  exit /b 1
)

echo.
echo ==============================
echo   Checking Node and npm
echo ==============================
for /f "delims=" %%v in ('node -v 2^>NUL') do set NODEVER=%%v
if not defined NODEVER (
  echo [ERROR] Node.js not found in PATH. Install Node >= 18.19.0 then re-run.
  pause
  exit /b 1
)
echo Node: %NODEVER%
npm -v

echo.
echo ==============================
echo   Cleaning caches & outputs
echo ==============================
if exist ".angular"               rmdir /s /q ".angular"
if exist "dist"                   rmdir /s /q "dist"
if exist "node_modules\.cache"    rmdir /s /q "node_modules\.cache"
if exist "node_modules"           rmdir /s /q "node_modules"
if exist "package-lock.json"      del /f /q "package-lock.json"

echo.
echo [npm] Cleaning npm cache (optional)...
npm cache clean --force >nul 2>&1

echo.
echo ==============================
echo   Installing dependencies
echo ==============================
npm install || goto :fail

echo.
echo ==============================
echo   Cleaning Angular CLI cache
echo ==============================
npx ng cache clean

echo.
echo ==============================
echo   Starting dev server
echo ==============================
npx ng serve -o
goto :eof

:fail
echo.
echo Build failed. See errors above.
pause
exit /b 1
