// lightbox.js

document.addEventListener("DOMContentLoaded", () => {
  // Create modal elements
  const modal = document.createElement("div");
  modal.classList.add("image-modal");
  modal.innerHTML = `
    <span class="close">&times;</span>
    <img class="modal-content" id="modal-img" />
  `;
  document.body.appendChild(modal);

  // Function to open modal
  function openModal(src) {
    const modalImg = document.getElementById("modal-img");
    modal.style.display = "block";
    modalImg.src = src;
  }

  // Add click listener to each image
  document.querySelectorAll(".clickable-img").forEach((img) => {
    img.addEventListener("click", () => {
      openModal(img.src);
    });
  });

  // Close modal on close button click
  modal.querySelector(".close").addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Optional: Close modal when clicking outside image
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
