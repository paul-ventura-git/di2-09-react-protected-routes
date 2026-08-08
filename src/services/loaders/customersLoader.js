export async function customersLoader() {
  const response = await fetch('http://localhost:8080/customers');
  const resData = await response.json();
  return resData.customers;
}