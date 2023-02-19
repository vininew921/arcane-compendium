import { useState } from 'react';
import { stringifiedNumber } from '../helpers/stats_helper';
import CharacterStats, { Stat } from '../models/character_stats';
import Attribute from '../models/enums/attribute';

const CreatureStats = (characterStats: CharacterStats) => {
    const [currentStats, setStats] = useState(characterStats);

    return (
        <>
            <div
                className='
            p-2 
            grid
            grid-cols-5
            gap-4
            items-center
            justify-items-start
            border-4
            border-white
            bg-gray-600
            text-2xl
            m-8
            w-60
            rounded-md'
            >
                <label className='col-span-3'>Força</label>
                <input
                    className=' 
                        bg-gray-900 
                        w-10
                        border-2
                        text-center 
                        rounded-md 
                        border-white'
                    value={currentStats.strenght.value}
                    type='number'
                    onChange={(e) =>
                        setStats({
                            ...currentStats,
                            strenght: {
                                ...currentStats.strenght,
                                value: parseInt(e.target.value),
                                modifier: Math.floor(
                                    (parseInt(e.target.value) - 10) / 2
                                ),
                            },
                        })
                    }
                />
                <label className='justify-self-center'>
                    {stringifiedNumber(currentStats.strenght.modifier)}
                </label>
                <label className='col-span-3'>Destreza</label>
                <input
                    className=' 
                        bg-gray-900 
                        w-10 
                        border-2
                        text-center 
                        rounded-md 
                        border-white'
                    value={currentStats.dexterity.value}
                    type='number'
                    onChange={(e) =>
                        setStats({
                            ...currentStats,
                            dexterity: {
                                ...currentStats.dexterity,
                                value: parseInt(e.target.value),
                                modifier: Math.floor(
                                    (parseInt(e.target.value) - 10) / 2
                                ),
                            },
                        })
                    }
                />
                <label className='justify-self-center'>
                    {stringifiedNumber(currentStats.dexterity.modifier)}
                </label>
                <label className='col-span-3'>Constituição</label>
                <input
                    className=' 
                        bg-gray-900 
                        w-10 
                        border-2
                        text-center 
                        rounded-md 
                        border-white'
                    value={currentStats.constitution.value}
                    type='number'
                    onChange={(e) =>
                        setStats({
                            ...currentStats,
                            constitution: {
                                ...currentStats.constitution,
                                value: parseInt(e.target.value),
                                modifier: Math.floor(
                                    (parseInt(e.target.value) - 10) / 2
                                ),
                            },
                        })
                    }
                />
                <label className='justify-self-center'>
                    {stringifiedNumber(currentStats.constitution.modifier)}
                </label>
                <label className='col-span-3'>Inteligencia</label>
                <input
                    className=' 
                        bg-gray-900 
                        w-10 
                        border-2
                        text-center 
                        rounded-md 
                        border-white'
                    value={currentStats.intelligence.value}
                    type='number'
                    onChange={(e) =>
                        setStats({
                            ...currentStats,
                            intelligence: {
                                ...currentStats.intelligence,
                                value: parseInt(e.target.value),
                                modifier: Math.floor(
                                    (parseInt(e.target.value) - 10) / 2
                                ),
                            },
                        })
                    }
                />
                <label className='justify-self-center'>
                    {stringifiedNumber(currentStats.intelligence.modifier)}
                </label>
                <label className='col-span-3'>Sabedoria</label>
                <input
                    className=' 
                        bg-gray-900 
                        w-10 
                        border-2
                        text-center 
                        rounded-md 
                        border-white'
                    value={currentStats.wisdom.value}
                    type='number'
                    onChange={(e) =>
                        setStats({
                            ...currentStats,
                            wisdom: {
                                ...currentStats.wisdom,
                                value: parseInt(e.target.value),
                                modifier: Math.floor(
                                    (parseInt(e.target.value) - 10) / 2
                                ),
                            },
                        })
                    }
                />
                <label className='justify-self-center'>
                    {stringifiedNumber(currentStats.wisdom.modifier)}
                </label>
                <label className='col-span-3'>Carisma</label>
                <input
                    className=' 
                        bg-gray-900 
                        w-10 
                        border-2
                        text-center 
                        rounded-md 
                        border-white'
                    value={currentStats.charisma.value}
                    type='number'
                    onChange={(e) =>
                        setStats({
                            ...currentStats,
                            charisma: {
                                ...currentStats.charisma,
                                value: parseInt(e.target.value),
                                modifier: Math.floor(
                                    (parseInt(e.target.value) - 10) / 2
                                ),
                            },
                        })
                    }
                />
                <label className='justify-self-center'>
                    {stringifiedNumber(currentStats.charisma.modifier)}
                </label>
            </div>
        </>
    );
};

export default CreatureStats;
