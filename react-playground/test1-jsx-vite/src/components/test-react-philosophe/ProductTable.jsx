import React from "react";

import { ProductCategoryRow } from './ProductCategoryRow'

export class ProductTable extends React.Component {

    constructor(props) {
        super(props)
    }
    render() {
        return <div>
            <div>
                <span>name</span>
                <span style={{ marginLeft: '16px' }}>price</span>
            </div>
            <div>
                {this.props.categoryList.map((item, idx) => (
                    <ProductCategoryRow key={idx} list={item} />
                ))}
            </div>

        </div >
    }
}