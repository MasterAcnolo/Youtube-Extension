document.addEventListener('DOMContentLoaded', () => {

  
  const toggleCheckbox = document.getElementById('toggle-checkbox');
  const textButton = document.getElementById('TextButton');
  const warningText = document.getElementById('warning-text');

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
