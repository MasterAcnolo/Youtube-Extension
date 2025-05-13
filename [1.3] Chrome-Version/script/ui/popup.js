document.addEventListener('DOMContentLoaded', () => {
  const redirectCountSpan = document.getElementById('redirect-count');
  const resetBtn = document.getElementById('reset-counter');

  function refreshCount() {
    chrome.storage.sync.get(['redirectCount'], ({ redirectCount }) => {
      redirectCountSpan.textContent = redirectCount || 0; 
    });
  }
  

  refreshCount();


  resetBtn.addEventListener('click', () => {
    chrome.storage.sync.set({ redirectCount: 0 }, () => {
      refreshCount();
    });
  });

  const toggleCheckbox = document.getElementById('toggle-checkbox');
  const textButton = document.getElementById('TextButton');

  chrome.storage.sync.get(['enabled'], (result) => {
    const enabled = result.enabled ?? true;
    toggleCheckbox.checked = enabled;
    textButton.textContent = enabled ? 'Activé' : 'Désactivé';
  });

  toggleCheckbox.addEventListener('change', () => {
    const newState = toggleCheckbox.checked;
    chrome.storage.sync.set({ enabled: newState });
    textButton.textContent = newState ? 'Activé' : 'Désactivé';
  });

});

// Dans un premier temps on récupère les IDs Cible du HTML en les associant à des termes plus simple à utiliser. Comme ça on pourra utiliser les méthodes
// La Fonction Refresh Count intéragi avec le compteur. On se sert du local storage pour stocker et utiliser le compteur. En allant chercher (sync) la valeur de redirectCount. 