function generatePassword(num) {
  let symbols =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let password = "";

  for (let i = 1; i <= num; i++) {
    let index = Math.round(Math.random() * symbols.length);
    password += symbols[index];
  }

  console.log(`Generated password: ${password}`);

  return password;
}

let password = generatePassword(8);
