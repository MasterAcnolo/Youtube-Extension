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



const checkbox = document.getElementById("toggle");

chrome.storage.sync.get(["enabled"], (result) => {
  checkbox.checked = result.enabled ?? true;
});

checkbox.addEventListener("change", () => {
  chrome.storage.sync.set({ enabled: checkbox.checked });
  if (checkbox.checked){

    document.getElementById("TextButton").innerHTML='Activer'
  
  } else{
    document.getElementById("TextButton").innerHTML="Desactiver"
  }

});
