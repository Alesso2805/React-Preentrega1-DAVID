import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemDetail = ({ item, addToCart }) => {
    return (
        <div>
            {item ? (
                <Card style={{ width: '50rem' }} className="card-item-detail">
                    <Card.Img variant="top" src={item.image}/>
                    <Card.Body className='card-body-item-detail'>
                        <div>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>
                                ${item.price}
                            </Card.Text>
                        </div>
                        <div>
                            <Card.Text>
                                {item.description}
                            </Card.Text>
                        </div>
                        <Button style={{ height: '40px' }} variant="dark" onClick={addToCart}>
                            Añadir al carrito
                        </Button>
                    </Card.Body>
                </Card>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
};

export default ItemDetail;

