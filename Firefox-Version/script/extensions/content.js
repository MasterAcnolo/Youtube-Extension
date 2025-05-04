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


function redirectToNoCookie() {
  const url = new URL(window.location.href);
  const videoId = url.searchParams.get("v");

  if (videoId) {
    const newUrl = `https://www.youtube-nocookie.com/embed/${videoId}`;
    window.location.replace(newUrl);
  }
}

function checkAndRedirect() {
  chrome.storage.sync.get(["enabled"], (result) => {
    const isEnabled = result.enabled ?? true;
    if (isEnabled && window.location.href.includes("watch?v=")) {
      redirectToNoCookie();
    }
  });
}

checkAndRedirect();

const observer = new MutationObserver(() => {
  checkAndRedirect();
});

observer.observe(document, {
  subtree: true,
  childList: true
});