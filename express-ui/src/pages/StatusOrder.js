import React, { Component } from "react";
import { Timeline,  TimelineItem } from '@material-ui/lab';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import PaymentIcon from '@material-ui/icons/Payment';
import RedeemIcon from '@material-ui/icons/Redeem';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import RoomIcon from '@material-ui/icons/Room';




class StatusOrder extends Component {
    
  state = {};
  render() {
    return <div>
        <div className="container"> <h3>Status Pengiriman </h3></div>

    <Timeline align="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary">
          <PaymentIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper >
          <Typography variant="h6" component="h1">
              Confirmation 
            </Typography>
            <Typography>Menunggu Konfirmasi Pembayaran</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <RedeemIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper >
            <Typography variant="h6" component="h1">
              Process
            </Typography>
            <Typography>Pesanan Sedang diproses</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <LocalShippingIcon />
          </TimelineDot>
          <TimelineConnector  />
        </TimelineSeparator>
        <TimelineContent>
          <Paper >
            <Typography variant="h6" component="h1">
              Delivery
            </Typography>
            <Typography>Barang sedang dalam pengiriman </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <RoomIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper>
            <Typography variant="h6" component="h1">
              Delivered
            </Typography>
            <Typography>Pesanan Sudah tiba di tujuan</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  </div>
  }
}

export default StatusOrder;
