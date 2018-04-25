import React from 'react';
import Header from './components/Header';
import Orders from './components/Orders';
import Settings from './components/Settings';
import Stats from './components/Stats';
import Menu from './components/Menu';
import imgDrinks from './images/drinks.png';
import imgDishes from './images/main_dish.png';
import imgDeserts from './images/cake.png';
import imgSpecial from './images/special.png';
import axios from 'axios';

const API = 'https://enigmatic-cliffs-25405.herokuapp.com/menu';

class App extends React.Component {

    state = {
        tabs: ['Orders', 'Statistics', 'Settings'],
        activeTab: 'Orders',
        categories: [
            {name: 'drinks', url: imgDrinks},
            {name: 'dishes', url: imgDishes},
            {name: 'deserts', url: imgDeserts},
            {name: 'special', url: imgSpecial},
        ],
        activeCat: 'drinks',
        menu: '',
        tables: ['North Table', 'At the window', 'Close to WC', 'Two person table'],
        activeTable: 'North Table',
        orders: [{name: 'Soup', price: 2.5, table: 'North Table'}]
    };

    componentDidMount() {
        axios.get(API).then((response) => {
            this.setState({menu: response.data.menu})
        })
    }

    //sukurti nauja uzsakyma ir ideti ji i aktyvu stala
    addOrder = (item) => {
        const orders = [...this.state.orders, {name: item.name, price: item.price, table: this.state.activeTable}];
        this.setState({orders})
    };

    // metodas active tab pakeisti
    switchTab = activeTab => this.setState({activeTab});
    // be sutrumpinimo
    switchCategory = (name) => {
        this.setState({activeCat: name})
    };

    switchTable = (name) => {
        this.setState({
            activeTable: name
        })
    };

    renderContent = () => {

        switch (this.state.activeTab) {
            case 'Orders' :
                return <Orders
                    orders={this.state.orders}
                    onActiveTable={this.switchTable}
                    active={this.state.activeTable}
                    tables={this.state.tables}/>;
            case 'Statistics' :
                return <Stats/>;
            case 'Settings' :
                return <Settings/>;
            default :
                return null
        }
    };


    render() {

        return (
            <div>
                <Header switchTab={this.switchTab} tabs={this.state.tabs}/>
                <Menu
                    addOrder={this.addOrder}
                    menu={this.state.menu[this.state.activeCat]}
                    switch={this.switchCategory}
                    active={this.state.activeCat}
                    categories={this.state.categories}/>
                {this.renderContent()}

            </div>
        )
    }
}

export default App;