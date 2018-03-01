import React from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';

class CharacterProfile extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            character: {
                _id: "",
                name: "",
                type: "",
                imageUrl: "",
            }
        };
    };

    componentWillReceiveProps(nextProps) {
        if (
            JSON.stringify(nextProps.character) !== JSON.stringify(this.state.character)
            && nextProps.character
        ) {
            this.setState({ character: nextProps.character })
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