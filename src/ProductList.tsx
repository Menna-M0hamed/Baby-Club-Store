import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';


function ProductList({Data}) {

  return (
    <>
      <Row className='d-flex justify-content-center m-0'>
        {Data.map((product) => (
        <Card key={product.id} style={{ width: '18rem' }} className='m-5 card'>

          <Card.Body>
            <Card.Img variant="top" src={product.img} className='card-img' />
            <Card.Title className='mt-3'>{product.name}</Card.Title>
            <Card.Text>Size: {product.age}</Card.Text>
            <Card.Text>Price: {product.price}</Card.Text>
            <Link target="_blank" to="https://wa.me/01211130092"><Button variant="primary" className='btn'>Order Now</Button></Link>
          </Card.Body>
        </Card>
        ))}
      </Row>
    </>
  );
}

export default ProductList;