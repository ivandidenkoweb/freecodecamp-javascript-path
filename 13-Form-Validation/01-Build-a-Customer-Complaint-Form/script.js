const fullName = document.querySelector("#full-name");
const email = document.querySelector("#email");
const orderNo = document.querySelector("#order-no");
const productCode = document.querySelector("#product-code");
const quantity = document.querySelector("#quantity");
const complaintList = document.querySelectorAll("[name='complaint']");
const complaintDescription = document.querySelector("#complaint-description");
const solutionsList = document.querySelectorAll("[name='solutions']");
const solutionsDescription = document.querySelector("#solution-description");
const submitBtn = document.querySelector("#submit-btn");
const otherComplaint = document.querySelector("#other-complaint");
const otherSolution = document.querySelector("#other-solution");
const form = document.querySelector("form");

function isFullNameCorrect(el) {
  return el.value.trim().length > 0;
}

function isEmailCorrect(el) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(el.value);
}

function isOrderNoCorrect(el) {
  const orderNoRegex = /^2024\d{6}$/;
  return orderNoRegex.test(el.value);
}

function isProductCodeCorrect(el) {
  const productCodeRegex = /^[a-zA-Z]{2}\d{2}-[a-zA-Z]\d{3}-[a-zA-Z]{2}\d$/;
  return productCodeRegex.test(el.value);
}

function isQuantityCorrect(el) {
  return Number(el.value) > 0;
}

function isComplaintCorrect(list) {
  return Array.from(list).some((item) => item.checked);
}

function isComplaintDescCorrect(el) {
  if (otherComplaint && otherComplaint.checked) {
    return el.value.trim().length > 20;
  }
  return true;
}

function isSolutionsCorrect(list) {
  return Array.from(list).some((item) => item.checked && item.value !== "");
}

function isSolutionsDescCorrect(el) {
  if (otherSolution && otherSolution.checked) {
    return el.value.trim().length > 20;
  }
  return true;
}

function validateForm() {
  return {
    "full-name": isFullNameCorrect(fullName),
    email: isEmailCorrect(email),
    "order-no": isOrderNoCorrect(orderNo),
    "product-code": isProductCodeCorrect(productCode),
    quantity: isQuantityCorrect(quantity),
    "complaints-group": isComplaintCorrect(complaintList),
    "complaint-description": isComplaintDescCorrect(complaintDescription),
    "solutions-group": isSolutionsCorrect(solutionsList),
    "solution-description": isSolutionsDescCorrect(solutionsDescription),
  };
}

function isValid(obj) {
  return Object.values(obj).every((value) => value === true);
}

[fullName, email, orderNo, productCode, quantity].forEach((el) => {
  el.addEventListener("change", (e) => {
    let valid = false;
    if (e.target === fullName) valid = isFullNameCorrect(e.target);
    if (e.target === email) valid = isEmailCorrect(e.target);
    if (e.target === orderNo) valid = isOrderNoCorrect(e.target);
    if (e.target === productCode) valid = isProductCodeCorrect(e.target);
    if (e.target === quantity) valid = isQuantityCorrect(e.target);
    e.target.style.borderColor = valid ? "green" : "red";
  });
});

complaintList.forEach((item) => {
  item.addEventListener("change", () => {
    const group = document.querySelector("#complaints-group");
    if (group)
      group.style.borderColor = isComplaintCorrect(complaintList)
        ? "green"
        : "red";
    updateDescriptionStyle();
  });
});

solutionsList.forEach((item) => {
  item.addEventListener("change", () => {
    const group = document.querySelector("#solutions-group");
    if (group)
      group.style.borderColor = isSolutionsCorrect(solutionsList)
        ? "green"
        : "red";
    handleSolutionDescriptionChange();
  });
});

function updateDescriptionStyle() {
  if (otherComplaint && otherComplaint.checked) {
    complaintDescription.style.borderColor = isComplaintDescCorrect(
      complaintDescription,
    )
      ? "green"
      : "red";
  } else {
    complaintDescription.style.borderColor = "";
  }
}

function handleSolutionDescriptionChange() {
  if (otherSolution && otherSolution.checked) {
    const isValidDesc = solutionsDescription.value.trim().length > 20;
    solutionsDescription.style.borderColor = isValidDesc ? "green" : "red";
  } else {
    solutionsDescription.style.borderColor = "";
  }
}

complaintDescription.addEventListener("input", updateDescriptionStyle);
solutionsDescription.addEventListener("input", handleSolutionDescriptionChange);
solutionsDescription.addEventListener(
  "change",
  handleSolutionDescriptionChange,
);

form.addEventListener("submit", (e) => {
  const validationResult = validateForm();
  if (!isValid(validationResult)) {
    e.preventDefault();
  }
});
