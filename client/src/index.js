import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Firebase, {FirebaseContext} from './components/Firebase';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </FirebaseContext.Provider>
    , document.getElementById('root'));