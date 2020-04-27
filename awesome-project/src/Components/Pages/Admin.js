import React from 'react';
import SingleToDo from './SingleToDo';
import TestNav from '../NavBar/testNav';
import MapHere from "../Map/map";


class NewAdmin extends React.Component {

 render(){
    return (
        <React.Fragment>
            <TestNav />

            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">

                <MapHere />
            </main>
        </React.Fragment>

        ); }


    }


export default NewAdmin;

