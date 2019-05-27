import React, { Component } from 'react';
import '../styles/Category/Category.scss';

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
                    <label className="form-check-label main_checkbox" htmlFor={category}>
                        { label }
                        <input className="form-check-input" type="checkbox" id={category} />
                        <span className="checkmark">
                        </span>
                    </label>

                </div>
            )
        })

        return (
            <div className="category">
                <div className="category-title">
                    Категории
                </div>
                <div className="form-group">
                    { elements }
                </div>
            </div>
        );
    }
}

export default Category;