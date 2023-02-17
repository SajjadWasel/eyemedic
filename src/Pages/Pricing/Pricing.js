import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import './Pricing.css';

const Pricing = () => {
    return (
        <div>
            <div className="page_header">
                <h1 className='text-center text-white'>Our Pricing</h1>
            </div>

            <div className="d-flex justify-content-center my-5">

                <Card style={{ width: '18rem' }} className="text-center shadow border-warning m-5">
                    <Card.Body>
                        <h1 className='text_orangered'>Primary</h1>
                        <Card.Text>
                            Enough For 1 Day Regular Patient
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus </ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <button className="btn-custom">Buy Now</button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="text-center shadow border-warning m-5">
                    <Card.Body>
                        <h1 className='text_orangered'>Premium</h1>
                        <Card.Text>
                            Enough For 1 Day Regular Patient
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus </ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <button className="btn-custom">Buy Now</button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="text-center shadow border-warning m-5">
                    <Card.Body>
                        <h1 className='text_orangered'>Gold Edition</h1>
                        <Card.Text>
                            Enough For 1 Day Regular Patient
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus </ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <button className="btn-custom">Buy Now</button>
                    </Card.Body>
                </Card>


            </div>
        </div>
    );
};

export default Pricing;