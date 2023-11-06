import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col, Row } from "bootstrap-4-react/lib/components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlusSquare,
    faSave,
    faUndo,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import CustomToast from "./myToast";
export default class Voiture extends Component {
    constructor(props) {
        super(props);
        this.state = {
            marque: "",
            modele: "",
            couleur: "",
            immatricule: "",
            annee: "",
            prix: "",
            show: false,
        };
        this.voitureChange = this.voitureChange.bind(this);
        this.submitVoiture = this.submitVoiture.bind(this);
    }
    initialState = {
        marque: "",
        modele: "",
        couleur: "",
        immatricule: "",
        annee: "",
        prix: "",
    };
    resetVoiture = () => {
        this.setState(() => this.initialState);
    };

    componentDidMount() {
        const voitureId = this.props.match.params.id;
        if (voitureId) {
            // En mode édition, récupérer les informations de la voiture
            axios
                .get(`http://localhost:8081/api/voitures/${voitureId}`)
                .then((response) => {
                    const voitureData = response.data;
                    this.setState({
                        marque: voitureData.marque,
                        modele: voitureData.modele,
                        couleur: voitureData.couleur,
                        immatricule: voitureData.immatricule,
                        annee: voitureData.annee,
                        prix: voitureData.prix,
                    });
                })
                .catch((error) => {
                    console.error("Erreur lors de la récupération des données : ", error);
                });
        }
    }

    submitVoiture(event) {
        event.preventDefault();

        const voiture = {
            marque: this.state.marque,
            modele: this.state.modele,
            couleur: this.state.couleur,
            immatricule: this.state.immatricule,
            annee: this.state.annee,
            prix: this.state.prix
        };

        const voitureId = this.props.match.params.id;

        if (voitureId) {
            // En mode édition, effectuer une requête PUT pour mettre à jour les informations de la voiture
            axios
                .put(`http://localhost:8080/api/voitures/${voitureId}`, voiture)
                .then((voitureResponse) => {
                    if (voitureResponse.data != null) {
                        this.setState({
                            show: true,
                        });
                        setTimeout(() => this.setState({ show: false }), 3000);
                    }
                })
                .catch((error) => {
                    console.error("Erreur lors de la mise à jour de la voiture : ", error);
                });
        }else{
            axios.post("http://localhost:8080/api/voitures", voiture)
                .then((voitureResponse) => {
                    if (voitureResponse.data != null) {
                        this.setState(this.initialState);
                        this.setState({
                            show: true,
                        });
                        setTimeout(() => this.setState({ show: false }), 3000);
                    }
                });
        }



    }
    voitureChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }
    render() {
        return (
            <Card className={"border border-dark bg-dark text-white"} >
                <div style={{ display: this.state.show ? "block" : "none" }}>
                    <CustomToast
                        children={{
                            show: this.state.show,
                            message: "Voiture ajoutée avec succès.",
                            type: "success",
                        }}
                    />
                </div>
                <Card.Header style={{  textAlign: 'center' }}>
                    <h4 style={{ color: 'white' }}>Ajouter une nouvelle voiture</h4>
                </Card.Header>


                <Card.Body>
                    <Form onSubmit={this.submitVoiture} onReset={this.resetVoiture} id="VoitureFormId">
                        <Row>
                            <Col sm={6} className="mb-3">
                                <Form.Group controlId="formGridMarque" >
                                    <Form.Label> Marque </Form.Label>
                                    <Form.Control
                                        name="marque"
                                        type="text"
                                        className={"bg-dark text-white"}
                                        placeholder="Entrez Marque Voiture"
                                        required
                                        value={this.state.marque}
                                        onChange={this.voitureChange}
                                        autoComplete="off"
                                    />
                                </Form.Group>
                            </Col>
                            <Col sm={6} className="mb-3">
                                <Form.Group controlId="formGridModele">
                                    <Form.Label> Modele </Form.Label>
                                    <Form.Control
                                        name="modele"
                                        type="text"
                                        className={"bg-dark text-white"}
                                        placeholder="Entrez Modele Voiture"
                                        value={this.state.modele}
                                        onChange={this.voitureChange}
                                        autoComplete="off"
                                    />
                                </Form.Group>
                            </Col>
                            <Col sm={6} className="mb-3">
                                <Form.Group controlId="formGridCouleur">
                                    <Form.Label> Couleur </Form.Label>
                                    <Form.Control
                                        name="couleur"
                                        type="text"
                                        className={"bg-dark text-white"}
                                        placeholder="Entrez Couleur Voiture"
                                        value={this.state.couleur}
                                        onChange={this.voitureChange}
                                        autoComplete="off"
                                    />
                                </Form.Group>
                            </Col>
                            <Col sm={6} className="mb-3">
                                <Form.Group controlId="formGridImmatricule">
                                    <Form.Label> Immatricule </Form.Label>
                                    <Form.Control
                                        name="immatricule"
                                        type="text"
                                        className={"bg-dark text-white"}
                                        placeholder="Entrez Immatricule Voiture"
                                        value={this.state.immatricule}
                                        onChange={this.voitureChange}
                                        autoComplete="off"
                                    />
                                </Form.Group>
                            </Col>
                            <Col sm={6} className="mb-3">
                                <Form.Group controlId="formGridPrix">
                                    <Form.Label> Prix </Form.Label>
                                    <Form.Control
                                        name="prix"
                                        type="text"
                                        className={"bg-dark text-white"}
                                        placeholder="Entrez Prix Voiture"
                                        value={this.state.prix}
                                        onChange={this.voitureChange}
                                        autoComplete="off"
                                    />
                                </Form.Group>
                            </Col>
                            <Col sm={6} className="mb-3">
                                <Form.Group controlId="formGridAnnee">
                                    <Form.Label> Année </Form.Label>
                                    <Form.Control
                                        name="annee"
                                        type="text"
                                        className={"bg-dark text-white"}
                                        placeholder="Entrez Année Voiture"
                                        value={this.state.annee}
                                        onChange={this.voitureChange}
                                        autoComplete="off"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Button size="sm" variant="success" type="submit" className="mr-3">
                            <FontAwesomeIcon icon={faSave} /> Submit
                        </Button>
                        <Button size="sm" variant="info" type="reset">
                            <FontAwesomeIcon icon={faUndo} /> Reset
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        );
    }
}