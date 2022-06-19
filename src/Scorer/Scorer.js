import React, { useState } from 'react';
import { Container, Button, Form, Accordion } from 'react-bootstrap';
import './Scorer.css';

export default function Scorer() {

    const [points, setPoints] = useState(0);
    const [pointsBoard, setPointsBoard] = useState([]);

    function updateScore(id, score) {
        const mission = pointsBoard.find(m => m.id === id);
        if(!mission) {
            pointsBoard.push({id: id, score: score});
        } else {
            pointsBoard[id]['score'] = score;
        }
        setPoints(pointsBoard.length !== 0 ? pointsBoard.reduce((total, point) => total = total + parseInt(point.score), 0) : 0);
    }

  return (
    <Container className="scorer-root">
        <p>Licznik punktów POLSKANOVA</p>
        <p>{points} punktów</p>
        <Container className="scorer-app">
          <Accordion alwaysOpen>
            
          <Accordion.Item eventKey="0" className="mission">
                <Accordion.Header>Punkty precyzji</Accordion.Header>
                <Accordion.Body>
                    <p className="mission-text">Ilość punktów precyzji: </p>
                    <Form.Select id="mission2" onChange={(e) => updateScore("0", e.target.value)}>
                        <option value="0">0</option>
                        <option value="10">1 (10)</option>
                        <option value="20">2 (20)</option>
                        <option value="30">3 (30)</option>
                        <option value="40">4 (40)</option>
                        <option value="50">5 (50)</option>
                        <option value="60">6 (60)</option>
                    </Form.Select>
                </Accordion.Body>
            </Accordion.Item>
            
            <Accordion.Item eventKey="1" className="mission">
                <Accordion.Header>Centrum Badawcze</Accordion.Header>
                <Accordion.Body>
                    <p className="mission-text">Czy łazik dotyka białej płytki</p>
                    <Form.Select id="mission1" onChange={(e) => updateScore("1", e.target.value)}>
                        <option value="0">Nie</option>
                        <option value="20">Częściowo (20)</option>
                        <option value="30">Całkowicie (30)</option>
                    </Form.Select>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2" className="mission">
                <Accordion.Header>Zestaw z narzędziami</Accordion.Header>
                <Accordion.Body>
                    <p className="mission-text">Czy narzędzia dotykają białej płytki lub łazika?</p>
                    <Form.Select id="mission2" onChange={(e) => updateScore("2", e.target.value)}>
                        <option value="0">Nie</option>
                        <option value="10">Częściowo (10)</option>
                        <option value="20">Całkowicie (20)</option>
                    </Form.Select>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3" className="mission">
                <Accordion.Header>Stacja satelitarna</Accordion.Header>
                <Accordion.Body>
                    <p className="mission-text">Kolor jaki wskazuje satelita to:</p>
                    <Form.Select id="mission2" onChange={(e) => updateScore("3", e.target.value)}>
                        <option value="0">Czerwony</option>
                        <option value="15">Niebieski (15)</option>
                        <option value="30">Zielony (30)</option>
                    </Form.Select>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4" className="mission">
                <Accordion.Header>Zawory</Accordion.Header>
                <Accordion.Body>
                    <p className="mission-text">Ilość zakręconych zaworów: </p>
                    <Form.Select id="mission2" onChange={(e) => updateScore("4", e.target.value)}>
                        <option value="0">0</option>
                        <option value="30">1 (30)</option>
                        <option value="60">2 (60)</option>
                    </Form.Select>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5" className="mission">
                <Accordion.Header>Panel Słoneczny</Accordion.Header>
                <Accordion.Body>
                    <p className="mission-text">Czy panel jest przekręcony? </p>
                    <Form.Select id="mission2" onChange={(e) => updateScore("5", e.target.value)}>
                        <option value="0">Nie</option>
                        <option value="20">Tak (20)</option>
                    </Form.Select>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="6" className="mission">
                <Accordion.Header>Kosmiczna winda</Accordion.Header>
                <Accordion.Body>
                    <p className="mission-text">Czy winda jest uniesiona? </p>
                    <Form.Select id="mission2" onChange={(e) => updateScore("6", e.target.value)}>
                        <option value="0">Nie</option>
                        <option value="25">Tak (25)</option>
                    </Form.Select>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="7" className="mission">
                <Accordion.Header>Projekt badawczy</Accordion.Header>
                <Accordion.Body>
                    <p className="mission-text">Czy projekt badawczy został dostarczony? </p>
                    <Form.Select id="mission2" onChange={(e) => updateScore("7", e.target.value)}>
                        <option value="0">Nie</option>
                        <option value="25">Tak (25)</option>
                    </Form.Select>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="8" className="mission">
                <Accordion.Header>Satelity małe</Accordion.Header>
                <Accordion.Body>
                    <p className="mission-text">Ilość wystrzelonych małych satelit: </p>
                    <Form.Select id="mission2" onChange={(e) => updateScore("8", e.target.value)}>
                        <option value="0">0</option>
                        <option value="15">1 (15)</option>
                        <option value="30">2 (30)</option>
                        <option value="45">3 (45)</option>
                    </Form.Select>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="9" className="mission">
                <Accordion.Header>Satelity duże</Accordion.Header>
                <Accordion.Body>
                    <p className="mission-text">Ilość wystrzelonych dużych satelit: </p>
                    <Form.Select id="mission2" onChange={(e) => updateScore("9", e.target.value)}>
                        <option value="0">0</option>
                        <option value="20">1 (20)</option>
                        <option value="40">2 (40)</option>
                    </Form.Select>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="10" className="mission">
                <Accordion.Header>Teleportacja</Accordion.Header>
                <Accordion.Body>
                    <p className="mission-text">Czy robot znajduje się w przynajmniej 50% w wyznaczonym polu? </p>
                    <Form.Select id="mission2" onChange={(e) => updateScore("10", e.target.value)}>
                        <option value="0">Nie</option>
                        <option value="30">Tak (30)</option>
                    </Form.Select>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="11" className="mission">
                <Accordion.Header>Odkrywanie życia</Accordion.Header>
                <Accordion.Body>
                    <p className="mission-text">Czy mikroskop wskazuje w większości kolor: </p>
                    <Form.Select id="mission2" onChange={(e) => updateScore("11", e.target.value)}>
                        <option value="0">Nie</option>
                        <option value="10">Biały (10)</option>
                        <option value="30">Zielony (30)</option>
                    </Form.Select>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="12" className="mission">
                <Accordion.Header>Rakieta</Accordion.Header>
                <Accordion.Body>
                    <p className="mission-text">Czy rakieta jest wzniesiona w górę? </p>
                    <Form.Select id="mission2" onChange={(e) => updateScore("12", e.target.value)}>
                        <option value="0">Nie</option>
                        <option value="60">Tak (60)</option>
                    </Form.Select>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="13" className="mission">
                <Accordion.Header>Paliwo</Accordion.Header>
                <Accordion.Body>
                    <p className="mission-text">Czy paliwo jest wzniesione w górę? </p>
                    <Form.Select id="mission2" onChange={(e) => updateScore("13", e.target.value)}>
                        <option value="0">Nie</option>
                        <option value="30">Tak (30)</option>
                    </Form.Select>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="14" className="mission">
                <Accordion.Header>Platforma dla astronautów</Accordion.Header>
                <Accordion.Body>
                    <p className="mission-text">Czy platforma jest wzniesiona w górę? </p>
                    <Form.Select id="mission2" onChange={(e) => updateScore("14", e.target.value)}>
                        <option value="0">Nie</option>
                        <option value="30">Tak (30)</option>
                    </Form.Select>
                </Accordion.Body>
            </Accordion.Item>

            </Accordion>
        </Container>
    </Container>
  )
}
