import React, {Component} from 'react';
import Shop from './routes/Shop'
import TopNav from './components/TopNav'
import './App.css';
import 'antd/dist/antd.css';



class App extends Component {
 render(){
     return (
        <div>
            <TopNav/>
            <Shop/>
        </div>
     );
 }
}

export default App;
