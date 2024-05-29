import React from "react";

import Header from './components/Utils/Header'
import Content from './components/Content'
import Footer from './components/Utils/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () =>{
    return (
        <div className="app">
            <Header />
            <Content />
            <Footer />
        </div>
    )
}

export default App