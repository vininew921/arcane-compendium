import Head from 'next/head';
import { useEffect, useState } from 'react';
import Character from '../models/character';
import CreatureStats from './creatureStats';

type CharacterType = {
    name: string;
    characterClass: string; //TO DO: change to CharacterClass type
    level: number;
    race: string;
    background: string;
    alignment: string;
    playerName: string;
    experiencePoints: number;
};

const CharacterSheet = ({
    name,
    characterClass,
    level,
    race,
    background,
    alignment,
    playerName,
    experiencePoints,
}: CharacterType) => {
    const [currentCharacter, setCharacter] = useState(
        new Character(
            name,
            characterClass,
            level,
            race,
            background,
            alignment,
            playerName,
            experiencePoints
        )
    );

    return (
        <>
            <Head>
                <title>Character Sheet</title>
            </Head>
            <div className='m-2 grid grid-cols-2 text-md gap-2 w-3/4'>
                <div className='grid grid-cols-2 items-center'>
                    <label>Nome do Personagem</label>
                    <input
                        className='p-2 bg-gray-900 border-2 border-white text-white'
                        value={currentCharacter.name}
                        onChange={(e) =>
                            setCharacter({
                                ...currentCharacter,
                                name: e.target.value,
                            })
                        }
                    />
                </div>
                <div className='grid grid-cols-2 items-center'>
                    <label>Classe</label>
                    <input
                        className='p-2 bg-gray-900 border-2 border-white text-white'
                        value={currentCharacter.characterClass}
                        onChange={(e) =>
                            setCharacter({
                                ...currentCharacter,
                                characterClass: e.target.value,
                            })
                        }
                    />
                </div>
                <div className='grid grid-cols-2 items-center'>
                    <label>Level</label>
                    <input
                        className='p-2 bg-gray-900 border-2 border-white text-white'
                        value={currentCharacter.level}
                        onChange={(e) =>
                            setCharacter({
                                ...currentCharacter,
                                level: parseInt(e.target.value),
                            })
                        }
                    />
                </div>
                <div className='grid grid-cols-2 items-center'>
                    <label>Raça</label>
                    <input
                        className='p-2 bg-gray-900 border-2 border-white text-white'
                        value={currentCharacter.race}
                        onChange={(e) =>
                            setCharacter({
                                ...currentCharacter,
                                race: e.target.value,
                            })
                        }
                    />
                </div>
                <div className='grid grid-cols-2 items-center'>
                    <label>Antecedente</label>
                    <input
                        className='p-2 bg-gray-900 border-2 border-white text-white'
                        value={currentCharacter.background}
                        onChange={(e) =>
                            setCharacter({
                                ...currentCharacter,
                                background: e.target.value,
                            })
                        }
                    />
                </div>
                <div className='grid grid-cols-2 items-center'>
                    <label>Alinhamento</label>
                    <input
                        className='p-2 bg-gray-900 border-2 border-white text-white'
                        value={currentCharacter.alignment}
                        onChange={(e) =>
                            setCharacter({
                                ...currentCharacter,
                                alignment: e.target.value,
                            })
                        }
                    />
                </div>
                <div className='grid grid-cols-2 items-center'>
                    <label>Nome do Jogador</label>
                    <input
                        className='p-2 bg-gray-900 border-2 border-white text-white'
                        value={currentCharacter.playerName}
                        onChange={(e) =>
                            setCharacter({
                                ...currentCharacter,
                                playerName: e.target.value,
                            })
                        }
                    />
                </div>
                <div className='grid grid-cols-2 items-center'>
                    <label>Pontos de Experiência</label>
                    <input
                        className='p-2 bg-gray-900 border-2 border-white text-white'
                        value={currentCharacter.experiencePoints}
                        onChange={(e) =>
                            setCharacter({
                                ...currentCharacter,
                                experiencePoints: parseInt(e.target.value),
                            })
                        }
                    />
                </div>
            </div>
            <CreatureStats {...currentCharacter.stats} />
        </>
    );
};

export default CharacterSheet;
