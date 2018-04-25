import React from 'react';

const Table = (props) => {

    const order = props.orders.map((order, i)=>{
        return (
            <li key={i}>
                {order.name}
                <span className="delete">x</span>
                <span className="price">{order.price} €</span>
            </li>
        )
    });

    return (
        <div className={props.active === props.name ? "table active-table" : "table"}
             onClick={() => props.onActiveTable(props.name)}
        >
            <h4>{props.name}</h4>
            <ul>
                {order}
            </ul>
            <nav>
                <div className="btn">Checkout</div>
                <h5>Total: 0€</h5>
            </nav>
        </div>
    );
};

export default Table;