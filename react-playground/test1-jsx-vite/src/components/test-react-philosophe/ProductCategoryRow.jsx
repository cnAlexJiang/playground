import React from "react";
import { ProductRow } from './ProductRow'
export class ProductCategoryRow extends React.Component {

    constructor(props) {
        super(props)
    }
    render() {
        return <div>
            <div>
                {this.props.list.category}
            </div>
            <div>
                {this.props.list.items.map((item, idx) => (
                    <ProductRow item={item} key={idx + '_'} />
                ))}
            </div>
        </div>
    }
}