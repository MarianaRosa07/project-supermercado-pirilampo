const stockProducts = require('./data.json');

const getProductsWithAllergyOrIntoleranceInfo = () => {
  let list = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if ('allergyOrIntolerance' in stockProducts[index]) {
      list.push({
        description: stockProducts[index].description,
        formattedPrice: `R$ ${stockProducts[index].price}`,
        allergyOrIntoleranceMessage: `Pode conter: ${stockProducts[index].allergyOrIntolerance.join(' ')}`,
      });
    }
    else {
      list.push({
        description: stockProducts[index].description,
        formattedPrice: `R$ ${stockProducts[index].price}`,
      });
    }
  }
  return list;
};

module.exports = { getProductsWithAllergyOrIntoleranceInfo };
