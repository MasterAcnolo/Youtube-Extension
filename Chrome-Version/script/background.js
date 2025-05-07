import { createContextMenus, handleContextMenuClick } from "./contextMenus.js";
import { updateIcon } from "./iconManager.js";

chrome.runtime.onInstalled.addListener(() => {
  createContextMenus();

  chrome.storage.sync.get(["enabled"], (result) => {
    const enabled = result.enabled ?? true;
    updateIcon(enabled);
  });
});

chrome.contextMenus.onClicked.addListener(handleContextMenuClick);
