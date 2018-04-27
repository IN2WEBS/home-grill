import React from 'react';

const Table = (props) => {

    const total = props.orders.reduce((total, order) => {
        return total + order.price
    }, 0);

    const orders = props.orders.map((order, i) => {
        return (
            <li key={i}>
                {order.name}
                <span
                    onClick={() => props.removeOrder(order.id)}
                    className="delete">X</span>
                <span className="price">{order.price}€</span>
            </li>
        )
    });

    return (
        <div
            onClick={() => props.switchTable(props.name)}
            className={props.active === props.name ? "table active-table" : "table"}>
            <h4>{props.name}</h4>
            <ul>
                {orders}
            </ul>
            <nav>
                <div onClick={() => props.checkOut(props.name, total)}
                     className="btn">
                    Checkout
                </div>
                <h5>Total: {total.toFixed(2)}€</h5>
            </nav>
        </div>
    );
};
export default Table