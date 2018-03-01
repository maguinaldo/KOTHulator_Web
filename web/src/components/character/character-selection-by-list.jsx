import React from "react";
import { render } from "react-dom";
import { Grid, Row, Col, Panel, Button } from "react-bootstrap";

class CharacterSelectionByList extends React.PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            characterList: [
                {_id: 1, name: "Mitch"},
                {_id: 2, name: "King"},
                {_id: 3, name: "Kong"}
            ]
        };
    };

    componentDidMount() {
        if (this.props.characterList) {
            this.setState({characterList: this.props.characterList})
        };
    };

    selectCharacter(character, e) {
        e.preventDefault();
        window.alert(`${character._id} was clicked`);
    };

    deleteCharacter(characterId, e) {
        e.stopPropagation();
        window.alert(`${characterId} is up for deletion`)
    };

    render() {
        let htmlCharacterList = this.state.characterList.map( (character) => {
            return (
                <React.Fragment key={character._id}>
                    <li onClick={this.selectCharacter.bind(this, character)}>
    
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

        return(
            <Grid>
                <Row>
                    <ul>
                        {htmlCharacterList}
                    </ul>
                </Row>            
            </Grid>
        );
    };
};

export default CharacterSelectionByList;