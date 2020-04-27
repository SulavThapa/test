import React, {Component} from "react";
import TestNav from "../NavBar/testNav";
import MyVerticallyCenteredModal from "../Modal/Modal";
import {Card, Table, Row,Col} from "react-bootstrap";
import axios from "axios";
import TestMap from "../Map/TestMap";

class BusHistory extends React.Component{
    state = {
        id: '',
        name: '',
        createAt:'',
        updateAt: '',
        device: []
    };
    componentDidMount()
    {
        axios.get(`https://api.thingspeak.com/channels/1021842/feeds.json?api_key=LIN8G7PKND7MMP6E&results=15`)
            .then(res => {
                this.setState({
                    id : res.data.channel.id,
                    name: res.data.channel.name,
                    createAt:res.data.channel.created_at,
                    updateAt: res.data.channel.updated_at,
                    device : res.data.feeds
                });
                console.log(this.state.device)
            }).catch(err => console.log('Cannot access', err));
    }

    render(){
        return(
            <React.Fragment>
                <TestNav />
                <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                    <div
                        className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h2 className="text-muted" style={{left: '3%', marginTop: '1%'}}>Bus History</h2>
                    </div>
                    <div>
                        <Row>
                            <Col>
                                <Card className="h-100 d-inline-block shadow-sm" style={{height: '100%', width: '100%', padding: '1%'}}>
                                    <div
                                        className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-1 pb-2 mb-1">
                        <span className="col" style={{fontFamily: 'monospace', fontSize: '18px', fontWeight: 'bold'}}>
                            Device ID: <span className="text-muted" style={{fontSize: '15px', fontWeight: 'normal'}}>{this.state.id}</span>
                        </span>

                                        <span className="col" style={{fontFamily: 'monospace', fontSize: '18px', fontWeight: 'bold'}}>
                            Created at: <span className="text-muted" style={{fontSize: '15px', fontWeight: 'normal'}}>{this.state.createAt}</span>
                        </span>
                                    </div>
                                    <div
                                        className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-1 pb-2 mb-1">
                       <span className="col" style={{ fontFamily: 'monospace', fontSize: '18px', fontWeight: 'bold'}}>
                            Device Name: <span className="text-muted" style={{fontSize: '15px', fontWeight: 'normal'}}>{this.state.name}</span>
                        </span>

                                        <span className="col" style={{fontFamily: 'monospace', fontSize: '18px', fontWeight: 'bold'}}>
                            Updated at: <span className="text-muted" style={{fontSize: '15px', fontWeight: 'normal'}}>{this.state.updateAt}</span>
                        </span>
                                    </div>

                                    {/*    <Table striped bordered hover size="sm">*/}
                                    {/*        <thead className="thead-dark">*/}
                                    {/*        <tr style={{height: '40px'}}>*/}
                                    {/*            <th>ID</th>*/}
                                    {/*            <th>Created At</th>*/}
                                    {/*            <th>Latitude</th>*/}
                                    {/*            <th>Longitude</th>*/}
                                    {/*        </tr>*/}
                                    {/*        </thead>*/}
                                    {/*        <tbody>*/}
                                    {/*        {this.state.device.map( (device, i) =>*/}
                                    {/*            <tr key={i} style={{height: '35px'}}>*/}
                                    {/*                <td>{device.entry_id}</td>*/}
                                    {/*                <td>{device.created_at}</td>*/}
                                    {/*                <td>{device.field1}</td>*/}
                                    {/*                <td>{device.field2}</td>*/}
                                    {/*            </tr>*/}
                                    {/*        )}*/}
                                    {/*        </tbody>*/}
                                    {/*    </Table>*/}
                                    {/* <Card className="h-75 d-inline-block shadow-sm" style={{height: '100%', width: '100%', marginTop: '1%', padding: '2%'}}>*/}
                                    <TestMap/>
                                    {/*</Card>*/}
                                </Card>

                            </Col>


                            <Col>
                                <Card className="h-100 d-inline-block shadow-sm" style={{height: '100%', width: '100%', padding: '1%'}}>
                                    <div
                                        className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-1 pb-2 mb-1">
                        <span className="col" style={{fontFamily: 'monospace', fontSize: '18px', fontWeight: 'bold'}}>
                            Device ID: <span className="text-muted" style={{fontSize: '15px', fontWeight: 'normal'}}>{this.state.id}</span>
                        </span>
                                        {/*<span className="col"></span>*/}
                                        {/*<span className="col"></span>*/}
                                        <span className="col" style={{fontFamily: 'monospace', fontSize: '18px', fontWeight: 'bold'}}>
                            Created at: <span className="text-muted" style={{fontSize: '15px', fontWeight: 'normal'}}>{this.state.createAt}</span>
                        </span>
                                    </div>
                                    <div
                                        className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-1 pb-2 mb-1">
                       <span className="col" style={{ fontFamily: 'monospace', fontSize: '18px', fontWeight: 'bold'}}>
                            Device Name: <span className="text-muted" style={{fontSize: '15px', fontWeight: 'normal'}}>{this.state.name}</span>
                        </span>
                                        {/*<span className="col"></span>*/}
                                        {/*<span className="col"></span>*/}
                                        <span className="col" style={{fontFamily: 'monospace', fontSize: '18px', fontWeight: 'bold'}}>
                            Updated at: <span className="text-muted" style={{fontSize: '15px', fontWeight: 'normal'}}>{this.state.updateAt}</span>
                        </span>
                                    </div>

                                    {/*    <Table striped bordered hover size="sm">*/}
                                    {/*        <thead className="thead-dark">*/}
                                    {/*        <tr style={{height: '40px'}}>*/}
                                    {/*            <th>ID</th>*/}
                                    {/*            <th>Created At</th>*/}
                                    {/*            <th>Latitude</th>*/}
                                    {/*            <th>Longitude</th>*/}
                                    {/*        </tr>*/}
                                    {/*        </thead>*/}
                                    {/*        <tbody>*/}
                                    {/*        {this.state.device.map( (device, i) =>*/}
                                    {/*            <tr key={i} style={{height: '35px'}}>*/}
                                    {/*                <td>{device.entry_id}</td>*/}
                                    {/*                <td>{device.created_at}</td>*/}
                                    {/*                <td>{device.field1}</td>*/}
                                    {/*                <td>{device.field2}</td>*/}
                                    {/*            </tr>*/}
                                    {/*        )}*/}
                                    {/*        </tbody>*/}
                                    {/*    </Table>*/}
                                    {/* <Card className="h-75 d-inline-block shadow-sm" style={{height: '100%', width: '100%', marginTop: '1%', padding: '2%'}}>*/}
                                    <TestMap/>
                                    {/*</Card>*/}
                                </Card>

                            </Col>
                        </Row>
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div>
                        <Row>
                            <Col>
                                <Card className="h-100 d-inline-block shadow-sm" style={{height: '100%', width: '100%', padding: '1%'}}>
                                    <div
                                        className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-1 pb-2 mb-1">
                        <span className="col" style={{fontFamily: 'monospace', fontSize: '18px', fontWeight: 'bold'}}>
                            Device ID: <span className="text-muted" style={{fontSize: '15px', fontWeight: 'normal'}}>{this.state.id}</span>
                        </span>

                                        <span className="col" style={{fontFamily: 'monospace', fontSize: '18px', fontWeight: 'bold'}}>
                            Created at: <span className="text-muted" style={{fontSize: '15px', fontWeight: 'normal'}}>{this.state.createAt}</span>
                        </span>
                                    </div>
                                    <div
                                        className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-1 pb-2 mb-1">
                       <span className="col" style={{ fontFamily: 'monospace', fontSize: '18px', fontWeight: 'bold'}}>
                            Device Name: <span className="text-muted" style={{fontSize: '15px', fontWeight: 'normal'}}>{this.state.name}</span>
                        </span>

                                        <span className="col" style={{fontFamily: 'monospace', fontSize: '18px', fontWeight: 'bold'}}>
                            Updated at: <span className="text-muted" style={{fontSize: '15px', fontWeight: 'normal'}}>{this.state.updateAt}</span>
                        </span>
                                    </div>

                                    {/*    <Table striped bordered hover size="sm">*/}
                                    {/*        <thead className="thead-dark">*/}
                                    {/*        <tr style={{height: '40px'}}>*/}
                                    {/*            <th>ID</th>*/}
                                    {/*            <th>Created At</th>*/}
                                    {/*            <th>Latitude</th>*/}
                                    {/*            <th>Longitude</th>*/}
                                    {/*        </tr>*/}
                                    {/*        </thead>*/}
                                    {/*        <tbody>*/}
                                    {/*        {this.state.device.map( (device, i) =>*/}
                                    {/*            <tr key={i} style={{height: '35px'}}>*/}
                                    {/*                <td>{device.entry_id}</td>*/}
                                    {/*                <td>{device.created_at}</td>*/}
                                    {/*                <td>{device.field1}</td>*/}
                                    {/*                <td>{device.field2}</td>*/}
                                    {/*            </tr>*/}
                                    {/*        )}*/}
                                    {/*        </tbody>*/}
                                    {/*    </Table>*/}
                                    {/* <Card className="h-75 d-inline-block shadow-sm" style={{height: '100%', width: '100%', marginTop: '1%', padding: '2%'}}>*/}
                                    <TestMap/>
                                    {/*</Card>*/}
                                </Card>

                            </Col>
                            <Col>
                                <Card className="h-100 d-inline-block shadow-sm" style={{height: '100%', width: '100%', padding: '1%'}}>
                                    <div
                                        className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-1 pb-2 mb-1">
                        <span className="col" style={{fontFamily: 'monospace', fontSize: '18px', fontWeight: 'bold'}}>
                            Device ID: <span className="text-muted" style={{fontSize: '15px', fontWeight: 'normal'}}>{this.state.id}</span>
                        </span>
                                        {/*<span className="col"></span>*/}
                                        {/*<span className="col"></span>*/}
                                        <span className="col" style={{fontFamily: 'monospace', fontSize: '18px', fontWeight: 'bold'}}>
                            Created at: <span className="text-muted" style={{fontSize: '15px', fontWeight: 'normal'}}>{this.state.createAt}</span>
                        </span>
                                    </div>
                                    <div
                                        className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-1 pb-2 mb-1">
                       <span className="col" style={{ fontFamily: 'monospace', fontSize: '18px', fontWeight: 'bold'}}>
                            Device Name: <span className="text-muted" style={{fontSize: '15px', fontWeight: 'normal'}}>{this.state.name}</span>
                        </span>
                                        {/*<span className="col"></span>*/}
                                        {/*<span className="col"></span>*/}
                                        <span className="col" style={{fontFamily: 'monospace', fontSize: '18px', fontWeight: 'bold'}}>
                            Updated at: <span className="text-muted" style={{fontSize: '15px', fontWeight: 'normal'}}>{this.state.updateAt}</span>
                        </span>
                                    </div>

                                    {/*    <Table striped bordered hover size="sm">*/}
                                    {/*        <thead className="thead-dark">*/}
                                    {/*        <tr style={{height: '40px'}}>*/}
                                    {/*            <th>ID</th>*/}
                                    {/*            <th>Created At</th>*/}
                                    {/*            <th>Latitude</th>*/}
                                    {/*            <th>Longitude</th>*/}
                                    {/*        </tr>*/}
                                    {/*        </thead>*/}
                                    {/*        <tbody>*/}
                                    {/*        {this.state.device.map( (device, i) =>*/}
                                    {/*            <tr key={i} style={{height: '35px'}}>*/}
                                    {/*                <td>{device.entry_id}</td>*/}
                                    {/*                <td>{device.created_at}</td>*/}
                                    {/*                <td>{device.field1}</td>*/}
                                    {/*                <td>{device.field2}</td>*/}
                                    {/*            </tr>*/}
                                    {/*        )}*/}
                                    {/*        </tbody>*/}
                                    {/*    </Table>*/}
                                    {/* <Card className="h-75 d-inline-block shadow-sm" style={{height: '100%', width: '100%', marginTop: '1%', padding: '2%'}}>*/}
                                    <TestMap/>
                                    {/*</Card>*/}
                                </Card>

                            </Col>
                        </Row>
                    </div>
                    <br />
                    <hr />
                    <br/>


                </main>
            </React.Fragment>
        )
    }
}

export default BusHistory;