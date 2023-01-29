import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Card, Button } from 'react-bootstrap';
import { deleteCharacters } from '../../utils/data/charactersData';

function CharactersCard({
  name,
  image,
  community,
  background,
  career,
  stamina,
  luck,
  pluck,
  appraiseSkill,
  athleticsSkill,
  bargainSkill,
  bluntSkill,
  bowSkill,
  brawlingSkill,
  commandSkill,
  crossbowSkill,
  diplomacySkill,
  disguiseSkill,
  dodgeSkill,
  enduranceSkill,
  historySkill,
  incantationSkill,
  intimidateSkill,
  languageSkill,
  largeBladeSkill,
  lieSkill,
  medicineSkill,
  navigationSkill,
  ostlerSkill,
  persuasionSkill,
  poleArmSkill,
  repairSkill,
  sleightOfHandSkill,
  smallBladeSkill,
  spotSkill,
  stealthSkill,
  streetwiseSkill,
  survivalSkill,
  swimmingSkill,
  thrownSkill,
  possesions,
  weapons,
  traits,
  notes,
  spells,
  id,
  onUpdate,
}) {
  const deleteThisCharacter = () => {
    if (window.confirm(`Delete ${name}?`)) {
      deleteCharacters(id).then(() => onUpdate());
    }
  };
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={image} alt={name} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title> {name}</Card.Title>
        <ul className="list-group">
          <li className="list-group-item">Community: {community}</li>
          <li className="list-group-item">Actions: {background}</li>
          <li className="list-group-item">Career: {career}</li>
          <li className="list-group-item">Stamina: {stamina}</li>
          <li className="list-group-item">Luck: {luck}</li>
          <li className="list-group-item">Pluck: {pluck}</li>
          <li className="list-group-item">Appraise: {appraiseSkill}</li>
          <li className="list-group-item">Athletics: {athleticsSkill}</li>
          <li className="list-group-item">Baragin: {bargainSkill}</li>
          <li className="list-group-item">Blunt: {bluntSkill}</li>
          <li className="list-group-item">Bow: {bowSkill}</li>
          <li className="list-group-item">Brawling: {brawlingSkill}</li>
          <li className="list-group-item">Command: {commandSkill}</li>
          <li className="list-group-item">Crossbow: {crossbowSkill}</li>
          <li className="list-group-item">Diplomacy: {diplomacySkill}</li>
          <li className="list-group-item">Disguise: {disguiseSkill}</li>
          <li className="list-group-item">Dodge: {dodgeSkill}</li>
          <li className="list-group-item">Endurance: {enduranceSkill}</li>
          <li className="list-group-item">History: {historySkill}</li>
          <li className="list-group-item">Incantation: {incantationSkill}</li>
          <li className="list-group-item">Intimidate: {intimidateSkill}</li>
          <li className="list-group-item">Language: {languageSkill}</li>
          <li className="list-group-item">Large Blade: {largeBladeSkill}</li>
          <li className="list-group-item">Lie: {lieSkill}</li>
          <li className="list-group-item">Medicine: {medicineSkill}</li>
          <li className="list-group-item">Navigation: {navigationSkill}</li>
          <li className="list-group-item">Ostler: {ostlerSkill}</li>
          <li className="list-group-item">Persuaion: {persuasionSkill}</li>
          <li className="list-group-item">Pole Arm: {poleArmSkill}</li>
          <li className="list-group-item">Repair: {repairSkill}</li>
          <li className="list-group-item">Sleight Of Hand: {sleightOfHandSkill}</li>
          <li className="list-group-item">Small Blade: {smallBladeSkill}</li>
          <li className="list-group-item">Spot: {spotSkill}</li>
          <li className="list-group-item">Stealth: {stealthSkill}</li>
          <li className="list-group-item">Streetwise: {streetwiseSkill}</li>
          <li className="list-group-item">Survival: {survivalSkill}</li>
          <li className="list-group-item">Swimming: {swimmingSkill}</li>
          <li className="list-group-item">Thrown: {thrownSkill}</li>
          <li className="list-group-item">Possesions: {possesions}</li>
          <li className="list-group-item">Weapons: {weapons}</li>
          <li className="list-group-item">Traits: {traits}</li>
          <li className="list-group-item">Notes: {notes}</li>
          <li className="list-group-item">Spells: {spells}</li>
        </ul>
        <Link href={`/characters/${id}`} passHref>
          <Button size="sm" variant="dark" className="m-2">
            VIEW
          </Button>
        </Link>
        <Link href={`/characters/edit/${id}`} passHref>
          <Button size="sm" variant="dark">
            EDIT
          </Button>
        </Link>
        <Button size="sm" variant="danger" onClick={deleteThisCharacter} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

CharactersCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  community: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  career: PropTypes.string.isRequired,
  stamina: PropTypes.string.isRequired,
  luck: PropTypes.string.isRequired,
  pluck: PropTypes.string.isRequired,
  appraiseSkill: PropTypes.string.isRequired,
  athleticsSkill: PropTypes.string.isRequired,
  bargainSkill: PropTypes.string.isRequired,
  bluntSkill: PropTypes.string.isRequired,
  bowSkill: PropTypes.string.isRequired,
  brawlingSkill: PropTypes.string.isRequired,
  commandSkill: PropTypes.string.isRequired,
  crossbowSkill: PropTypes.string.isRequired,
  diplomacySkill: PropTypes.string.isRequired,
  disguiseSkill: PropTypes.string.isRequired,
  dodgeSkill: PropTypes.string.isRequired,
  enduranceSkill: PropTypes.string.isRequired,
  historySkill: PropTypes.string.isRequired,
  incantationSkill: PropTypes.string.isRequired,
  intimidateSkill: PropTypes.string.isRequired,
  languageSkill: PropTypes.string.isRequired,
  largeBladeSkill: PropTypes.string.isRequired,
  lieSkill: PropTypes.string.isRequired,
  medicineSkill: PropTypes.string.isRequired,
  navigationSkill: PropTypes.string.isRequired,
  ostlerSkill: PropTypes.string.isRequired,
  persuasionSkill: PropTypes.string.isRequired,
  poleArmSkill: PropTypes.string.isRequired,
  repairSkill: PropTypes.string.isRequired,
  sleightOfHandSkill: PropTypes.string.isRequired,
  smallBladeSkill: PropTypes.string.isRequired,
  spotSkill: PropTypes.string.isRequired,
  stealthSkill: PropTypes.string.isRequired,
  streetwiseSkill: PropTypes.string.isRequired,
  survivalSkill: PropTypes.string.isRequired,
  swimmingSkill: PropTypes.string.isRequired,
  thrownSkill: PropTypes.string.isRequired,
  possesions: PropTypes.string.isRequired,
  weapons: PropTypes.string.isRequired,
  traits: PropTypes.string.isRequired,
  notes: PropTypes.string.isRequired,
  spells: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default CharactersCard;
