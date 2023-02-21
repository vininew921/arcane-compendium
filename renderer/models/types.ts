import Attribute from './enums/attribute';

export type TCharacter = {
  name: string;
  characterClass: string; //TO DO: change to CharacterClass type
  level: number;
  race: string;
  background: string;
  alignment: string;
  playerName: string;
  experiencePoints: number;
};

export type TStat = {
  name: string;
  attribute: Attribute;
  value: number;
  color: string;
};

export type TSkill = {
  name: string;
  attribute: Attribute;
  proficient: boolean;
};

export type TSavingThrow = {
  name: string;
  attribute: Attribute;
  proficient: boolean;
};
