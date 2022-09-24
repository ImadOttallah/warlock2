import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {
  Card, Button, Row, Col, Container,
} from 'react-bootstrap';
import { updateCharacters } from '../../api/charactersData';

function CharactersToken({ charactersObj, onUpdate }) {
  const removeThisCharacter = () => {
    const newCharacterObject = { ...charactersObj, campaign_id: '' };
    if (window.confirm(`Remove ${charactersObj.name}?`)) {
      updateCharacters(newCharacterObject).then(() => onUpdate());
    }
  };
  return (
    <Card border="dark" style={{ width: '20rem' }}>
      <Card.Body>
        <Container>
          <Row>
            <Col>
              <Card.Title>{charactersObj.name}</Card.Title>
              <li className="list-group-item">Career: {charactersObj.career}</li>
              <li className="list-group-item">Community: {charactersObj.community}</li>
            </Col>
            <Col>
              <Card.Img className="tokenImage" variant="top" src={charactersObj.image} alt={charactersObj.name} />
            </Col>
          </Row>

          <Link href={`/characters/${charactersObj.firebaseKey}`} passHref>
            <Button size="sm" variant="dark" className="m-2">
              VIEW
            </Button>
          </Link>
          <Link href={`/characters/edit/${charactersObj.firebaseKey}`} passHref>
            <Button size="sm" variant="dark">
              EDIT
            </Button>
          </Link>
          <Button size="sm" variant="danger" onClick={removeThisCharacter} className="m-2">
            REMOVE
          </Button>
        </Container>
      </Card.Body>
    </Card>
  );
}

CharactersToken.propTypes = {
  charactersObj: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    career: PropTypes.string,
    community: PropTypes.string,
    stamina: PropTypes.string,
    campaign_id: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default CharactersToken;
