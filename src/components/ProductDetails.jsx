import { useLoaderData, Link } from 'react-router-dom';

import MyModal from './MyModal'
import classes from '../assets/css/ProductDetails.module.css'

export default function ProductDetails() {
  const product = useLoaderData();
  
  if (!product) {
    return (
      <MyModal>
        <main className={classes.details}>
          <h1>No se pudo encontrar el producto</h1>
          <p>Desafortunadamente, el producto requerido no fue encontrado.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </MyModal>
    );
  }
  return (
    <MyModal myTitle="Detalles del Producto">
      <main className={classes.details}>      
        <p className={classes.text}>ID: {product.id}</p>
        <p className={classes.text}>Title: {product.title}</p>
        <p className={classes.text}>Description: {product.description}</p>
        <p className={classes.text}>Category: {product.category}</p>
        <p className={classes.text}>Precio: {product.price}</p>
        <p className={classes.text}>Discount: {product.discount}</p>
        <p className={classes.text}>Rating: {product.rating}</p>
        <p className={classes.text}>Stock: {product.stock}</p>
        <p className={classes.text}>Marca: {product.brand}</p>
        <p className={classes.text}>Peso: {product.weight}</p>
      </main>
    </MyModal>
  );
  
}
