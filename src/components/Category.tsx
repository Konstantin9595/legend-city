import React, { Component } from 'react';
import '../styles/Category/Category.scss';
import {SORT_CATEGORY_ACTION} from "../store/sort/actions";

interface IProps {
    category: {},
    getCategoryAction: Function,
    sortAction: Function
}

class Category extends Component<IProps> {

    state = {
        sortValue: {
            category: []
        }
    }


    // handlerSorting = (event:any) => {
    //     const currentValue = event.target.value
    //
    //     this.setState(({sortValue:{category}}:any) => {
    //         return {
    //             sortValue: {
    //                category: [ ...category, currentValue ]
    //             }
    //         }
    //     })
    // }

    componentDidMount() {
        const { getCategoryAction } = this.props
        getCategoryAction()
    }

    // componentDidUpdate(prevProps:any, prevState:any) {
    //     const previousState = prevState.sortValue.category
    //     const currentState = this.state.sortValue.category
    //
    //     if(previousState.length !== currentState.length ) {
    //         const { sortAction } = this.props
    //         const { sortValue } = this.state
    //
    //         sortAction({
    //             actionType: SORT_CATEGORY_ACTION,
    //             actionValue: sortValue
    //         })
    //     }
    //
    // }


    render() {
        const { category:{category} }:any = this.props

        const elements = category.map(({id, label, category}:any) => {
            return (
                <div className="form-check" key={id}>
                    <label className="form-check-label main_checkbox" htmlFor={category}>
                        { label }
                        <input className="form-check-input" value={category} type="checkbox" id={category}/>
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