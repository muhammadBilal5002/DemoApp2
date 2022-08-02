import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Store from "./Redux/Store"
import { Provider} from "react-redux"
import "./StyleSheet/Admin.css"
import "./StyleSheet/User.css"
import "./StyleSheet/index.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={Store}>
<App/>
</Provider>
);