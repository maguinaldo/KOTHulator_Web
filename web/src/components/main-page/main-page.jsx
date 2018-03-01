import React from "react";
import { render } from "react-dom";
import { Grid, Row, Col, Well } from "react-bootstrap";
import CharacterCreate from "../character/character-create";
import CharacterManager from "../character/character-manager";

class MainPage extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {};
    };

    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={6}>
                        <CharacterCreate />
                    </Col>
                    <Col xs={6}>
                        <CharacterManager />
                    </Col>
                </Row>
            </Grid>
        );
    };
};

export default MainPage;