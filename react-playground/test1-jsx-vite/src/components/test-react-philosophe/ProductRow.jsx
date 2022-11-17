import React from "react";

export class ProductRow extends React.Component {

    constructor(props) {
        super(props)
    }
    render() {
        const { item } = this.props
        const { stocked } = item
        const name = <span style={{ color: !stocked ? 'red' : 'black' }}> {item.name}</span>
        return <div >
            {name}
            <span style={{ marginLeft: '16px' }}> {item.price} $</span>
        </div>
    }
}