const stockProducts = require('./data.json');

const searchProductsByBrand = (productBrandSearch) => {
  let list = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].brand === productBrandSearch) {
      list.push({
        description: stockProducts[index].description,
        formattedPrice: `R$ ${stockProducts[index].price}`,
      });
    }
  }
  return list;
};

module.exports = { searchProductsByBrand };
