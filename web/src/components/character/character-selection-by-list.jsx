import React from "react";
import { render } from "react-dom";
import { Grid, Row, Col, Panel, Button, Well } from "react-bootstrap";

class CharacterSelectionByList extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            characterList: []
        };
    };

    componentWillReceiveProps(nextProps) {
        if (JSON.stringify(nextProps.characterList) !== JSON.stringify(this.state.characterList)) {
            this.setState({ characterList: nextProps.characterList })
        };
    };

    selectCharacter(character, e) {
        e.preventDefault();
        this.props.changeSelectedCharacter(character);
    };

    deleteCharacter(characterId, e) {
        e.stopPropagation();
        window.alert(`${characterId} is up for deletion`)
    };

    render() {
        let htmlCharacterList = this.state.characterList.map((character) => {
            return (
                <React.Fragment key={character._id}>
                    <li onClick={this.selectCharacter.bind(this, character)} className="strip-ul">

                        <Button
                            type="button"
                            bsStyle="danger"
                            bsSize="xsmall"
                            className="margin-right-5 margin-bottom-5"
                            onClick={this.deleteCharacter.bind(this, character._id)}
                        >
                            &times;
                        </Button>

                        {character.name} - ({character._id})

                    </li>
                </React.Fragment>
            )
        });

        return (
            <Row>
                <Col xs={12}>
                    <h3>Selectable Characters</h3>
                    <ul className="strip-ul">
                        {htmlCharacterList}
                    </ul>
                </Col>
            </Row>
        );
    };
};

export default CharacterSelectionByList;