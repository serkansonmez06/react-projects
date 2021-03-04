import React, { Component } from 'react'
import {Row,Col} from 'reactstrap'
import CategoryList from '../categories/CategoryList'
import ProductList from '../products/ProductList'

class Dasboard extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs="3">
                        <CategoryList/>
                    </Col>
                    <Col xs="3">
                       <ProductList/>
                    </Col>

                </Row>
            </div>
        )
    }
}
export default Dasboard