import React from "react";

class TestModal extends React.Component{
  render(){
    return(
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Jewel</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {/*<p><span className="modal-lable">Title:</span><input value={this.state.title} onChange={(e) => this.titleHandler(e)} /></p>*/}
              {/*<p><span className="modal-lable">Msg:</span><input value={this.state.msg} onChange={(e) => this.msgHandler(e)} /></p>*/}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => { this.handleSave() }}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TestModal;