
export function allProducts(products) {
  const vegetables = products.vegetables || [];
  const fruits = products.fruits || [];
  const beverages = products.beverages || [];
  const dairy = products.dairy || [];
  const desserts = products.desserts || [];
  const meat = products.meat || [];
  const snacks = products.snacks || [];
  const cheese = products.cheese || [];
  const allBeverages = Object.values(beverages).map((productBeverage)=> productBeverage.productsBeverages
  )
  const [tea , diet , herbs , coffe , juiceSyrup , waterSodaDrinks] = allBeverages

  const allProductsBeveragess = [...tea || [], ...diet || [], ...herbs || [] , ...coffe  || [], ...juiceSyrup || [], ...waterSodaDrinks || []]
  console.log('allProductsBeveragess' , allProductsBeveragess);
  const allProducts =[...vegetables , ...fruits , ...dairy , ...desserts , ...meat , ...snacks , ...cheese , ...allProductsBeveragess]
  return allProducts
}
