'use strict';

const electron = require('electron');
const {app, BrowserWindow} = electron;

// let isDevelopment = true;
let isDevelopment = false;
if (isDevelopment) {
    require('electron-reload')(__dirname, {
        ignored: /node_modules|[\/\\]\./
    });
}


let mainWindow = null;

function createMainWnd() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });

    if (isDevelopment) {
        mainWindow.webContents.openDevTools();
    }

    mainWindow.loadURL(`file://${__dirname}/index.html`);

    mainWindow.on('closed', () => {
        mainWindow = null;
});
}


app.on('ready', createMainWnd);

app.on('window-all-closed', () => {
    app.quit();
});