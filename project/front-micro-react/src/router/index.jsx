import React,{ Component } from "react";

import Layout from "../pages/layout"

import {

    HashRouter  as Router , 
    Route,
    Link

} from "react-router-dom"
 


class Routers extends Component {

    render(){

        return (

            <div className="App">
                <Router>
                    <Route path="/" component={Layout}/>
                </Router>
            </div>
        )


    }


}



export default Routers;