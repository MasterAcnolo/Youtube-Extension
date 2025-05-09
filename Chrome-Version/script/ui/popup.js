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
