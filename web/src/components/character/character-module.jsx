import React from "react";
import { render } from "react-dom";
import { Grid, Row, Col, Well } from "react-bootstrap";

// Components
import CharacterCreate from "./character-create";
import CharacterManager from "./character-manager";

// Services
import characterService from "../../services/character.service";

class CharacterModule extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            characterList: [],
            selectedCharacter: {
                _id: "",
                name: "",
                type: "",
                imageUrl: ""
            }
        };
        this.errorHandler = this.errorHandler.bind(this);
        this.changeSelectedCharacter = this.changeSelectedCharacter.bind(this);
        this.editCharacter = this.editCharacter.bind(this);
        this.createCharacter = this.createCharacter.bind(this);
        this.deleteCharacter = this.deleteCharacter.bind(this);
    };

    componentDidMount() {
        characterService.readAll()
            .then(result => this.setState({ characterList: result.data }))
            .catch(err => this.errorHandler(err));
        ;
    };

    errorHandler(err) {
        console.log(err);
        window.alert(err);
    };

    changeSelectedCharacter(character) {
        this.setState({ selectedCharacter: character });
    };

    editCharacter(character) {
        window.alert(`update ${JSON.stringify(character)}`)
    };

    createCharacter(character) {
        delete character._id
        characterService.create(character)
            .then(result => {
                let newState = [...this.state.characterList]
                character._id = result.data;
                newState.push(character)
                this.setState({ characterList: newState });
            })
    };

    deleteCharacter(id) {
        characterService.delete(id)
            .then(result => {
                let newCharacterList = this.state.characterList.filter(character => character._id !== id);
                this.setState({ characterList: newCharacterList });                        
                window.alert("update complete")
            })
            .catch( err => {
                window.alert("Check conSOLO");
                console.log(err)
            })
        ;
    };

    render() {
        return (
            <div className="row">
                <Col xs={6}>

                    <CharacterCreate
                        character={this.state.selectedCharacter}
                        changeSelectedCharacter={this.changeSelectedCharacter}
                        editCharacter={this.editCharacter}
                        createCharacter={this.createCharacter}
                    />

                </Col>
                <Col xs={6}>

                    <CharacterManager
                        characterList={this.state.characterList}
                        selectedCharacter={this.state.selectedCharacter}
                        changeSelectedCharacter={this.changeSelectedCharacter}
                        deleteCharacter={this.deleteCharacter}
                    />

                </Col>
            </div>
        );
    };
};

export default CharacterModule