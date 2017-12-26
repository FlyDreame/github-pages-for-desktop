const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const dialog = electron.dialog
const ipcMain = electron.ipcMain

module.exports = function (mainWindow, backgroundWindow) {
  ipcMain.on('getArticle', (ipcEvent, arg) => {

  })
}
