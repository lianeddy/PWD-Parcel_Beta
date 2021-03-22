import React, { Component } from "react";
import {Button, Table} from 'reactstrap'

class CartPage extends Component {
  state = {};
  render() {
    return <div>
      return <div>
      <div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Image</th>
              <th>Qty</th>
              <th>Price</th>
              <th colspan="2">Action</th>
            </tr>
          </thead>
          <tbody>  </tbody>
          <tfoot>
            <tr>
              <td>aa</td>
              <td>aaa</td>
              <td>aaaa</td>
              <td>Grand Total</td>
              <td>Rp. </td>
              <td>
                <Button color="info" >Edit</Button>
                &nbsp;
                <Button color="danger" >delete</Button>
              </td>
            </tr>
          </tfoot>
        </Table>
      </div>
      </div>;
    </div>;
  }
}

export default CartPage;
