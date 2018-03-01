import React from 'react';
import { render } from 'react-dom';
import { Grid, Row, Col, Panel } from 'react-bootstrap';

class CharacterCreate extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            character: {
                _id: "",
                name: "",
                type: "",
                imageUrl: ""
            }
        };

        this.submitCharacter = this.submitCharacter.bind(this);
        this.updateCharacterData_Name = this.updateCharacterData_Name.bind(this);
        this.updateCharacterData_Type = this.updateCharacterData_Type.bind(this);
        this.updateCharacterData_ImageURL = this.updateCharacterData_ImageURL.bind(this);
        this.clearCharacterForm = this.clearCharacterForm.bind(this);

        // DO NOT initialize _id.  Checks on existance are used
        this.initializedCharacter = {
            _id: "",
            name: "",
            type: "",
            imageUrl: ""
        };
    };

    componentWillReceiveProps(nextProps) {
        if (
            JSON.stringify(nextProps.character) !== JSON.stringify(this.state.character)
            && (nextProps.character)
        ) {
            this.setState({ character: nextProps.character })
        };
    };

    updateCharacterData_Name(e) {
        let newCharacterState = Object.assign({}, this.state.character, { name: e.target.value });
        this.setState({ character: newCharacterState });
    };

    updateCharacterData_Type(e) {
        let newCharacterState = Object.assign({}, this.state.character, { type: e.target.value });
        this.setState({ character: newCharacterState });
    };

    updateCharacterData_ImageURL(e) {
        let newCharacterState = Object.assign({}, this.state.character, { imageUrl: e.target.value });
        this.setState({ character: newCharacterState });
    };

    submitCharacter = (e) => {
        e.preventDefault();

        if (this.state.character._id) {
            this.props.editCharacter(this.state.character);
        } else {
            this.props.createCharacter(this.state.character);
        };

        this.clearCharacterForm();
    };

    clearCharacterForm() {
        this.setState({ character: { ...this.initializedCharacter } });       // Clear form only
    };

    render() {
        let headingText = `Create a new character`;
        let buttonText = `Create`;

        if (this.state.character._id) {
            headingText = `Character Edit`;
            buttonText = `Update`;
        };

        return (
            <Panel>

                <Panel.Heading>
                    {headingText}
                </Panel.Heading>

                <Panel.Body>
                    <form onSubmit={this.submitCharacter}>

                        {/* Inputs */}
                        <div className="row">
                            <div className="col-xs-12">

                                {/* Name */}
                                <div className="form-group">
                                    <input className="form-control" placeholder="Character Name" value={this.state.character.name}
                                        onChange={this.updateCharacterData_Name}
                                    />
                                </div>
                                {/* /Name */}

                                {/* Type */}
                                <div className="form-group">
                                    <input className="form-control" placeholder="Type... (Monster, Bug, Beast, etc.)" value={this.state.character.type}
                                        onChange={this.updateCharacterData_Type}
                                    />
                                </div>
                                {/* /Type */}

                                {/* Image URL */}
                                <div className="form-group">
                                    <input className="form-control" placeholder="Image URL" value={this.state.character.imageUrl}
                                        onChange={this.updateCharacterData_ImageURL}
                                    />
                                </div>
                                {/* /Image URL */}

                            </div>
                        </div>
                        {/* Inputs */}

                        {/* Buttons */}
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="form-group">
                                    <button type="submit" className="btn margin-right-5">{buttonText}</button>
                                    <button type="button" className="btn margin-right-5" onClick={this.clearCharacterForm}>Clear</button>
                                </div>
                            </div>
                        </div>
                        {/* /Buttons */}

                    </form>
                </Panel.Body>

            </Panel>
        );
    };
};

export default CharacterCreate;