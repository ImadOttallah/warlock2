import PropTypes from 'prop-types';
import Link from 'next/link';
import {
  Card, Button, Row, Container, Col,
} from 'react-bootstrap';
import { updateNpc } from '../../api/npcData';

function NpcToken({ npcObj, onUpdate }) {
  const removeThisNpc = () => {
    const newCastObject = { ...npcObj, campaign_id: '' };
    if (window.confirm(`Remove ${npcObj.name}?`)) {
      updateNpc(newCastObject).then(() => onUpdate());
    }
  };

  return (
    <Card border="dark" style={{ width: '20rem' }}>
      <Card.Body>
        <Container>
          <Row>
            <Col>
              <Card.Title>{npcObj.name}</Card.Title>
              <li className="list-group-item">Type: {npcObj.type}</li>
              <li className="list-group-item">Stamina: {npcObj.stamina}</li>
            </Col>
            <Col>
              <Card.Img className="tokenImage" variant="top" src={npcObj.image} alt={npcObj.name} />
            </Col>
          </Row>

          <Link href={`/npc/${npcObj.firebaseKey}`} passHref>
            <Button size="sm" variant="dark" className="m-2">
              VIEW
            </Button>
          </Link>
          <Link href={`/npc/edit/${npcObj.firebaseKey}`} passHref>
            <Button size="sm" variant="dark">
              EDIT
            </Button>
          </Link>
          <Button size="sm" variant="danger" onClick={removeThisNpc} className="m-2">
            REMOVE
          </Button>
        </Container>
      </Card.Body>
    </Card>
  );
}

NpcToken.propTypes = {
  npcObj: PropTypes.shape({
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

export default NpcToken;
