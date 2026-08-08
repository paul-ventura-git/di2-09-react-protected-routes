import { Link, Form as MainForm, useLoaderData } from 'react-router-dom'

import Form from 'react-bootstrap/Form';
import MyModal from './MyModal'
import classes from '../assets/css/ProductDetails.module.css'

export default function FormEditProduct() {
  const product = useLoaderData();
  return (
    <MyModal myTitle="Editar Cliente">
      <MainForm method="put" className={classes.details}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>ID:</Form.Label>
            <Form.Control name="id" defaultValue={product.id} />
          </Form.Group>
          <Form.Label>Nombre del Producto:</Form.Label>
          <Form.Control name="title" defaultValue={product.title} />
        </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Descripción del producto:</Form.Label>
            <Form.Control as="textarea" name="description" rows={3} defaultValue={product.description} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Categoría:</Form.Label>
            <Form.Control name="category" defaultValue={product.category} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Precio:</Form.Label>
            <Form.Control name="price" defaultValue={product.price} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Descuento:</Form.Label>
            <Form.Control name="discount" defaultValue={product.discount} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Rating:</Form.Label>
            <Form.Control name="rating" defaultValue={product.rating} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Stock:</Form.Label>
            <Form.Control name="stock" defaultValue={product.stock} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Marca:</Form.Label>
            <Form.Control name="brand" defaultValue={product.brand} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Peso:</Form.Label>
            <Form.Control name="weight" defaultValue={product.weight} />
          </Form.Group>
          <br />
          <div style={{  display: "flex", justifyContent: "flex-end",  gap: "1rem"}}>
            <button className="btn btn-light">
              <Link className="nav-link" to='..'>
                Cancelar
              </Link>
            </button>
            <button className="btn btn-primary">Enviar</button>
          </div>
        <br />
      </MainForm>
    </MyModal>
  )
}
