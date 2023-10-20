const stockProducts = require('./data.json');

const getProductsAmount = () => {
  let productsTotal = 0;
  for (let index = 0; index < stockProducts.length; index += 1) {
    productsTotal += stockProducts[index].quantityInStock;
  }
  return productsTotal;
};

module.exports = { getProductsAmount };
