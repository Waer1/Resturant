import ReactDOM from 'react-dom';
import CartRrovider, { Layprovider } from "./Store/Cart-provider";

import './index.css';
import App from './App';

ReactDOM.render( <Layprovider> <App /> </Layprovider> , document.getElementById('root'));

