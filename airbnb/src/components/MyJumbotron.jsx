
import React, { Component } from 'react';
import {Container, Jumbotron,} from 'react-bootstrap'
import '../App.css'


export default class MyJumbotron extends React.Component {
    render() { 
        return (<>
                <Container>
                <Jumbotron>
                    <h1>Hello, world!</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
                    </p>
                    <p>
                    </p>
                    </Jumbotron>
                </Container>
        </>);
    }
}
