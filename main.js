const {app, BrowserWindow} = require('electron')
const url = require('url')
const path = require('path')

let win

function createWindow() {
   win = new BrowserWindow({width: 530, height: 580, center:true, resizable: false, maximizable: false, alwaysOnTop: true, fullscreenable: false,autoHideMenuBar:true})
   win.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
   }))
}

app.on('ready', createWindow)