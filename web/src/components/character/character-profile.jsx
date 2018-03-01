import React from 'react';
import { render } from 'react-dom';
import { Grid, Row, Col, Panel } from 'react-bootstrap';

class CharacterProfile extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            character: {
                name: "None Selected",
                type: "N/A",
                imageUrl: "http://weclipart.com/gimg/BE3E6BD8A136D0E1/di7jA7n6T.gif",
            }
        };
    };

    componentDidMount() {
        if (this.props.character) {
            this.setState({character: this.props.character})
        };
    };

    render() {
        return (
            <Grid>
                <Row>
                    <div className="img-profile">
                        <img src={this.state.character.imageUrl} />
                    </div>
                </Row>
                <Row>
                    Name: {this.state.character.name}
                </Row>
                <Row>
                    Type: {this.state.character.type}
                </Row>
            </Grid>
        );
    };
};

export default CharacterProfile;