import React from 'react';

class Settings extends React.Component {
    state = {
        temp: {name: '', price: 0}
    };

    handleInput = (value, type) => {

        if(type==='price') value = parseFloat(value);
        this.setState({temp: {...this.state.temp, [type]: value}})

    };

    render() {
        return (
            <div className="settings">
                <h3>Day special</h3>
                <div className="controls">
                    <input
                        onChange={(e) => this.handleInput(e.target.value, 'name')}
                        value={this.state.temp.name}
                        type="text" placeholder="name"/>
                    <input
                        onChange={(e) => this.handleInput(e.target.value, 'price')}
                        value={this.state.temp.price}
                        type="number" placeholder="price"/>
                    <div className="btn">Add</div>
                    <ul>
                        <li>
                            Sprite
                            <span className="delete">X</span>
                            <span className="price">1.90€</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
;
export default Settings