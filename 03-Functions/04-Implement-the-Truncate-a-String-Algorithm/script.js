function truncateString(string, num) {
  if (string.length > num) {
    return string.slice(0, num) + ".".repeat(3);
  } else {
    return string;
  }
}
