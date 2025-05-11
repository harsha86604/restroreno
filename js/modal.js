// js/modal.js
// Modal toggle script for Restoreno site

document.addEventListener('DOMContentLoaded', () => {
  // Open modal
  document.querySelectorAll('[data-modal-target]').forEach(button => {
    button.addEventListener('click', () => {
      const modal = document.getElementById(button.getAttribute('data-modal-target'));
      if (modal) modal.classList.remove('hidden');
    });
  });

  // Close modal
  document.querySelectorAll('[data-modal-close]').forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.fixed');
      if (modal) modal.classList.add('hidden');
    });
  });
});
