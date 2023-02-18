import Equipment from './equipment';

export default class Weapon extends Equipment {
    damage: number;
    damage_type: string; //TO DO: change to "damage type" enum
    attack_bonus: number;
}
