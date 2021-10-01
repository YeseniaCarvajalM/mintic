function validar() {
  campoContraseña = document.getElementById('campoContraseña').value;

  validar_contrasena_usuario(campoContraseña, 'Yoyman');

}




function validar_correo(string) {

}

function validar_contrasena_usuario(user, password) {
  lenUser = user.length;
  lenPass = password.length;

  if (lenUser < 6 || lenUser > 12 || lenPass < 6 || lenPass > 12) {
    alert('Contraseña y Nombre deben tener una longitud mínima de 6 caracteres y máxima de 12 caracteres.');
  } else {
    if((/^[A-Z]/.test(user)) && (/^[A-Z]/.test(password)) ) {
      alert('Contraseña y Nombre ok');
    } else {
      alert('Contraseña y Nombre deben comenzar en mayusculas');
    }
  }
}

module.export.validar_correo = validar_correo;
module.export.validar_contrasena_usuario = validar_contrasena_usuario;