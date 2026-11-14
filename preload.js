const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('studio', {
  chat: (opts) => ipcRenderer.invoke('ai:chat', opts),
  tts: (opts) => ipcRenderer.invoke('tts:synth', opts),
  loadDB: (name) => ipcRenderer.invoke('db:load', name),
  saveDB: (name, data) => ipcRenderer.invoke('db:save', name, data),
  openExternal: (url) => ipcRenderer.invoke('sys:open', url),
  dataDir: () => ipcRenderer.invoke('sys:dataDir'),
  isDesktop: true
});
