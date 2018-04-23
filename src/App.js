import React, {Component} from 'react';
import Header from "./components/Header";
import Orders from "./components/Orders";
// import Settings from "./components/Settings";
import Stats from "./components/Stats";
import Settings from "./components/Settings";

class App extends Component {
    state = {
        tabs: ['Orders', 'Statistics', 'Settings'],
        activeTab: 'Orders',
    };

    switchTab = (activeTab) => this.setState({activeTab});

    renderContent = () => {
        switch (this.state.activeTab) {
            case 'Orders' :
                return <Orders/>;
            case 'Statistics' :
                return <Stats/>;
            case 'Settings' :
                return <Settings/>;
            default : return null
        }
    };

    render() {
        return (
            <div>
                <Header switchTab={this.switchTab} tabs={this.state.tabs}/>
                {this.renderContent()}

            </div>
        );
    }
}

export default App;
