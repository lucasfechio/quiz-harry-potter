import React, { Component } from 'react';
import Form from '../../components/Form/Form';
import './Home.css'

class Home extends Component {
    render() {
        return (
            <div className='home-container'>
                <h1>Você conhece mesmo a saga Harry Potter?</h1>
                <em>Este teste foi criado para você!</em>
                <Form />
            </div>
        );
    }
}

export default Home;