const categoriesList = document.querySelector('#categories');
const categories = categoriesList.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);
categories.forEach(el => {
  const categoryTitle = el.querySelector('h2').textContent;
  const elCount = el.querySelectorAll('li').length;
  console.log(`Category ${categoryTitle}`);
  console.log(`Elements ${elCount}`);
});
