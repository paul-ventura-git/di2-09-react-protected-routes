import { redirect } from 'react-router-dom'

export default async function editProductAction({ request }){
  const formData = await request.formData();
  const productData = Object.fromEntries(formData.entries()); // { body: "...", author: "..."} 

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  const raw = JSON.stringify({
    "title": productData.title,
    "description": productData.description,
    "category": productData.category,
    "price": productData.price,
    "discount": productData.discount,
    "rating": productData.rating,
    "stock": productData.stock,
    "brand": productData.brand,
    "weight": productData.weight
  });
  
  const requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };
  
  fetch("http://localhost:8080/products/" + productData.id, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

  alert("Se editaron los datos correctamente.");
  return redirect('/products');  
}

