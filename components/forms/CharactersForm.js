import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';
import { createCharacters, updateCharacters } from '../../utils/data/charactersData';

const initalState = {
  name: '',
  image: '',
  community: '',
  background: '',
  career: '',
  campaign_id: '',
  stamina: '',
  luck: '',
  pluck: '',
  appraiseSkill: '4',
  athleticsSkill: '4',
  bargainSkill: '4',
  bluntSkill: '4',
  bowSkill: '4',
  brawlingSkill: '4',
  commandSkill: '4',
  crossbowSkill: '4',
  diplomacySkill: '4',
  disguiseSkill: '4',
  dodgeSkill: '4',
  enduranceSkill: '4',
  historySkill: '4',
  incantationSkill: '4',
  intimidateSkill: '4',
  languageSkill: '4',
  largeBladeSkill: '4',
  lieSkill: '4',
  medicineSkill: '4',
  navigationSkill: '4',
  ostlerSkill: '4',
  persuasionSkill: '4',
  poleArmSkill: '4',
  repairSkill: '4',
  sleightOfHandSkill: '4',
  smallBladeSkill: '4',
  spotSkill: '4',
  stealthSkill: '4',
  streetwiseSkill: '4',
  survivalSkill: '4',
  swimmingSkill: '4',
  thrownSkill: '4',
  possesions: '',
  weapons: '',
  traits: '',
  notes: '',
  spells: '',
  description: '',
  campaign_name: '',
};

