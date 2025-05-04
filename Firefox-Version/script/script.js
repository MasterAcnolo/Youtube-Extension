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



document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.getElementById("toggle");
  const textButton = document.getElementById("TextButton");

  if (!checkbox || !textButton) {
    console.warn("Éléments du DOM non trouvés.");
    return;
  }

  chrome.storage.sync.get(["enabled"], (result) => {
    const enabled = result.enabled ?? true;
    checkbox.checked = enabled;
    textButton.textContent = enabled ? "Activer" : "Désactiver";
  });

  checkbox.addEventListener("change", () => {
    const isChecked = checkbox.checked;
    chrome.storage.sync.set({ enabled: isChecked });
    textButton.textContent = isChecked ? "Activer" : "Désactiver";
  });
});