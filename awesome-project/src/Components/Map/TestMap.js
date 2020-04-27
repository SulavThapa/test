import React from "react";
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    Polyline,
} from "react-google-maps";
import axios from "axios";


class TestMap extends React.Component {
    state = {
        gps:[{
            lat: '',
            lng:''
        }],
        interval: null,
        path : [
            {lat:27.645699 , lng: 85.391891},
            { lat: 18.558853, lng: -68.389922 },
            { lat: 18.558375, lng: -68.389729 },
            { lat: 18.558032, lng: -68.389182 },
            { lat: 18.55805, lng: -68.388613 },
            { lat: 18.558256, lng: -68.388213 },
            { lat: 18.558744, lng: -68.387929 }
        ],
        test: [ {lat:27.645699 , lng: 85.391891},
            { lat: 27.7087027, lng: 85.3237936 }]
    };
    componentDidMount()
    {
        this.getData();
        // this.state.interval = setInterval(this.getData.bind(this), 5000)
    }
    componentWillUnmount() {
        // clearInterval(this.state.interval);
    }

    getData = () => {
        axios.get(`https://api.thingspeak.com/channels/1021842/feeds.json?api_key=LIN8G7PKND7MMP6E&results=25`)
            .then(res => {
                for(let i = 0; res.data.feeds.length > i; i++) {
                    // this.setState({
                    //     lat: res.data.feeds[i].field1,
                    //     lng: res.data.feeds[i].field2
                    // });
                    this.state.test.push({
                        lat: parseFloat(res.data.feeds[i].field1),
                        lng: parseFloat(res.data.feeds[i].field2)
                    })
                    // });
                    // {this.state.gps.push(`${this.state.lat}`, `${this.state.lng}`)}
                }

                console.log(this.state.test);
                console.log(this.state.path);
            }).catch(err => console.log('Cannot access', err));
    };

    render = () => {
        return (
            <React.Fragment>
                <GoogleMap
                    defaultZoom={16}
                    defaultCenter={{lat:27.645699 , lng: 85.391891}}
                    // mapTypeId= "satellite"
                >
                    <Polyline
                        path={this.state.test}
                        geodesic= {false}
                        strokeColor= {'black'}
                        strokeOpacity= {10.0}
                        strokeWeight= {2}
                    />
                </GoogleMap>
            </React.Fragment>
        );
    };
}

const MapComponent = withScriptjs(withGoogleMap(TestMap));

export default () => (
    <MapComponent
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `` }} />}
        containerElement={<div style={{ height: `` }} />}
        mapElement={<div style={{ height: `70vh` }} />}
    />
);
