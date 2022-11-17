import React from "react";
import { SearchBar } from './SearchBar'
import { ProductTable } from './ProductTable'


const mockList = [
    { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
    { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
    { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
    { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
    { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
    { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];
const categorySet = new Set(mockList.map(item => item.category))
const categoryList = Array.from(categorySet).map(item => (
    {
        category: item,
        items: mockList.filter(ele => ele.category === item)
    }
))

export class FilterableProductTable extends React.Component {

    constructor() {
        super()
        this.state = {
            categoryList
        }
        this.onSearchChange = this.onSearchChange.bind(this)
        this.onCheckBoxChange = this.onCheckBoxChange.bind(this)
    }
    onSearchChange(e) {
        const value = e.target.value
        console.log(111, value)
        const filterMock = mockList.filter(item => (item.name.includes(value)))
        const filterList = Array.from(categorySet).map(item => (
            {
                category: item,
                items: filterMock.filter(ele => ele.category === item)
            }
        ))

        this.setState({
            categoryList: filterList
        })

    }
    onCheckBoxChange(e) {
        console.log(222, e.target.checked)
        const checked = e.target.checked
        if (checked) {
            const filterList = Array.from(categorySet).map(item => (
                {
                    category: item,
                    items: mockList.filter(ele => ele.category === item && ele.stocked)
                }
            ))
            this.setState({
                categoryList: filterList
            })
        } else {
            this.setState({
                categoryList: [...categoryList]
            })
        }
    }
    render() {
        return <div>
            <SearchBar onSearchChange={this.onSearchChange} onCheckBoxChange={this.onCheckBoxChange} />
            <ProductTable categoryList={this.state.categoryList} />
        </div>
    }
}