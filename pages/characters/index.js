import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import { getCharacters } from '../../utils/data/charactersData';
import CharactersCard from '../../components/mainCards/CharactersCard';

function Home() {
  const [characters, setCharacters] = useState([]);
  const router = useRouter();
  const getContent = () => {
    getCharacters().then((data) => setCharacters(data));
  };

  useEffect(() => {
    getContent();
  }, []);

  return (
    <article className="characters">
      <h1>Characters</h1>
      <Button
        onClick={() => {
          router.push('/characters/new');
        }}
      >
        Create a Character
      </Button>
      {characters.map((character) => (
        <section key={`character--${character.id}`} className="characters">
          <CharactersCard
            id={character.id}
            name={character.name}
            image={character.image}
            community={character.community}
            background={character.background}
            career={character.career}
            stamina={character.stamina}
            luck={character.luck}
            pluck={character.pluck}
            appraiseSkill={character.appraise_skill}
            athleticsSkill={character.athletics_skill}
            bargainSkill={character.bargain_skill}
            bluntSkill={character.blunt_skill}
            bowSkill={character.bow_skill}
            brawlingSkill={character.brawling_skill}
            commandSkill={character.command_skill}
            crossbowSkill={character.crossbow_skill}
            diplomacySkill={character.diplomacy_skill}
            disguiseSkill={character.disguise_skill}
            dodgeSkill={character.dodge_skill}
            enduranceSkill={character.endurance_skill}
            historySkill={character.history_skill}
            incantationSkill={character.incantation_skill}
            intimidateSkill={character.intimidate_skill}
            languageSkill={character.language_skill}
            largeBladeSkill={character.large_blade_skill}
            lieSkill={character.lie_skill}
            medicineSkill={character.medicine_skill}
            navigationSkill={character.navigation_skill}
            ostlerSkill={character.ostler_skill}
            persuasionSkill={character.persuasion_skill}
            poleArmSkill={character.pole_arm_skill}
            repairSkill={character.repair_skill}
            sleightOfHandSkill={character.sleight_of_hand_skill}
            smallBladeSkill={character.small_blade_skill}
            spotSkill={character.spot_skill}
            stealthSkill={character.stealth_skill}
            streetwiseSkill={character.streetwise_skill}
            survivalSkill={character.survival_skill}
            swimmingSkill={character.swimming_skill}
            thrownSkill={character.thrown_skill}
            possesions={character.possesions}
            weapons={character.weapons}
            traits={character.traits}
            notes={character.notes}
            spells={character.spells}
            onUpdate={getContent}
          />
        </section>
      ))}
    </article>
  );
}

export default Home;
