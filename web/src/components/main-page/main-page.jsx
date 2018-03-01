import React from "react";
import { render } from "react-dom";
import { Grid, Row, Col, Well } from "react-bootstrap";
import CharacterModule from "../character/character-module";

class MainPage extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {};
    };

    render() {
        return (
            <Grid>
                <Row>
                    <CharacterModule />
                </Row>
            </Grid>
        );
    };
};

export default MainPage;