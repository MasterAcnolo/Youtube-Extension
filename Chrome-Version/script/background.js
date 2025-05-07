import { createContextMenus, handleContextMenuClick } from "./contextMenus.js";

chrome.runtime.onInstalled.addListener(() => {
  createContextMenus();
});

chrome.contextMenus.onClicked.addListener(handleContextMenuClick);
