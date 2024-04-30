function validatePassword(password) {
    if (password.replace(/\s/g, '').length <= 8) {
        return false;
    }

    if (!/[A-Z]/.test(password)) {
        return false;
    }

    if (!/\d/.test(password)) {
        return false;
    }

   return true;
}


let pass = validatePassword("Español07");

if (pass) {
    console.log("La contraseña es valida");
} else {
    console.log("La contraseña es invalida\n1. Debe tener como mínimo una letra mayúscula\n2. debe tener como minimo 8 caracteres sin contar espacios(no se permiten los espacios)\n3. Debe contener números");
}