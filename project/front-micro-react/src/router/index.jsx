import React, { Component } from "react"

import {

    HashRouter as Router,
    Route

} from 'react-router-dom'


import layout from "../page/layout"


export default class Routers extends Component{
    render(){
        return (
            <Router>
                <Route path="/layout" component={layout}>
                    
                </Route>
            </Router>
        )
    }
}