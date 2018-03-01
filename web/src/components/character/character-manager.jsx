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
        }
    }

    render() {

        return (
            <Panel>

                <Panel.Heading>
                    Select your character
                </Panel.Heading>

                <Panel.Body>

                    {/* Display selected char */}
                    <Row>
                        <CharacterProfile character={this.state.selectedCharacter} />
                    </Row>
                    {/* /Display selected char */}

                    {/* Provide list of selectable profiles */}
                    <Row>
                        <CharacterSelectionByList characterList={null} />
                    </Row>
                    {/* Provide list of selectable profiles */}

                </Panel.Body>

            </Panel>
        );
    };
};

export default CharacterManager;