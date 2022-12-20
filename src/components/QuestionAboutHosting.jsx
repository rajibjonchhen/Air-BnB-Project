import React,{Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import '../components/CssFiles/questionAboutHosting.css'



export default class QuestionAboutHosting extends React.Component {
    askBtnStyle ={
        backgroundColor:"white",
        color:"black",
        fontSize:"16px",
        borderRadius:"10px",
        padding:"15px 30px",
        fontWeight:"600",
        border:"none",
        marginTop:"100px"
    }
   
    render() { 

       
        return <Container  className="mt-5" fluid>
            <Row >
                <Col>
                <div className="dRelative"  style={{overflow:"hidden", borderRadius:"15px"}}>
                    <img className="w-100" src="https://miro.medium.com/max/810/1*NZaYyfGglb54xTe8EOBHLQ.jpeg" ></img>
                    <div className="text-white text-left" style={{position:"absolute",top:"50px",left:"50px"}}>
                        <p className="h1 text-left" style={{fontWeight:"800"}}>Questions <br/> about <br/> hosting?</p>
                        <button style={this.askBtnStyle}>Ask a Superhost</button>
                    </div>
                </div>
                </Col>
            </Row>
        </Container>;
    }
}
 
