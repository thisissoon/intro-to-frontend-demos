// Store a reference to our modal in memory so we can access later;
const modal = document.querySelector('.modal');

// Add the "modal-open" class to the modal
function openModal() {
  modal.classList.add('modal-open');
}

// Remove the "modal-open" class from the modal
function closeModal() {
  modal.classList.remove('modal-open');
}
