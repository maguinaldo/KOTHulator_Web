import React from 'react';
import { render } from 'react-dom';
import { Grid, Row, Col, Panel } from 'react-bootstrap';

class CharacterCreate extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            currentCharacter: {}
        };
        this.submitCharacter = this.submitCharacter.bind(this);
    };

    componentDidMount() {
        if (this.props.character) {
            this.setState({ currentCharacter: this.props.character })
        };

    };

    submitCharacter = (e) => {
        e.preventDefault();
        window.alert("submit was hit");
    };

    render() {
        return (
            <Panel>

                <Panel.Heading>
                    Create a new character
                </Panel.Heading>
                
                <Panel.Body>
                    <form onSubmit={this.submitCharacter}>

                        <div className="row">
                            <div className="col-xs-12">
                                
                                <div className="form-group">
                                    <input className="form-control" placeholder="Character Name" />
                                    
                                </div>
                                
                                <div className="form-group">
                                    <input className="form-control" placeholder="Type... (Monster, Bug, Beast, etc.)" />
                                </div>
                            
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xs-12">
                                <div className="form-group">
                                    <button type="submit" className="btn">Save</button>
                                </div>
                            </div>
                        </div>

                    </form>
                </Panel.Body>

            </Panel>
        );
    };
};

export default CharacterCreate;