const CharactersForm = ({ user, obj }) => {
  const [formInput, setFormInput] = useState(initalState);
  const [currentCharacter, setCurrentCharacter] = useState([]);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const character = {
      name: currentCharacter.name,
      image: currentCharacter.image,
      community: currentCharacter.community,
      background: currentCharacter.background,
      career: currentCharacter.career,
      stamina: currentCharacter.stamina,
      luck: currentCharacter.luck,
      pluck: currentCharacter.pluck,
      appraiseSkill: currentCharacter.appraiseSkill,
      athleticsSkill: currentCharacter.athleticsSkill,
      bargainSkill: currentCharacter.bargainSkill,
      bluntSkill: currentCharacter.bluntSkill,
      bowSkill: currentCharacter.bowSkill,
      brawlingSkill: currentCharacter.brawlingSkill,
      commandSkill: currentCharacter.commandSkill,
      crossbowSkill: currentCharacter.crossbowSkill,
      diplomacySkill: currentCharacter.diplomacySkill,
      disguiseSkill: currentCharacter.disguiseSkill,
      dodgeSkill: currentCharacter.dodgeSkill,
      enduranceSkill: currentCharacter.enduranceSkill,
      historySkill: currentCharacter.historySkill,
      incantationSkill: currentCharacter.incantationSkill,
      intimidateSkill: currentCharacter.intimidateSkill,
      languageSkill: currentCharacter.languageSkill,
      largeBladeSkill: currentCharacter.largeBladeSkill,
      lieSkill: currentCharacter.lieSkill,
      medicineSkill: currentCharacter.medicineSkill,
      navigationSkill: currentCharacter.navigationSkill,
      ostlerSkill: currentCharacter.ostlerSkill,
      persuasionSkill: currentCharacter.persuasionSkill,
      poleArmSkill: currentCharacter.poleArmSkill,
      repairSkill: currentCharacter.repairSkill,
      sleightOfHandSkill: currentCharacter.sleightOfHandSkill,
      smallBladeSkill: currentCharacter.smallBladeSkill,
      spotSkill: currentCharacter.spotSkill,
      stealthSkill: currentCharacter.stealthSkill,
      streetwiseSkill: currentCharacter.streetwiseSkill,
      survivalSkill: currentCharacter.survivalSkill,
      swimmingSkill: currentCharacter.swimmingSkill,
      thrownSkill: currentCharacter.thrownSkill,
      possesions: currentCharacter.possesions,
      weapons: currentCharacter.weapons,
      traits: currentCharacter.traits,
      notes: currentCharacter.notes,
      spells: currentCharacter.spells,
      user_id: user.uid,
    };
    if (obj.id) {
      updateCharacters(character, obj.id).then(() => router.push('/characters'));
    } else {
      createCharacters(character).then(() => router.push('/characters'));
    }
  };

  useEffect(() => {
    if (obj.id) {
      const editCharacter = {
        name: obj.name,
        image: obj.image,
        community: obj.community,
        background: obj.background,
        career: obj.career,
        stamina: obj.stamina,
        luck: obj.luck,
        pluck: obj.pluck,
        appraiseSkill: obj.appraiseSkill,
        athleticsSkill: obj.athleticsSkill,
        bargainSkill: obj.bargainSkill,
        bluntSkill: obj.bluntSkill,
        bowSkill: obj.bowSkill,
        brawlingSkill: obj.brawlingSkill,
        commandSkill: obj.commandSkill,
        crossbowSkill: obj.crossbowSkill,
        diplomacySkill: obj.diplomacySkill,
        disguiseSkill: obj.disguiseSkill,
        dodgeSkill: obj.dodgeSkill,
        enduranceSkill: obj.enduranceSkill,
        historySkill: obj.historySkill,
        incantationSkill: obj.incantationSkill,
        intimidateSkill: obj.intimidateSkill,
        languageSkill: obj.languageSkill,
        largeBladeSkill: obj.largeBladeSkill,
        lieSkill: obj.lieSkill,
        medicineSkill: obj.medicineSkill,
        navigationSkill: obj.navigationSkill,
        ostlerSkill: obj.ostlerSkill,
        persuasionSkill: obj.persuasionSkill,
        poleArmSkill: obj.poleArmSkill,
        repairSkill: obj.repairSkill,
        sleightOfHandSkill: obj.sleightOfHandSkill,
        smallBladeSkill: obj.smallBladeSkill,
        spotSkill: obj.spotSkill,
        stealthSkill: obj.stealthSkill,
        streetwiseSkill: obj.streetwiseSkill,
        survivalSkill: obj.survivalSkill,
        swimmingSkill: obj.swimmingSkill,
        thrownSkill: obj.thrownSkill,
        possesions: obj.possesions,
        weapons: obj.weapons,
        traits: obj.traits,
        notes: obj.notes,
        spells: obj.spells,
      };
      setCurrentCharacter(editCharacter);
    }
  }, [obj]);
  console.warn(formInput);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" required value={currentCharacter.name} onChange={handleChange} />
          <Form.Label>Image</Form.Label>
          <Form.Control name="image" required value={currentCharacter.image} onChange={handleChange} />
          <Form.Label>Community</Form.Label>
          <Form.Control name="community" required value={currentCharacter.community} onChange={handleChange} />
          <Form.Label>Background</Form.Label>
          <Form.Control name="background" required value={currentCharacter.background} onChange={handleChange} />
          <Form.Label>Career</Form.Label>
          <Form.Control name="career" required value={currentCharacter.career} onChange={handleChange} />
          <Form.Label>Stamina</Form.Label>
          <Form.Control name="stamina" required value={currentCharacter.stamina} onChange={handleChange} />
          <Form.Label>Luck</Form.Label>
          <Form.Control name="luck" required value={currentCharacter.luck} onChange={handleChange} />
          <Form.Label>Pluck</Form.Label>
          <Form.Control name="puck" required value={currentCharacter.pluck} onChange={handleChange} />
          <Form.Label>Appraise</Form.Label>
          <Form.Control name="appraise" required value={currentCharacter.appraiseSkill} onChange={handleChange} />
          <Form.Label>Athletics</Form.Label>
          <Form.Control name="athletics" required value={currentCharacter.athleticsSkill} onChange={handleChange} />
          value<Form.Label>Baragin</Form.Label>
          <Form.Control name="bargain" required value={currentCharacter.bargainSkill} onChange={handleChange} />
          <Form.Label>Blunt</Form.Label>
          <Form.Control name="blunt" required value={currentCharacter.bluntSkill} onChange={handleChange} />
          <Form.Label>Bow</Form.Label>
          <Form.Control name="bow" required value={currentCharacter.bowSkill} onChange={handleChange} />
          <Form.Label>Brawling</Form.Label>
          <Form.Control name="brawling" required value={currentCharacter.brawlingSkill} onChange={handleChange} />
          <Form.Label>Command</Form.Label>
          <Form.Control name="command" required value={currentCharacter.commandSkill} onChange={handleChange} />
          <Form.Label>Crossbow</Form.Label>
          <Form.Control name="crossbow" required value={currentCharacter.crossbowSkill} onChange={handleChange} />
          <Form.Label>Diplomacy</Form.Label>
          <Form.Control name="diplomacy" required value={currentCharacter.diplomacySkill} onChange={handleChange} />
          <Form.Label>Disguise</Form.Label>
          <Form.Control name="disguise" required value={currentCharacter.disguiseSkill} onChange={handleChange} />
          <Form.Label>Dodge</Form.Label>
          <Form.Control name="dodge" required value={currentCharacter.dodgeSkill} onChange={handleChange} />
          <Form.Label>Endurance</Form.Label>
          <Form.Control name="endurance" required value={currentCharacter.enduranceSkill} onChange={handleChange} />
          <Form.Label>History</Form.Label>
          <Form.Control name="history" required value={currentCharacter.historySkill} onChange={handleChange} />
          <Form.Label>Incantation</Form.Label>
          <Form.Control name="incantation" required value={currentCharacter.incantationSkill} onChange={handleChange} />
          <Form.Label>Intimidate</Form.Label>
          <Form.Control name="intimidate" required value={currentCharacter.intimidateSkill} onChange={handleChange} />
          <Form.Label>Language</Form.Label>
          <Form.Control name="language" required value={currentCharacter.languageSkill} onChange={handleChange} />
          <Form.Label>Large Blade</Form.Label>
          <Form.Control name="largeBlade" required value={currentCharacter.largeBladeSkill} onChange={handleChange} />
          <Form.Label>Lie</Form.Label>
          <Form.Control name="lie" required value={currentCharacter.lieSkill} onChange={handleChange} />
          <Form.Label>Medicine</Form.Label>
          <Form.Control name="medicine" required value={currentCharacter.medicineSkill} onChange={handleChange} />
          <Form.Label>Navigation</Form.Label>
          <Form.Control name="navigation" required value={currentCharacter.navigationSkill} onChange={handleChange} />
          <Form.Label>Ostler</Form.Label>
          <Form.Control name="ostler" required value={currentCharacter.ostlerSkill} onChange={handleChange} />
          <Form.Label>Persuasion</Form.Label>
          <Form.Control name="persuasion" required value={currentCharacter.persuasionSkill} onChange={handleChange} />
          <Form.Label>Pole Arm</Form.Label>
          <Form.Control name="poleArm" required value={currentCharacter.poleArmSkill} onChange={handleChange} />
          <Form.Label>Repair</Form.Label>
          <Form.Control name="repair" required value={currentCharacter.repairSkill} onChange={handleChange} />
          <Form.Label>Sleight Of Hand</Form.Label>
          <Form.Control name="sleightOfHandSkill" required value={currentCharacter.sleightOfHandSkill} onChange={handleChange} />
          <Form.Label>Small Blade</Form.Label>
          <Form.Control name="smallBladeSkill" required value={currentCharacter.smallBladeSkill} onChange={handleChange} />
          <Form.Label>Spot</Form.Label>
          <Form.Control name="spot" required value={currentCharacter.spotSkill} onChange={handleChange} />
          <Form.Label>Stealth</Form.Label>
          <Form.Control name="stealth" required value={currentCharacter.stealthSkill} onChange={handleChange} />
          <Form.Label>Street Wise</Form.Label>
          <Form.Control name="streetwise" required value={currentCharacter.streetwiseSkill} onChange={handleChange} />
          <Form.Label>Survival</Form.Label>
          <Form.Control name="survival" required value={currentCharacter.survivalSkill} onChange={handleChange} />
          <Form.Label>Swimming</Form.Label>
          <Form.Control name="swimming" required value={currentCharacter.swimmingSkill} onChange={handleChange} />
          <Form.Label>Thrown</Form.Label>
          <Form.Control name="thrownSkill" required value={currentCharacter.thrownSkill} onChange={handleChange} />
          <Form.Label>Possesions</Form.Label>
          <Form.Control name="possesions" required value={currentCharacter.possesions} onChange={handleChange} />
          <Form.Label>Weapons</Form.Label>
          <Form.Control name="weapons" required value={currentCharacter.weapons} onChange={handleChange} />
          <Form.Label>Traits</Form.Label>
          <Form.Control name="traits" required value={currentCharacter.traits} onChange={handleChange} />
          <Form.Label>Notes</Form.Label>
          <Form.Control name="notes" required value={currentCharacter.notes} onChange={handleChange} />
          <Form.Label>Spells</Form.Label>
          <Form.Control name="spells" required value={currentCharacter.spells} onChange={handleChange} />

        </Form.Group>
        {/* TODO: create the rest of the input fields */}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

