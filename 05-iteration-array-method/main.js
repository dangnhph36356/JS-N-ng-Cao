/*
const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
    { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
    { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
    { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
    { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
    { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
    { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
    { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
    { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
  ];

  //category "Auto"
  const filterCompany = companies.filter ((company) => {
    return company.categoty == "Auto";
  });

  //category retall
  function removeproductById(id) {
    return companies.filter((company) =>{
        return company.id !== id;
    });
  }
  const filterCompany2 = removeProductByCategory("Retall");
*/


  //shopping cart example
  const cart = [
    { id: 1, name: 'Product 1', price: 130, soluong: 1 },
    { id: 2, name: 'Product 2', price: 150, soluong: 2 },
    { id: 3, name: 'Product 3', price: 200, soluong: 3 },
  ];

  //total price
  const totalprice = cart.reduce((total, product) =>{
    return total + product.price * product.soluong;
  }, 0);

  console.log(totalprice);