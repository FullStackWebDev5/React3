import React, { Component } from 'react'
import { Container, Card, Button, Row, Col, Spinner } from "react-bootstrap";
import './Products2.css'

class Products2 extends Component {
  constructor(props) {
    super(props)
    console.log('Inside the constructor')
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    console.log('Inside the componentDidMount')
    
    setTimeout(() => {
      this.setState({
        products: [
          {
            id: 1,
            title: 'Headphone1',
            description: 'Headphone 1 quick example text to build on the card title and make up the bulk of the cards content.',
            img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&w=1000&q=80',
            addedToCart: false,
          },
          {
            id: 2,
            title: 'Headphone2',
            description: 'Headphone 2 quick example text to build on the card title and make up the bulk of the cards content.',
            img: 'https://images.unsplash.com/photo-1599669454699-248893623440?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhlYWRwaG9uZXxlbnwwfHwwfHw%3D&w=1000&q=80',
            addedToCart: false,
          },
          {
            id: 3,
            title: 'Headphone3',
            description: 'Headphone 3 quick example text to build on the card title and make up the bulk of the cards content.',
            img: 'https://cdn.vox-cdn.com/thumbor/xj5dqAJC4HirPrHgkblx68ltAyM=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/70392556/bfarsace_190903_3639_0007.0.jpg',
            addedToCart: false,
          }
        ]
      })
    }, 0)
    // API Calls
  }

  addToCart(id){
    // let tempProducts = this.state.products
    // let updatedProducts = tempProducts.filter(product => product.id !== id)
    // let requiredProduct = tempProducts.find(product => product.id === id)
    // requiredProduct.addedToCart = true
    // updatedProducts.push(requiredProduct)

    let updatedProducts = this.state.products
    updatedProducts[id-1].addedToCart = true

    this.setState({
      products: updatedProducts
    })
  }

  render() {
    console.log('Inside the render method')
    return (
      <>
        <Container>
          {this.state.products.length === 0 ? (
            <Spinner animation="border" />
          ) : (
            <Row>
              {this.state.products.map((product) => (
                <Col md={4} key={product.id}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={product.img} />
                    <Card.Body>
                      <Card.Title>{product.title}</Card.Title>
                      <Card.Text>{product.description}</Card.Text>
                      <Button variant="primary" className="buy-button">
                        BUY
                      </Button>
                      <Button
                        variant="warning"
                        onClick={() => this.addToCart(product.id)}
                      >
                        {product.addedToCart ? "ADDED TO CART" : "ADD TO CART"}
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Container>
      </>
    );
  }
}

export default Products2