CharactersForm.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string,
  }).isRequired,
  obj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    community: PropTypes.string,
    background: PropTypes.string,
    career: PropTypes.string,
    campaign_id: PropTypes.string,
    stamina: PropTypes.string,
    luck: PropTypes.string,
    pluck: PropTypes.string,
    appraiseSkill: PropTypes.string,
    athleticsSkill: PropTypes.string,
    bargainSkill: PropTypes.string,
    bluntSkill: PropTypes.string,
    bowSkill: PropTypes.string,
    brawlingSkill: PropTypes.string,
    commandSkill: PropTypes.string,
    crossbowSkill: PropTypes.string,
    diplomacySkill: PropTypes.string,
    disguiseSkill: PropTypes.string,
    dodgeSkill: PropTypes.string,
    enduranceSkill: PropTypes.string,
    historySkill: PropTypes.string,
    incantationSkill: PropTypes.string,
    intimidateSkill: PropTypes.string,
    languageSkill: PropTypes.string,
    largeBladeSkill: PropTypes.string,
    lieSkill: PropTypes.string,
    medicineSkill: PropTypes.string,
    navigationSkill: PropTypes.string,
    ostlerSkill: PropTypes.string,
    persuasionSkill: PropTypes.string,
    poleArmSkill: PropTypes.string,
    repairSkill: PropTypes.string,
    sleightOfHandSkill: PropTypes.string,
    smallBladeSkill: PropTypes.string,
    spotSkill: PropTypes.string,
    stealthSkill: PropTypes.string,
    streetwiseSkill: PropTypes.string,
    survivalSkill: PropTypes.string,
    swimmingSkill: PropTypes.string,
    thrownSkill: PropTypes.string,
    possesions: PropTypes.string,
    weapons: PropTypes.string,
    traits: PropTypes.string,
    notes: PropTypes.string,
    spells: PropTypes.string,
    description: PropTypes.string,
    campaign_name: PropTypes.string,
  }),
};

CharactersForm.defaultProps = {
  obj: initalState,
};

export default CharactersForm;
