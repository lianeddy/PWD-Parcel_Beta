import React, { Component } from "react";
import LocalMallIcon from '@material-ui/icons/LocalMall';
import { connect } from "react-redux";
import {
  fetchTransactionByIdAction,
} from "../redux/actions";
import { api_url } from "../helpers";
import { Link, Redirect } from "react-router-dom";
import { Button } from "reactstrap";



class UserTransaction extends Component {
    state = {
        data: [],
      };

    componentDidMount() {
    const { fetchTransactionByIdAction} = this.props;
    const transactionByID = this.props.userID;
    fetchTransactionByIdAction(transactionByID);
  }
  componentDidUpdate(prevProps) {
    // Refresh bisa ambil data
    const { userID } = this.props;
    if (prevProps.userID !== userID) {
      this.fetchTransactionByIdAction(userID);
    }
  }

  renderHistoryList =() =>{
    return this.props.transactionByID.map((val) =>{
      return ( <div className="container" style={{width:"70%", }}>
      <div className="container">
          <div class="row" style={{border:"groove", borderRadius:"13px",
              paddingTop: "10px",
              paddingLeft: "10px",
              paddingBottom:"15px"
              }}>
          
          <div class="container" style={{paddingBottom:"10px"}}>
              <div class="row">
              <div class="col-">
              <LocalMallIcon color="secondary" fontSize="small"/>
              </div> 
              <div class="col-" style={{paddingLeft:"10px", paddingTop:"5px"}}>
              <h6>Belanja </h6>
              </div>
              <div class="col-" style={{paddingLeft:"10px", paddingTop:"4px"}}>
              <p>{val.date ? val.date.split("T17:00:00.000Z") : null}</p>
              </div>
              </div>     
          </div>

              <div class="col-">  
              <img src={val.imagepath ? `${api_url}${val.imagepath}`: null} alt={`${val.productName}.jpg`} height="100px" />
              </div>
              <div class="col-sm">
              <p><h4> {val.productName}</h4></p>
              <p style={{color:"gray"}}> {val.quantity} x {val.price} </p>
              </div>
              <div class="col-sm">
              <h5 style={{color:"gray"}}>Total Belanja</h5>
              <h5>{val.quantity * val.price}</h5>
              </div>
              <div class="col-sm">
              <h5 style={{color:"gray"}}>Status</h5>
              <h5>{val.status}</h5>

              <div> 
                {val.status === "delivered" ?
              ( <div> <Link to="./status" ><Button color="primary" size="sm">Tracking</Button></Link></div>) : null}</div>
              <div> 
                {val.status === "process" ?
              ( <div> <Link to="./status" ><Button color="primary" size="sm">Tracking</Button></Link></div>) : null}</div>
              <div> 
                {val.status === "delivery" ?
              ( <div> <Link to="./status" ><Button color="primary" size="sm">Tracking</Button></Link></div>) : null}</div>
              
              </div>
          </div>
          <div><br/></div>

      </div>
      </div>
        ) })
    
  }



  renderList =() => { 
      return (<div>
      <div style={{height: "100%", width:"100%"}} >
        <div className="container" style={{width:"70%", }}>
        <br/>
        <h3>Daftar Transaksi</h3>
        </div>
        <br/>
        <div>
      {this.renderHistoryList()}
        </div>
      </div>
    </div>)
  }
  render(){
    if(this.props.userID){
      return (<div>
        {this.renderList()}
      </div>
      )
  }
  return (
    <Redirect to="/product" /> 
   )
  }
}


const mapStatetoProps = ({ user, transaction }) => {
    return {
      userID: user.id,
      transactionByID : transaction.transactionByID,
    };
  };
  
  export default connect(mapStatetoProps, {
    fetchTransactionByIdAction,
  })(UserTransaction);
  
