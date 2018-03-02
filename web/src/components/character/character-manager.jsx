import React from "react";
import { render } from "react-dom";
import { Grid, Row, Col, Panel } from "react-bootstrap";

import CharacterProfile from "./character-profile";
import CharacterSelectionByList from "./character-selection-by-list";

class CharacterManager extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            characterList: [],
            selectedCharacter: null
        };        
    };

    render() {

        return (
            <Panel>

                <Panel.Heading>
                    Select your character
                </Panel.Heading>

                <Panel.Body>

                    {/* Display selected char */}
                    <Row>
                        <Col xs={12}>
                            <CharacterProfile character={this.props.selectedCharacter} />
                        </Col>
                    </Row>
                    {/* /Display selected char */}

                    {/* Provide list of selectable profiles */}
                    <Row>
                        <Col xs={12}>
                            <CharacterSelectionByList 
                                characterList={this.props.characterList} 
                                changeSelectedCharacter = {this.props.changeSelectedCharacter}
                                deleteCharacter = {this.props.deleteCharacter}
                            />
                        </Col>
                    </Row>
                    {/* /Provide list of selectable profiles */}

                </Panel.Body>

            </Panel>
        );
    };
};

export default CharacterManager;