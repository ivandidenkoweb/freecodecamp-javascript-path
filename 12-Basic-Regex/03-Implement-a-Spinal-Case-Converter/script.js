function spinalCase(str) {
  let regex = /([a-z])([A-Z])/g;
  let tempStr = str.replace(regex, "$1 $2");

  let spinalRegex = /[\s_]+/g;

  return tempStr.replace(spinalRegex, "-").toLowerCase();
}
