const stockProducts = require('./data.json');

const getProductsOnSale = () => {
  let list = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].onSale === true) {
      const productOnSale = {
        description: stockProducts[index].description,
        formattedPrice: `R$ ${stockProducts[index].price.toFixed(2)}`,
        onSale: stockProducts[index].onSale,
      };
      list.push(productOnSale);
    }
  }
  return list;
};

module.exports = { getProductsOnSale };
