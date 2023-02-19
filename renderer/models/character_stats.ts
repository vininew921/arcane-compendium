import Attribute from './enums/attribute';

export class Stat {
  attribute: Attribute;
  value: number;
  modifier: number;

  constructor(attr: Attribute, value: number) {
    this.attribute = attr;
    this.value = value;
    this.modifier = Math.floor((this.value - 10) / 2);
  }
}

export default class CharacterStats {
  strenght: Stat;
  dexterity: Stat;
  constitution: Stat;
  intelligence: Stat;
  wisdom: Stat;
  charisma: Stat;

  constructor(
    strenght: number,
    dexterity: number,
    constitution: number,
    intelligence: number,
    wisdom: number,
    charisma: number
  ) {
    this.strenght = new Stat(Attribute.STRENGTH, strenght);
    this.dexterity = new Stat(Attribute.DEXTERITY, dexterity);
    this.constitution = new Stat(Attribute.CONSTITUTION, constitution);
    this.intelligence = new Stat(Attribute.INTELLIGENCE, intelligence);
    this.wisdom = new Stat(Attribute.WISDOM, wisdom);
    this.charisma = new Stat(Attribute.CHARISMA, charisma);
  }
}
