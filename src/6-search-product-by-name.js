const stockProducts = require('./data.json');

const searchProductByName = (productNameSearch) => {
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].productName === productNameSearch) {
      return {
        description: stockProducts[index].description,
        formattedPrice: `R$ ${stockProducts[index].price}`,
      };
    }
  }
  return null;
};

module.exports = { searchProductByName };
