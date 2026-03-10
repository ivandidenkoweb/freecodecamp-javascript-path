const markDownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");

function convertMarkdown() {
  const input = markDownInput.value;

  const headerRegex = /^(#{1,3})\s+(.*)$/gm;
  const boldRegex = /(\*\*|__)(.*?)\1/g;
  const italicRegex = /(\*|_)(.*?)\1/g;
  const imageRegex = /!\[(.*?)\]\((.*?)\)/g;
  const linkRegex = /\[(.*?)\]\((.*?)\)/g;
  const quoteRegex = /^>\s+(.*)$/gm;

  let result = input.replace(headerRegex, (match, hashes, content) => {
    const level = hashes.length;
    return `<h${level}>${content}</h${level}>`;
  });

  result = result.replace(boldRegex, (match, marks, content) => {
    return `<strong>${content}</strong>`;
  });

  result = result.replace(italicRegex, (match, marks, content) => {
    return `<em>${content}</em>`;
  });

  result = result.replace(imageRegex, (match, altText, src) => {
    return `<img src="${src}" alt="${altText}">`;
  });

  result = result.replace(linkRegex, '<a href="$2">$1</a>');

  result = result.replace(quoteRegex, "<blockquote>$1</blockquote>");

  htmlOutput.innerText = result;
  preview.innerHTML = result;

  return result;
}

markDownInput.addEventListener("input", convertMarkdown);
