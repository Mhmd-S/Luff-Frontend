export const validateEmail = (email) => {
    const re = /^TP[0-9]{6}@mail.apu.edu.my$/;
    return re.test(email);
}