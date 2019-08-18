const {app, BrowserWindow} = require('electron')

function createWindow() {
    // Create the browser window.
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        transparent: true,
        frame: false,
        alwaysOnTop: true,
        resizable: true
//         webPreferences: {
//             nodeIntegration: true
//         }
    });

    // Open the DevTools.
//     win.webContents.openDevTools()

    // and load the index.html of the app.
    win.loadURL('https://corgrath.github.io/_site-electron-portal/index.html')

    win.webContents.on('did-finish-load', function () {
//         win.webContents.insertCSS('* { background: transparent !important; color: white !important; }')
//         win.webContents.insertCSS('* { background: transparent !important; color: white !important; }')
        console.log("injected own css");
        console.log(win.webContents.getURL());
        var url = win.webContents.getURL()
        if( win.webContents.getURL().indexOf("?redirect=") !== -1 ) {
            var newURL = url.substring(url.indexOf("?redirect=") + 10);
            console.log("newURL=" + newURL);
            win.loadURL(newURL);
        }
    });
}

app.on('ready', createWindow)

console.log("done");

