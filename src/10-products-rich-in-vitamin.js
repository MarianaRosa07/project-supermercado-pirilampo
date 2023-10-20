const stockProducts = require('./data.json');

const getProductsRichInVitamin = () => {
  let list = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if ('vitamins' in stockProducts[index].nutritionalInfo) {
      const product = {
        description: '',
        formattedPrice: '',
        vitaminsInformation: [],
      };
      product.description = stockProducts[index].description;
      product.formattedPrice = `R$ ${stockProducts[index].price}`;

      for (let vitamin in stockProducts[index].nutritionalInfo.vitamins) {
        product.vitaminsInformation.push(`${vitamin} - ${stockProducts[index].nutritionalInfo.vitamins[vitamin]}`)
      }
      list.push(product);
    }
  }
  return list;
};

console.log();

module.exports = { getProductsRichInVitamin };
