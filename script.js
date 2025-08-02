// js/script.js

// Espera a que el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Lógica de “Unirse con código” ---
  const joinBtn   = document.getElementById('joinBtn');
  const joinCode  = document.getElementById('joinCode');
  const messageEl = document.getElementById('message');

  function showMessage(text, isError = true) {
    messageEl.textContent = text;
    messageEl.style.color = isError ? '#c62828' : '#2e7d32';
  }

  joinBtn.addEventListener('click', () => {
    const code = joinCode.value.trim();
    if (!code) {
      showMessage('Ingresa un código válido.');
      return;
    }

    // Simulación de validación
    if (code.toUpperCase() === 'TUMARCA123') {
      window.location.href = 'success.html';
    } else {
      window.location.href = 'error.html';
    }
  });

  joinCode.addEventListener('keypress', e => {
    if (e.key === 'Enter') joinBtn.click();
  });


  // --- 2. Lógica de Avatar Shop ---

  // 2.1 Función para equipar items y guardar en localStorage
  function equipItem(layerId, imagePath) {
    const img = document.getElementById(layerId);
    if (!img) return;
    img.src = imagePath;
    localStorage.setItem(layerId, imagePath);
  }

  // Exponer equipItem para los onclick inline del HTML
  window.equipItem = equipItem;

  // 2.2 Al cargar, restaura los items guardados
  ['hat', 'glasses'].forEach(id => {
    const saved = localStorage.getItem(id);
    if (saved) {
      const img = document.getElementById(id);
      if (img) img.src = saved;
    }
  });


  // --- 3. Lógica del Modal “Personalizar” ---
  const btnPersonalizar = document.getElementById('btnPersonalizar');
  const modal           = document.getElementById('modalAvatarShop');
  const closeBtn        = modal.querySelector('.modal-close');
  const backdrop        = modal.querySelector('.modal-backdrop');

  // Abrir modal
  btnPersonalizar.addEventListener('click', () => {
    modal.classList.remove('hidden');
  });

  // Cerrar modal al pulsar “×” o el fondo
  [closeBtn, backdrop].forEach(el =>
    el.addEventListener('click', () => {
      modal.classList.add('hidden');
    })
  );
});