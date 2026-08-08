import { redirect } from 'react-router-dom'

export default async function newCustomerAction({ request }) {
  const formData = await request.formData();
  const customerData = Object.fromEntries(formData.entries()); // { body: "...", author: "..."} 
  
  await fetch('http://localhost:8080/customers', {
    method: 'POST',
    body: JSON.stringify(customerData),
    headers: {
      'Content-Type': 'application/json',
    }
  });
  alert("Se insertaron los datos correctamente.");
  return redirect('/customers');    
}