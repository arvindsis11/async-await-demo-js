let data = [];
async function getproduct(){
let res = await fetch('https://dummyjson.com/products/');
let data = await res.json();
printdata(data);
}

function printdata(dat){
let tab = `
<tr>      <th>Category</th>
          <th>Name</th>
          <th>price</th>
          <th>rating</th>
         </tr>
`;
for(let i=0;i<5;i++){
data = dat.products[i];
tab+=`
<table>
<tr>
<td>${data.brand}</td>
<td>${data.category}</td>
<td>$${data.price}</td>
<td>${data.rating}</td>
</tr>
</table>`;
console.log(dat.products[i]);
}
document.querySelector('#products').innerHTML = tab;
}
getproduct();
