import Attribute from './enums/attribute';
import Dice from './enums/dice';

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

export type THitDice = {
  maxHealth: number;
  currentHealth: number;
  temporaryHealth: number;
  diceType: Dice;
  diceCount: number;
  sucessThrows: number;
  failThrows: number;
};
