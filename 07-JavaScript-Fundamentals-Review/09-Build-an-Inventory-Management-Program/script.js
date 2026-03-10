let inventory = [];

function findProductIndex(name) {
  return inventory.findIndex(
    (item) => item.name.toLowerCase() === name.toLowerCase(),
  );
}

function addProduct(product) {
  let index = findProductIndex(product.name);

  if (index !== -1) {
    inventory[index].quantity += product.quantity;
    console.log(`${inventory[index].name} quantity updated`);
  } else {
    const newProduct = {
      name: product.name.toLowerCase(),
      quantity: product.quantity,
    };
    inventory.push(newProduct);
    console.log(`${newProduct.name} added to inventory`);
  }
}

function removeProduct(name, quantity) {
  const index = findProductIndex(name);

  if (index === -1) {
    console.log(`${name.toLowerCase()} not found`);
    return;
  }

  const product = inventory[index];

  if (quantity > product.quantity) {
    console.log(
      `Not enough ${product.name} available, remaining pieces: ${product.quantity}`,
    );
  } else {
    product.quantity -= quantity;

    if (product.quantity === 0) {
      console.log(`Remaining ${product.name} pieces: ${product.quantity}`);
      inventory.splice(index, 1);
    } else {
      console.log(`Remaining ${product.name} pieces: ${product.quantity}`);
    }
  }
}
