import React from 'react';
import Button from 'react-bootstrap/lib/Button'
import Modal from 'react-bootstrap/lib/Modal'

class MyVerticallyCenteredModal extends React.Component {
    render() {
      return (
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Modal heading
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Centered Modal</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }
  }

class ModalSample01 extends React.Component {
    constructor(...args) {
        super(...args);
    
        this.state = { modalShow: false };
      }

    render() {      
        let modalClose = () => this.setState({ modalShow: false });
        return (
            <div className="container system-wrap">
                <div className="row">
                    <Button
                        variant="primary"
                        onClick={() => this.setState({ modalShow: true })}
                    >
                        Launch vertically centered modal
                    </Button>
            
                    <MyVerticallyCenteredModal
                        show={this.state.modalShow}
                        onHide={modalClose}
                    />
                </div>
              </div>
          );
    }
  }
  
  export default ModalSample01;