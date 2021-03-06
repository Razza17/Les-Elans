import React, { Component } from 'react'
import { ButtonToolbar, Modal, Button, Carousel } from 'react-bootstrap'

export default class DomicileVolants extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            show: false
        };
    }

    render() {
        const images = [];
        let i = 1;
        for (i ; i < 134; i++) {
            images.push('../photo/saison2014/Champigny Vs Dammarie/img'+[i]+'.jpg');
        }
        const ListImages = images.map((image, count) => <Carousel.Item key={image.toString()}><img src={image} />
            <div className="count">{count+1} / {[i]-1}</div></Carousel.Item>);
        return (
            <ButtonToolbar>
                <Button bsStyle="primary" onClick={()=> this.setState({ show:true })}>
                    Voir
                </Button>

                <Modal
                    {...this.props}
                    show={this.state.show}
                    onHide={()=> this.setState({ show:false })}
                    dialogClassName="custom-modal"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-lg">Champigny Vs Dammarie</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Carousel>
                            { ListImages }
                        </Carousel>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={()=> this.setState({ show:false })}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </ButtonToolbar>
        );
    }
}