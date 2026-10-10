// Keep paper metrics readable and provide an accessible enlarged gallery view.
const dialog = document.createElement('dialog');
dialog.className = 'gallery-dialog';
dialog.setAttribute('aria-label', 'Enlarged comparison figure');
const closeButton = document.createElement('button');
closeButton.type = 'button';
closeButton.className = 'viewer-button';
closeButton.textContent = 'Close';
const enlarged = document.createElement('img');
dialog.append(closeButton, enlarged);
document.body.append(dialog);
closeButton.addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});
for (const img of document.querySelectorAll('#gallery .figure-block img')) {
  img.tabIndex = 0;
  img.setAttribute('role', 'button');
  img.setAttribute('aria-label', `Enlarge: ${img.alt}`);
  img.style.cursor = 'zoom-in';
  const open = () => {
    enlarged.src = img.src;
    enlarged.alt = img.alt;
    dialog.showModal();
  };
  img.addEventListener('click', open);
  img.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      open();
    }
  });
}
