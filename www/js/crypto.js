function cifrarMensaje(mensaje, password) {
    return CryptoJS.AES.encrypt(mensaje, password).toString();
}

function descifrarMensaje(cifrado, password) {
    try {
        const bytes = CryptoJS.AES.decrypt(cifrado, password);
        return bytes.toString(CryptoJS.enc.Utf8);
    } catch {
        return null;
    }
}