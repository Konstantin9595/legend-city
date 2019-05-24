import React from 'react';
import '../../styles/Category/Category.css';

const Category: React.FC = () => {

    const categories = [
        {id: 0, label: "Все", category: "all"},
        {id: 1, label: "Магазины", category: "stores"},
        {id: 2, label: "Еда", category: "food"},
        {id: 3, label: "Авто", category: "auto"},
        {id: 4, label: "Сфера услуг", category: "services"}
    ]

    const elements = categories.map(({id, label, category}) => {
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

export default Category;