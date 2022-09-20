import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  Button, Form, Row, Col, FloatingLabel,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { createCharacters, updateCharacters } from '../../api/charactersData';
import { useAuth } from '../../utils/context/authContext';
import { getCampaigns } from '../../api/campaignsData';
// import { getWeaponType } from '../../api/typeData';

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
  campaign_name: '',
};

export default function CharactersForm({ obj }) {
  const [formInput, setFormInput] = useState(initalState);
  // const [weapon, setWeapon] = useState([]);
  const [campaigns, setCampaigns] = useState([]);
  const router = useRouter();
  const { user } = useAuth();
  useEffect(() => {
    // getWeaponType(user.uid).then(setWeapon);
    // if (obj.firebaseKey) setFormInput(obj);
    getCampaigns(user.uid).then(setCampaigns);
    if (obj.firebaseKey) setFormInput(obj);
  }, [obj, user]);
  // const y = (20 - formInput.luck);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateCharacters(formInput).then(() => router.push(`/characters/${obj.firebaseKey}`));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createCharacters(payload).then(() => {
        router.push('/characters');
      });
    }
  };
  return (
    <Form className="form-floating" onSubmit={handleSubmit}>
      <h2 className="text-black mt-2">{obj.firebaseKey ? 'Update' : 'Create'} Character</h2>
      <Row className="mb-2">
        <Form.Group as={Col} controlId="formGridName">
          <FloatingLabel controlId="floatingTextarea" label="Name" className="mb-1">
            <Form.Control size="sm" type="text" placeholder="Name" name="name" value={formInput.name} onChange={handleChange} required />
          </FloatingLabel>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridImage">
          <FloatingLabel size="sm" controlId="floatingTextarea" label="Image" className="mb-1">
            <Form.Control size="sm" type="url" placeholder="Image" name="image" value={formInput.image} onChange={handleChange} required />
          </FloatingLabel>
        </Form.Group>
      </Row>
      <Row className="mb-2">
        <Form.Group as={Col} controlId="formGridType">
          <Form.Select aria-label="Campaign" size="sm" name="campaign_id" value={formInput.campaign_id} onChange={handleChange} className="mb-1" required>
            <option value="">Select a Campaign</option>
            <option>none</option>
            {campaigns.map((campaign) => (
              <option key={campaign.firebaseKey} value={campaign.firebaseKey}>
                {campaign.name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      </Row>

      <Row className="mb-2">
        <Form.Group as={Col} controlId="formGridCommunity">
          <FloatingLabel size="sm" controlId="floatingTextarea" label="Community" className="mb-1">
            <Form.Control size="sm" type="text" placeholder="Community" name="community" value={formInput.community} onChange={handleChange} required />
          </FloatingLabel>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridBackground">
          <FloatingLabel size="sm" controlId="floatingTextarea" label="Background" className="mb-1">
            <Form.Control size="sm" type="text" placeholder="Background" name="background" value={formInput.background} onChange={handleChange} required />
          </FloatingLabel>
        </Form.Group>
      </Row>

      <Row className="mb-2">
        <Form.Group as={Col} controlId="formGridCareer">
          <FloatingLabel size="sm" controlId="floatingTextarea" label="Career" className="mb-1">
            <Form.Control size="sm" type="text" placeholder="Career" name="career" value={formInput.career} onChange={handleChange} required />
          </FloatingLabel>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridStamina">
          <FloatingLabel size="sm" controlId="floatingTextarea" label="Stamina" className="mb-1">
            <Form.Control size="sm" type="number" min="0" placeholder="Stamina" name="stamina" value={formInput.stamina} onChange={handleChange} required />
          </FloatingLabel>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLuck">
          <FloatingLabel size="sm" controlId="floatingTextarea" label="Luck" className="mb-1">
            <Form.Control size="sm" type="number" min="0" placeholder="Luck" name="luck" value={formInput.luck} onChange={handleChange} required />
          </FloatingLabel>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPluck">
          <FloatingLabel size="sm" controlId="floatingTextarea" label="Pluck" className="mb-1">
            <Form.Control size="sm" type="number" min="0" max="20" placeholder="Pluck" name="pluck" value={formInput.pluck} onChange={handleChange} required />
          </FloatingLabel>
        </Form.Group>
      </Row>

      <hr />
      <h2 className="text-black mt-2">Adventuring Skills</h2>
      <Row className="mb-2">
        <Form.Group as={Col} controlId="formGridAppraise">
          <FloatingLabel size="sm" controlId="floatingTextarea" label="Appraise" className="mb-1">
            <Form.Control size="sm" type="number" min="0" placeholder="Appraise" name="appraiseSkill" value={formInput.appraiseSkill} onChange={handleChange} required />
          </FloatingLabel>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridAthletics">
          <FloatingLabel size="sm" controlId="floatingTextarea" label="Athletics" className="mb-1">
            <Form.Control size="sm" type="number" min="0" placeholder="Athletics" name="athleticsSkill" value={formInput.athleticsSkill} onChange={handleChange} required />
          </FloatingLabel>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridBargain">
          <FloatingLabel size="sm" controlId="floatingTextarea" label="Bargin" className="mb-1">
            <Form.Control size="sm" type="number" min="0" placeholder="Baragin" name="bargainSkill" value={formInput.bargainSkill} onChange={handleChange} required />
          </FloatingLabel>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridBlunt">
          <FloatingLabel size="sm" controlId="floatingTextarea" label="Blunt" className="mb-1">
            <Form.Control size="sm" type="number" min="0" placeholder="Blunt" name="bluntSkill" value={formInput.bluntSkill} onChange={handleChange} required />
          </FloatingLabel>
        </Form.Group>
      </Row>
      <Row className="mb-2">
        <Form.Group as={Col} controlId="formGridBow">
          <FloatingLabel size="sm" controlId="floatingTextarea" label="Bow" className="mb-1">
            <Form.Control size="sm" type="number" min="0" placeholder="Bow" name="bowSkill" value={formInput.bowSkill} onChange={handleChange} required />
          </FloatingLabel>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridBrawling">
          <FloatingLabel size="sm" controlId="floatingTextarea" label="Brawling" className="mb-1">
            <Form.Control size="sm" type="number" min="0" placeholder="Brawling" name="brawlingSkill" value={formInput.brawlingSkill} onChange={handleChange} required />
          </FloatingLabel>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCommand">
          <FloatingLabel size="sm" controlId="floatingTextarea" label="Command" className="mb-1">
            <Form.Control size="sm" type="number" min="0" placeholder="Command" name="commandSkill" value={formInput.commandSkill} onChange={handleChange} required />
          </FloatingLabel>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCrossbow">
          <FloatingLabel size="sm" controlId="floatingTextarea" label="Crossbow" className="mb-1">
            <Form.Control size="sm" type="number" min="0" placeholder="Crossbow" name="crossbowSkill" value={formInput.crossbowSkill} onChange={handleChange} required />
          </FloatingLabel>
        </Form.Group>
      </Row>
      <Row className="mb-2">
        <Form.Group as={Col} controlId="formGridDiplomacy">
          <FloatingLabel size="sm" controlId="floatingTextarea" label="Diplomacy" className="mb-1">
            <Form.Control size="sm" type="number" min="0" placeholder="Diplomacy" name="diplomacySkill" value={formInput.diplomacySkill} onChange={handleChange} required />
          </FloatingLabel>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridDisguise">
          <FloatingLabel size="sm" controlId="floatingTextarea" label="Disguise" className="mb-1">
            <Form.Control size="sm" type="number" min="0" placeholder="Disguise" name="disguiseSkill" value={formInput.disguiseSkill} onChange={handleChange} required />
          </FloatingLabel>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridDodge">
          <FloatingLabel size="sm" controlId="floatingTextarea" label="Dodge" className="mb-1">
            <Form.Control size="sm" type="number" min="0" placeholder="Dodge" name="dodgeSkill" value={formInput.dodgeSkill} onChange={handleChange} required />
          </FloatingLabel>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEndurance">
          <FloatingLabel size="sm" controlId="floatingTextarea" label="Endurance" className="mb-1">
            <Form.Control size="sm" type="number" min="0" placeholder="Endurance" name="enduranceSkill" value={formInput.enduranceSkill} onChange={handleChange} required />
          </FloatingLabel>
        </Form.Group>
      </Row>

      <Row className="mb-2">
        <Form.Group as={Col} controlId="formGridHistory">
          <FloatingLabel size="sm" controlId="floatingTextarea" label="History" className="mb-1">
            <Form.Control size="sm" type="number" min="0" placeholder="History" name="historySkill" value={formInput.historySkill} onChange={handleChange} required />
          </FloatingLabel>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridIncantation">
          <FloatingLabel size="sm" controlId="floatingTextarea" label="Incantation" className="mb-1">
            <Form.Control size="sm" type="number" min="0" placeholder="Incantation" name="incantationSkill" value={formInput.incantationSkill} onChange={handleChange} required />
          </FloatingLabel>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridIntimidate">
          <FloatingLabel size="sm" controlId="floatingTextarea" label="Intimidate" className="mb-1">
            <Form.Control size="sm" type="number" min="0" placeholder="Intimidate" name="intimidateSkill" value={formInput.intimidateSkill} onChange={handleChange} required />
          </FloatingLabel>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLanguage">
          <FloatingLabel size="sm" controlId="floatingTextarea" label="Language" className="mb-1">
            <Form.Control size="sm" type="number" min="0" placeholder="Language" name="languageSkill" value={formInput.languageSkill} onChange={handleChange} required />
          </FloatingLabel>
        </Form.Group>
      </Row>

      <Row className="mb-2">
        <Form.Group as={Col} controlId="formGridLargeBlade">
          <FloatingLabel size="sm" controlId="floatingTextarea" label="Large Blade" className="mb-1">
            <Form.Control size="sm" type="number" min="0" placeholder="Large Blade" name="largeBladeSkill" value={formInput.largeBladeSkill} onChange={handleChange} required />
          </FloatingLabel>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLie">
          <FloatingLabel size="sm" controlId="floatingTextarea" label="Lie" className="mb-1">
            <Form.Control size="sm" type="number" min="0" placeholder="Lie" name="lieSkill" value={formInput.lieSkill} onChange={handleChange} required />
          </FloatingLabel>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridMedicine">
          <FloatingLabel size="sm" controlId="floatingTextarea" label="Medicine" className="mb-1">
            <Form.Control size="sm" type="number" min="0" placeholder="Medicine" name="medicineSkill" value={formInput.medicineSkill} onChange={handleChange} required />
          </FloatingLabel>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridNavigation">
          <FloatingLabel size="sm" controlId="floatingTextarea" label="Navigation" className="mb-1">
            <Form.Control size="sm" type="number" min="0" placeholder="Navigation" name="navigationSkill" value={formInput.navigationSkill} onChange={handleChange} required />
          </FloatingLabel>
        </Form.Group>
      </Row>

      <Row className="mb-2">
        <Form.Group as={Col} controlId="formGridOstler">
          <FloatingLabel size="sm" controlId="floatingTextarea" label="Ostler" className="mb-1">
            <Form.Control size="sm" type="number" min="0" placeholder="Ostler" name="ostlerSkill" value={formInput.ostlerSkill} onChange={handleChange} required />
          </FloatingLabel>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPersuaion">
          <FloatingLabel size="sm" controlId="floatingTextarea" label="Persuaion" className="mb-1">
            <Form.Control size="sm" type="number" min="0" placeholder="Persuaion" name="persuasionSkill" value={formInput.persuasionSkill} onChange={handleChange} required />
          </FloatingLabel>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPloeArm">
          <FloatingLabel size="sm" controlId="floatingTextarea" label="Pole Arm" className="mb-1">
            <Form.Control size="sm" type="number" min="0" placeholder="Pole Arm" name="poleArmSkill" value={formInput.poleArmSkill} onChange={handleChange} required />
          </FloatingLabel>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridRepair">
          <FloatingLabel size="sm" controlId="floatingTextarea" label="Repair" className="mb-1">
            <Form.Control size="sm" type="number" min="0" placeholder="Repair" name="repairSkill" value={formInput.repairSkill} onChange={handleChange} required />
          </FloatingLabel>
        </Form.Group>
      </Row>

      <Row className="mb-2">
        <Form.Group as={Col} controlId="formGridSleightOfHand">
          <FloatingLabel size="sm" controlId="floatingTextarea" label="Sleight of Hand" className="mb-1">
            <Form.Control size="sm" type="number" min="0" placeholder="Sleight of Hand" name="sleightOfHandSkill" value={formInput.sleightOfHandSkill} onChange={handleChange} required />
          </FloatingLabel>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridSmallBlade">
          <FloatingLabel size="sm" controlId="floatingTextarea" label="Small Blade" className="mb-1">
            <Form.Control size="sm" type="number" min="0" placeholder="Small Blade" name="smallBladeSkill" value={formInput.smallBladeSkill} onChange={handleChange} required />
          </FloatingLabel>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridSpot">
          <FloatingLabel size="sm" controlId="floatingTextarea" label="Spot" className="mb-1">
            <Form.Control size="sm" type="number" min="0" placeholder="Spot" name="spotSkill" value={formInput.spotSkill} onChange={handleChange} required />
          </FloatingLabel>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridStealth">
          <FloatingLabel size="sm" controlId="floatingTextarea" label="Stealth" className="mb-1">
            <Form.Control size="sm" type="number" min="0" placeholder="Stealth" name="stealthSkill" value={formInput.stealthSkill} onChange={handleChange} required />
          </FloatingLabel>
        </Form.Group>
      </Row>

      <Row className="mb-2">
        <Form.Group as={Col} controlId="formGridStreetwise">
          <FloatingLabel size="sm" controlId="floatingTextarea" label="Streetwise" className="mb-1">
            <Form.Control size="sm" type="number" min="0" placeholder="Streetwise" name="streetwiseSkill" value={formInput.streetwiseSkill} onChange={handleChange} required />
          </FloatingLabel>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridSurvival">
          <FloatingLabel size="sm" controlId="floatingTextarea" label="Survival" className="mb-1">
            <Form.Control size="sm" type="number" min="0" placeholder="Survival" name="survivalSkill" value={formInput.survivalSkill} onChange={handleChange} required />
          </FloatingLabel>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridSwimming">
          <FloatingLabel size="sm" controlId="floatingTextarea" label="Swimming" className="mb-1">
            <Form.Control size="sm" type="number" min="0" placeholder="Swimming" name="swimmingSkill" value={formInput.swimmingSkill} onChange={handleChange} required />
          </FloatingLabel>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridThrown">
          <FloatingLabel size="sm" controlId="floatingTextarea" label="Thrown" className="mb-1">
            <Form.Control size="sm" type="number" min="0" placeholder="Thrown" name="thrownSkill" value={formInput.thrownSkill} onChange={handleChange} required />
          </FloatingLabel>
        </Form.Group>
      </Row>
      <hr />

      <Row className="mb-2">
        <Form.Group as={Col} controlId="formGridPossesions">
          <FloatingLabel size="sm" controlId="floatingTextarea" label="Possesions" className="mb-1">
            <Form.Control size="sm" type="text" placeholder="Possesions" name="possesions" value={formInput.possesions} onChange={handleChange} />
          </FloatingLabel>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridWeapons">
          <FloatingLabel size="sm" controlId="floatingTextarea" label="Weapons" className="mb-1">
            <Form.Control size="sm" type="text" placeholder="Weapons" name="weapons" value={formInput.weapons} onChange={handleChange} />
          </FloatingLabel>
        </Form.Group>
      </Row>

      <Row className="mb-2">
        <Form.Group as={Col} controlId="formGridTraits">
          <FloatingLabel size="sm" controlId="floatingTextarea" label="Traits" className="mb-1">
            <Form.Control size="sm" type="text" placeholder="Traits" name="traits" value={formInput.traits} onChange={handleChange} />
          </FloatingLabel>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridSpells">
          <FloatingLabel size="sm" controlId="floatingTextarea" label="Spells" className="mb-1">
            <Form.Control size="sm" type="text" placeholder="Spells" name="spells" value={formInput.spells} onChange={handleChange} />
          </FloatingLabel>
        </Form.Group>
      </Row>
      <Row className="mb-2">
        <Form.Group as={Col} controlId="formGridNotes">
          <FloatingLabel size="sm" controlId="floatingTextarea" label="Notes" className="mb-1">
            <Form.Control size="sm" type="text" placeholder="Notes" name="notes" value={formInput.notes} onChange={handleChange} />
          </FloatingLabel>
        </Form.Group>
      </Row>
      <Form.Check
        type="switch"
        id="public"
        name="public"
        label="Is This Character Public?"
        checked={formInput.public}
        onChange={(e) => setFormInput((prevState) => ({
          ...prevState,
          public: e.target.checked,
        }))}
      />
      <hr />
      {/* A WAY TO HANDLE UPDATES FOR TOGGLES, RADIOS, ETC  */}
      <Button size="sm" variant="dark" type="submit">
        {obj.firebaseKey ? 'Update' : 'Create'} Character
      </Button>
    </Form>
  );
}
CharactersForm.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    community: PropTypes.string,
    background: PropTypes.string,
    career: PropTypes.string,
    campaign_id: PropTypes.string,
    campaign_name: PropTypes.string,
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
    firebaseKey: PropTypes.string,
  }),
};

CharactersForm.defaultProps = {
  obj: initalState,
};
