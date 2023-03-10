import React, { useState, useId } from 'react';
import './Filters.css';

const Filters = ({ changeFilters }) => {

    const [minPrice, setMinPrice] = useState(0);
    const minPriceFilterId = useId();
    const categoryFilterId = useId();

    const handleChangeMinPrice = (e) => {
        setMinPrice(e.target.value)
        changeFilters(prevState => ({
            ...prevState,
            minPrice: e.target.value
        }))
    };

    const handleChangeCategory = (e) => {
        changeFilters(prevState => ({
            ...prevState,
            category: e.target.value
        }))
    };

    return (
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilterId}>Price</label>
                <input
                    type="range"
                    id={minPriceFilterId}
                    min="0"
                    max="1000"
                    onChange={handleChangeMinPrice}
                />
                <span>€ {minPrice}</span>
            </div>
            <div>
                <label htmlFor={categoryFilterId}>Category</label>
                <select id={categoryFilterId}
                    onChange={handleChangeCategory}>
                    <option value="all">All</option>
                    <option value="laptops">Laptops</option>
                    <option value="home-decoration">Home deco</option>
                    <option value="smartphones">Smartphones</option>
                </select>
            </div>
        </section>
    );
};

export default Filters;