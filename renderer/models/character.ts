import CharacterStats from './character_stats';

export default class Character {
    name: string;
    characterClass: string; //TO DO: change to CharacterClass type
    level: number;
    race: string;
    background: string;
    alignment: string;
    playerName: string;
    experiencePoints: number;
    stats: CharacterStats;

    constructor(
        name: string,
        characterClass: string,
        level: number,
        race: string,
        background: string,
        alignment: string,
        playerName: string,
        experiencePoints: number
    ) {
        this.name = name;
        this.characterClass = characterClass;
        this.level = level;
        this.race = race;
        this.background = background;
        this.alignment = alignment;
        this.playerName = playerName;
        this.experiencePoints = experiencePoints;

        this.stats = new CharacterStats(13, 8, 16, 12, 16, 10);
    }
}
