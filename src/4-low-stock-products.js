const stockProducts = require('./data.json');

const getLowStockProducts = () => {
  let lowStock = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].quantityInStock > 0 && stockProducts[index].quantityInStock <= 10) {
      lowStock.push(`${stockProducts[index].productName}: ${stockProducts[index].quantityInStock} unidades`);
    }
  }
  return lowStock;
};

module.exports = { getLowStockProducts };
