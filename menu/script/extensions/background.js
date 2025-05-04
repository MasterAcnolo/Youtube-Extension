/**
 * MonExtension - Extension pour rediriger les vidéos YouTube vers youtube-nocookie.
 * Copyright (C) 2025 MasterAcnolo
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */


chrome.runtime.onInstalled.addListener(() => {
    
    chrome.contextMenus.create({
      id: "toggle-extension",
      title: "Activer / Désactiver",
      contexts: ["action"]
    });

    chrome.contextMenus.create({
      id: "open-github",
      title: "Code source",
      contexts: ["action"]
    });
  
    
    chrome.storage.sync.get(["enabled"], (result) => {
      const enabled = result.enabled ?? true; 
      chrome.action.setIcon({
        path: enabled ? "images/icon128.png" : "images/icon16.png"
      });
    });
  });
  
  chrome.contextMenus.onClicked.addListener((info) => {
    if (info.menuItemId === "toggle-extension") {
      chrome.storage.sync.get(["enabled"], (result) => {
        const newState = !(result.enabled ?? true);
        chrome.storage.sync.set({ enabled: newState });
        chrome.action.setIcon({
          path: newState ? "images/icon128.png" : "images/icon16.png"
        }); 
      });
    
    } else if (info.menuItemId === "open-github") {
      chrome.tabs.create({ url: "https://github.com/MasterAcnolo/Youtube-Extension" });
    }
  });
  