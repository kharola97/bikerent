exports.isValidPhone = function (phone) {
    const phoneRegex = /^(0|91)?[6-9][0-9]{9}$/
    return phoneRegex.test(phone)
  };

exports.isValidEmail = function(Email) {
    const EmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/
    return EmailRegex.test(Email)
};