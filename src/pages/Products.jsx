import { Outlet, Link, useLoaderData} from "react-router-dom";

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { AiOutlineFileAdd } from "react-icons/ai";

import '../assets/css/Products.module.css'

export default function Products() {
  const products = useLoaderData();
  return (
    <div className="my-container">
      <Outlet />      
      <div className="container">
        <br></br>
        <br></br>
        <h1>Nuevo Producto</h1>
        <br></br>
        
        <Link className="nav-link" to="/products/create-product">
          <Button variant="warning" ><AiOutlineFileAdd />Nuevo Producto</Button>
        </Link>        

        <br></br>
        <br></br>
        <Table responsive className="table-hover table-striped table-responsive">
          <thead className="table-dark">
            <tr>
              <th>Nombre</th>              
              <th>Descripción</th>
              <th>Categoría</th>
              <th>Precio</th>
              <th>% de Descuento</th>
              <th>Rating</th>
              <th>Stock</th>
              <th>Marca</th>
              <th>Peso</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              products.map((item)=>{
                let editarProducto = 'edit-product/'+item.id;
                let eliminarProducto = 'delete-product/'+item.id;
                return (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>{item.category}</td>
                    <td>{item.price}</td>
                    <td>{item.discount}</td>
                    <td>{item.rating}</td>
                    <td>{item.stock}</td>
                    <td>{item.brand}</td>
                    <td>{item.weight}</td>
                    <td>
                      <Link style={{marginRight: "10px", marginLeft: "10px"}} to={item.id}><FaEye /></Link>
                      <Link style={{marginRight: "10px", marginLeft: "10px"}} to={editarProducto}><FaEdit /></Link>
                      <Link style={{marginRight: "10px", marginLeft: "10px"}} to={eliminarProducto}><FaTrash /></Link>
                    </td>
                  </tr>
                )
              })
            }

          </tbody>
        </Table>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#">Next</a></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
