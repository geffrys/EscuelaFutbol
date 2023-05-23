function onInitialize() {
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get('token');

  if (token) {
    // El parámetro 'token' existe en la URL, realizar alguna acción o redireccionar
    // a la siguiente página después de la autenticación exitosa.
    // Ejemplo: window.location.href = '/dashboard';
    console.log('Token encontrado:', token);
  } else {
    // El parámetro 'token' no existe en la URL, mostrar la página de inicio de sesión.
    window.location.href = 'http://localhost:3000/auth/google';
  }
}

// Llamar a la función onInitialize cuando se cargue la página.
document.addEventListener('DOMContentLoaded', onInitialize);