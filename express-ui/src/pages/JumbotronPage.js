import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Button } from 'reactstrap';
import "./jumbo.css"

const JumbotronPage = () => {
  return (
    <div className="jumbotron">
      <Jumbotron>
        <div style={{backgroundColor: 'salmon', borderRadius:30, height:210, width:800}}>
        <center>
        <h1 className="display-3"><b>Welcome To The Parcel!</b></h1>
        <p className="lead"><b>This is a place to create your happiness, a simple way to go to the moon!</b></p>
        </center>
        <p className="lead">
          <Link to="/products">
          <center><Button color="light" style={{borderRadius:20}}>Lets Start Your Happines</Button></center>
          </Link>
        </p>
        </div>
      </Jumbotron>
    </div>
  );
};

export default JumbotronPage;
