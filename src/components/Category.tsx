import React, { Component } from 'react';
import '../styles/Category/Category.css';

interface IProps {
    category: {},
    getCategoryAction: Function
}

class Category extends Component<IProps> {

    componentDidMount() {
        const { getCategoryAction } = this.props
        getCategoryAction()
    }


    render() {
        const { category:{category} }:any = this.props

        const elements = category.map(({id, label, category}:any) => {
            return (
                <div className="form-check" key={id}>
                    <input className="form-check-input" type="checkbox" id={category} />
                    <label className="form-check-label" htmlFor={category}>
                        { label }
                    </label>
                </div>
            )
        })

        return (
            <div className="category">
                <div className="form-group">
                    { elements }
                </div>
            </div>
        );
    }
}

export default Category;