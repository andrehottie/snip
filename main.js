const { app, BrowserWindow } = require("electron/main");
const path = require("node:path");
const fs = require("fs");

let mainWindow;

const KEY_APP_NAME = "Snip";

const generateRandomUID = async (database) => {
  function generateRandomString(length) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  }

  let uid = generateRandomString(10);
  return uid;
};

const snippetSchema = {
  version: 0,
  primaryKey: "uid",
  type: "object",
  properties: {
    uid: {
      type: "string",
      maxLength: 100,
    },
    content: {
      type: "string",
    },
    language: {
      type: "string",
    },
    created_by: {
      type: "string",
    },
    updated_by: {
      type: "string",
    },
    parent_uid: {
      type: "string",
    },
    created_at: {
      type: "string",
      format: "date-time",
    },
    updated_at: {
      type: "string",
      format: "date-time",
    },
  },
  required: ["uid", "created_at"],
};

function createWindow() {
  /* example to write snip on files
  try {
    fs.writeFileSync("myfile.txt", "the text to write in the file", "utf-8");
  } catch (e) {
    alert("Failed to save the file !");
  }*/

  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
    },
  });

  mainWindow.on("close", function () {
    //   <---- Catch close event
    mainWindow.webContents
      .executeJavaScript('localStorage.getItem("Snip");', true)
      .then((result) => {
        try {
          fs.writeFileSync(
            path.join(__dirname, "dist/store.txt"),
            JSON.stringify(result),
            "utf-8"
          );
        } catch (e) {
          console.log("ko", e);
        }
      });
  });
  mainWindow.webContents.openDevTools();
  mainWindow.loadFile(path.join(__dirname, "dist/index.html"));
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (mainWindow === null) createWindow();
});
