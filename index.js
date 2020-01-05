const electron = require('electron')
const {app, BrowserWindow} = electron
const path = require('path');

// the first argument can be: a file, directory or glob pattern
require('electron-reload')(__dirname + '/app/index.html', {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});

app.on('ready', () => {
//  let win = new BrowserWindow({width:800, height:600})
 win = new BrowserWindow({show: false})
 win.maximize()
 win.show()
//  win.setMenuBarVisibility(false)
 
 win.loadURL(`file://${__dirname}/app/index.html`)

//  process.env.NODE_ENV !== 'production' && win.openDevTools();
})