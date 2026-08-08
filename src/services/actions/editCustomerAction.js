import { redirect } from 'react-router-dom'

export default async function editCustomerAction({ request }) {
  const formData = await request.formData();
  const customerData = Object.fromEntries(formData.entries()); // { body: "...", author: "..."} 

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  const raw = JSON.stringify({
    "name": customerData.name,
    "phone": customerData.phone,
    "email": customerData.email,
    "address": customerData.address
  });
  
  const requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };
  
  fetch("http://localhost:8080/customers/" + customerData.id, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

  alert("Se insertaron los datos correctamente.");
  return redirect('/customers');    
  
}