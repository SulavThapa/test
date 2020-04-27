import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import {Card} from "react-bootstrap";
import axios from "axios";


class SimpleMap extends React.Component{
  state = {
    lat: '',
    lon: '',
    interval: null
  };
  componentDidMount()
  {
      this.getData();
      this.state.interval = setInterval(this.getData.bind(this), 5000)
  }
    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

  getData = () => {
      axios.get(`https://api.thingspeak.com/channels/1021842/feeds.json?api_key=LIN8G7PKND7MMP6E&results=1`)
          .then(res => {
              this.setState({
                  lat: res.data.feeds[0].field1,
                  lon: res.data.feeds[0].field2
              });
          }).catch(err => console.log('Cannot access', err));
      console.log('Refresh every 5 second');
  };

  getMapOptions = () => {
    return {
      disableDefaultUI: true,
      mapTypeControl: true,
      streetViewControl: true,
      styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
    };
  };
render(){
  let lati = this.state.lat;
  let longi = this.state.lon;
  return (
    <div style={{ height: '83vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAEeG9ixt_VVl-uEdh3GvSgpPEmX0mrVvc' }}
        defaultCenter={{lat:27.645699 , lng: 85.391891}}
        defaultZoom={16}
        options={this.getMapOptions}
      >
        <Marker
          lat={lati}
          lng={longi}
          name="Ba 1 cha 5486"
          color="green"
        />
      </GoogleMapReact>
    </div>
  );
}
}

class LiveMap extends React.Component{
  render(){
    return(
      <React.Fragment>
        <div
          className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h2 className="text-muted" style={{fontFamily: 'monospace', fontSize: '35px'}}>Maps</h2>
        </div>
        <Card style={{backgroundColor: '#999'}}>
          <SimpleMap/>
        </Card>
      </React.Fragment>
    );
  }
}

export default LiveMap;