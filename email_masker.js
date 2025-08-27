let email = "andrei.muzarev@gmail.com";

function maskEmail(email) {
  let atSign = email.indexOf("@");
  let starNum = atSign - 2;
  let star = "*";
  let starStr = star.repeat(starNum);
  let emailMasked =
    email[0] + starStr + email[atSign - 1] + email.slice(atSign);
  return emailMasked;
}

console.log(maskEmail(email));
