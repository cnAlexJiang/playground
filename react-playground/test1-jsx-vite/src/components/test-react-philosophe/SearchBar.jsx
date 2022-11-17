import React from "react";

export class SearchBar extends React.Component {

    constructor() {
        super()

    }
    render() {
        return <div>
            <div>
                <input type="text" />
            </div>
            <div>
                <input type="checkbox" />

                <span>Only show products in stock</span>
            </div>
        </div>
    }
}