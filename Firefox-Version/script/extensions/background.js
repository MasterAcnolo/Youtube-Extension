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

// background.js
console.log("✅ Background.js chargé !");

browser.runtime.onInstalled.addListener(() => {
  console.log("🔧 Extension installée");

  browser.contextMenus.create({
    id: "toggle-extension",
    title: "Activer / Désactiver",
    contexts: ["browser_action"]
  });

  browser.contextMenus.create({
    id: "open-github",
    title: "Code source",
    contexts: ["browser_action"]
  });

  browser.storage.sync.get("enabled").then(result => {
    const enabled = result.enabled ?? true;
    browser.browserAction.setIcon({
      path: enabled ? "images/icon128.png" : "images/icon16.png"
    });
  });
});

browser.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === "toggle-extension") {
    browser.storage.sync.get("enabled").then(result => {
      const newState = !(result.enabled ?? true);
      browser.storage.sync.set({ enabled: newState });

      browser.browserAction.setIcon({
        path: newState ? "images/icon128.png" : "images/icon16.png"
      });
    });
  } else if (info.menuItemId === "open-github") {
    browser.tabs.create({ url: "https://github.com/MasterAcnolo/Youtube-Extension" });
  }
});
