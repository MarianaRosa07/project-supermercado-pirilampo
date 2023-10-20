const stockProducts = require('./data.json');

const getOutOfStockProducts = () => {
  let ofStock = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].quantityInStock === 0) {
      ofStock.push(stockProducts[index].productName);
    }
  }

  return ofStock;
};

module.exports = { getOutOfStockProducts };
