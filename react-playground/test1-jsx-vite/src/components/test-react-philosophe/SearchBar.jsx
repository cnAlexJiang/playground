import React from "react";

export class SearchBar extends React.Component {
    constructor() {
        super()
    }
    render() {
        const { onCheckBoxChange, onSearchChange } = this.props
        return <div>
            <div>
                <input type="text" placeholder="Search...." onInput={onSearchChange} />
            </div>
            <div>
                <input type="checkbox" onChange={onCheckBoxChange} />
                <span>Only show products in stock</span>
            </div>
        </div>
    }
}