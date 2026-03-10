function maskEmail(email) {
  let indexOfAt = email.indexOf("@");
  let asterisk = "*".repeat(indexOfAt - 2);
  let sliceOfDomain = email.slice(indexOfAt - 1);
  return email[0] + asterisk + sliceOfDomain;
}

let email = "apple.pie@example.com";

console.log(maskEmail(email));
