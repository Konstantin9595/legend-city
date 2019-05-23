import React from 'react';
import './Category.css';

const Category: React.FC = () => {

    const categories = [
        {id: 0, label: "Все", attr: "all"},
        {id: 1, label: "Магазины", attr: "stores"},
        {id: 2, label: "Еда", attr: "food"},
        {id: 3, label: "Авто", attr: "auto"},
        {id: 4, label: "Сфера услуг", attr: "services"}
    ]

    const elements = categories.map(({id, label, attr}) => {
        return (
            <div className="form-check" key={id}>
                <input className="form-check-input" type="checkbox" id={attr} />
                <label className="form-check-label" htmlFor={attr}>
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

export default Category;