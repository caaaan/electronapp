const {app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');
const { main } = require('ts-node/dist/bin');

function createMainWindow(){
    const mainWindow = new BrowserWindow({
        title: 'Electron',
        width: 1000,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')
            }
    });
    mainWindow.loadURL(`file://${path.join(__dirname, '../public/index.html')}`);
    
    const starturl = 'http://localhost:3000'
    console.log(path.join(__dirname, './my-app/build/index.html'))
    mainWindow.loadURL(starturl);
    //mainWindow.loadFile(`${__dirname}/my-app/build/index.html`);

    mainWindow.webContents.openDevTools();
}

app.whenReady().then(createMainWindow);