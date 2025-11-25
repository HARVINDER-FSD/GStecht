@echo off
echo ========================================
echo Starting GS Tech Development Servers
echo ========================================
echo.
echo Installing dependencies...
call npm install
echo.
echo Starting backend server and frontend...
echo Backend: http://localhost:3001
echo Frontend: http://localhost:5173
echo.
start /B cmd /c "node server.js"
timeout /t 2 /nobreak >nul
npm run dev
