import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  Row, Col, Container, Card,
} from 'react-bootstrap';
import viewCharacterDetails from '../../api/mergedData';

export default function ViewCharacters() {
  const [characterDetails, setCharacterDetails] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;
  useEffect(() => {
    viewCharacterDetails(firebaseKey).then(setCharacterDetails);
  }, [firebaseKey]);
  return (
    <>
      <Card style={{ margin: '10px' }}>
        <Container>
          <Row xs={2}>
            <Col xs> Name: {characterDetails.name}</Col>
            <Col xs>Image: {characterDetails.image}</Col>
          </Row>
          <Col xs>Community: {characterDetails.community}</Col>
          <Col xs>Career: {characterDetails.career}</Col>
          <Col xs>Background: {characterDetails.background}</Col>
          <Col xs>Stamina: {characterDetails.stamina}</Col>
          <Col xs>Luck: {characterDetails.luck}</Col>
          <Col xs>Pluck: {characterDetails.pluck}</Col>
          <hr />
          <Row xs={4}>
            <Col xs>Appraise: {characterDetails.appraiseSkill}</Col>
            <Col xs>Athletics: {characterDetails.athleticsSkill}</Col>
            <Col xs>Baragin: {characterDetails.bargainSkill}</Col>
            <Col xs>Blunt: {characterDetails.bluntSkill}</Col>
            <Col xs>Bow: {characterDetails.bowSkill}</Col>
            <Col xs>Brawling: {characterDetails.brawlingSkill}</Col>
            <Col xs>Command: {characterDetails.commandSkill}</Col>
            <Col xs>Crossbow: {characterDetails.crossbowSkill}</Col>
          </Row>
          <hr />
          <Row xs={4}>
            <Col xs>Diplomacy: {characterDetails.diplomacySkill}</Col>
            <Col xs>Disguise: {characterDetails.disguiseSkill}</Col>
            <Col xs>Dodge: {characterDetails.dodgeSkill}</Col>
            <Col xs>Endurance: {characterDetails.enduranceSkill}</Col>
            <Col xs>History: {characterDetails.historySkill}</Col>
            <Col xs>Incantation: {characterDetails.incantationSkill}</Col>
            <Col xs>Intimidate: {characterDetails.intimidateSkill}</Col>
            <Col xs>Language: {characterDetails.languageSkill}</Col>
          </Row>
          <hr />
          <Row xs={4}>
            <Col xs>Large Blade: {characterDetails.largeBladeSkill}</Col>
            <Col xs>Lie: {characterDetails.lieSkill}</Col>
            <Col xs>Medicine: {characterDetails.medicineSkill}</Col>
            <Col xs>Navigation: {characterDetails.navigationSkill}</Col>
            <Col xs>Ostler: {characterDetails.ostlerSkill}</Col>
            <Col xs>Persuaion: {characterDetails.persuasionSkill}</Col>
            <Col xs>Pole Arm: {characterDetails.poleArmSkill}</Col>
            <Col xs>Repair: {characterDetails.repairSkill}</Col>
          </Row>
          <hr />
          <Row xs={4}>
            <Col xs>Sleight of Hand: {characterDetails.sleightOfHandSkill}</Col>
            <Col xs>Small Blade: {characterDetails.smallBladeSkill}</Col>
            <Col xs>Spot: {characterDetails.spotSkill}</Col>
            <Col xs>Stealth: {characterDetails.stealthSkill}</Col>
            <Col xs>Streetwise: {characterDetails.streetwiseSkill}</Col>
            <Col xs>Survival: {characterDetails.survivalSkill}</Col>
            <Col xs>Swimming: {characterDetails.swimmingSkill}</Col>
            <Col xs>Thrown: {characterDetails.thrownSkill}</Col>
          </Row>
          <hr />
          <Row xs={2}>
            <Col xs>Possesions: {characterDetails.possesions}</Col>
            <Col xs>Weapons: {characterDetails.weapons}</Col>
          </Row>
          <Row xs={2}>
            <Col xs>Traits: {characterDetails.traits}</Col>
            <Col xs>Spells: {characterDetails.spells}</Col>
          </Row>
          <Row xs={1}>
            <Col xs>Notes: {characterDetails.notes}</Col>
          </Row>
        </Container>

      </Card>
    </>
  );
}
