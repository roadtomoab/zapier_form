const email = inputData.email;
const phone = inputData.phone;

const emailRegEx = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;
const phoneRegEx = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{4,9}$/;

if (emailRegEx.test(email) && phoneRegEx.test(phone)) {
  return {
    'valid': true,
    'name': inputData.name,
    'email': email,
    'phone': phone
  };
} else {
  return {'valid': false};
}
