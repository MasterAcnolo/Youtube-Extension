import {createContextMenus, handleContextMenuClick } from "./ui/contextmenu.js";



chrome.runtime.onInstalled.addListener(() => {
  createContextMenus();
});

chrome.contextMenus.onClicked.addListener(() =>{
  
  handleContextMenuClick();

});
