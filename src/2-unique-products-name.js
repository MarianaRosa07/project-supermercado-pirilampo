const stockProducts = require('./data.json');

const getUniqueProductsName = () => {
  let productName = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    productName.push(stockProducts[index].productName);
  }
  return productName;
};
module.exports = { getUniqueProductsName };
