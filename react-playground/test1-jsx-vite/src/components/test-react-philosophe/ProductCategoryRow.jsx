import React from "react";

export class ProductCategoryRow extends React.Component {

    constructor(props) {
        super(props)

    }
    render() {
        return <h3>
            {this.props.title}
        </h3>
    }
}