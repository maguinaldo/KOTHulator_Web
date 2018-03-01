import React from 'react';
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
            <div>
                <div className="row">
                    <div className="img-profile">
                        <img src={this.state.character.imageUrl} />
                    </div>
                </div>
                <div className="row marin-side-5">
                    Name: {this.state.character.name}
                </div>
                <div className="row marin-side-5">
                    Type: {this.state.character.type}
                </div>
            </div>
        );
    };
};

export default CharacterProfile;