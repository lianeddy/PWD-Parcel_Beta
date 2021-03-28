import React from 'react';
import {Card, CardText, CardTitle, Col, CardColumns} from 'reactstrap'




const AdminDashBoard = () => {
  return (
    <div>
      <div style={{marginTop: '1vw', fontFamily: 'inherit'}}>
        <CardColumns>
          <div>
            <Col>
              <Card body inverse color="secondary" className="text-center">
                <CardTitle tag="h5">Produk paling laku :</CardTitle>
                <CardText>Rp. {6579699}</CardText>
              </Card>
            </Col>
          </div>
          <div>
            <Col>
              <Card body inverse color="danger" className="text-center">
                <CardTitle tag="h5">Produk kurang laku :</CardTitle>
                <CardText>Rp. {100000000}</CardText>
              </Card>
            </Col>
          </div>
          <div>
            <Col>
              <Card body inverse color="success" className="text-center">
                <CardTitle tag="h5">Total penjualan :</CardTitle>
                <CardText>Rp. {3242121}</CardText>
              </Card>
            </Col>
          </div>
          <div>
            <Col>
              <Card body inverse color="success" className="text-center">
                <CardTitle tag="h5">Profit eceran :</CardTitle>
                <CardText>Rp. {435345231}</CardText>
              </Card>
            </Col>
          </div>
          <div>
            <Col>
              <Card body inverse color="danger" className="text-center">
                <CardTitle tag="h5">Profit parcel :</CardTitle>
                <CardText>Rp. {453453453}</CardText>
              </Card>
            </Col>
          </div>
          <div>
            <Col>
              <Card body inverse color="success" className="text-center">
                <CardTitle tag="h5">Total profit :</CardTitle>
                <CardText>Rp. {121212121}</CardText>
              </Card>
            </Col>
          </div>
        </CardColumns>
        </div>
    </div>
  )
}

export default AdminDashBoard
