import React from 'react';
import Table from "./Table";

const Orders = (props) => {
    const tables = props.tables.map((item, i)=>{
        return <Table
            checkout={props.checkout}
            removeOrder={props.removeOrder}
            orders={props.orders.filter((order)=> order.table === item)}
            key={i} name={item}
            active={props.active}
            onActiveTable={props.onActiveTable} />
    });

    return (
        <div className="orders">
            {tables}
        </div>
    );
};

export default Orders;