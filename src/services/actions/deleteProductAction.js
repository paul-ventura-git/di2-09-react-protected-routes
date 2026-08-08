import { redirect } from "react-router-dom";

export default async function deleteProductAction({ request }) {
  const formData = await request.formData();
  const productData = Object.fromEntries(formData.entries());

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    body: "",
    redirect: "follow"
  };
  
  fetch("http://localhost:8080/products/" + productData.id, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

  alert("Se eliminó el producto correctamente.");
  return redirect('/products');
}

