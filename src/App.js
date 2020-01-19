import React from 'react'
import $ from 'jquery'

export default class App extends React.Component {
    componentDidMount() {
        $('<h1 />')
        .text('Hello world from JQuery')
        .css({
            textAlign: 'center',
            color: 'red'
        })
        .appendTo($('header'))
    }

    render() {
        return (
            <React.Fragment>
                <h1 className="header">Webpack course</h1>
                <header></header>
                
                <hr />
            
                <div className="box">
                    <div className="box__title">Some text</div>
                    <div className="box__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quo praesentium beatae, culpa quos iste consequuntur numquam corrupti natus maiores?</div>
                </div>
            </React.Fragment> 
        )
    }
}


