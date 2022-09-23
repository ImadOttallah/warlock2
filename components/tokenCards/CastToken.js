import PropTypes from 'prop-types';
import Link from 'next/link';
import {
  Card, Button, Container, Row, Col,
} from 'react-bootstrap';
import { updateCast } from '../../api/castData';

function CastToken({ castObj, onUpdate }) {
  const removeThisCast = () => {
    const newCastObject = { ...castObj, campaign_id: '' };
    if (window.confirm(`Remove ${castObj.name}?`)) {
      updateCast(newCastObject).then(() => onUpdate());
    }
  };

  return (
    <Card border="dark" style={{ width: '20rem' }}>
      <Card.Body>
        <Container>
          <Row>
            <Col>
              <Card.Title>{castObj.name}</Card.Title>
              <li className="list-group-item">Type: {castObj.type}</li>
              <li className="list-group-item">Stamina: {castObj.stamina}</li>
            </Col>
            <Col>
              <Card.Img className="tokenImage" variant="top" src={castObj.image} alt={castObj.name} />
            </Col>
          </Row>

          <Link href={`/cast/${castObj.firebaseKey}`} passHref>
            <Button size="sm" variant="dark" className="m-2">
              VIEW
            </Button>
          </Link>
          <Link href={`/cast/edit/${castObj.firebaseKey}`} passHref>
            <Button size="sm" variant="dark">
              EDIT
            </Button>
          </Link>
          <Button size="sm" variant="danger" onClick={removeThisCast} className="m-2">
            REMOVE
          </Button>
        </Container>
      </Card.Body>
    </Card>
  );
}

CastToken.propTypes = {
  castObj: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    campaign_id: PropTypes.string,
    community: PropTypes.string,
    stamina: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default CastToken;
