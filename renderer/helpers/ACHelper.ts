import Attribute from '../models/enums/attribute';

export const modifier = (n: number) => {
  return Math.floor((n - 10) / 2);
};

export const modifierString = (n: number): string => {
  n = modifier(n);

  return n > 0 ? `+${n}` : `${n}`;
};

export const standardArray = (): number[] => {
  return [15, 14, 13, 12, 10, 8];
};

export const proficientModifierString = (
  n: number | undefined,
  proficiency: number,
  proficient: boolean | undefined,
  bonusValue: number = 0
): string => {
  if (n === undefined || proficient === undefined) {
    return '';
  }
  n = modifier(n) + bonusValue;
  n = proficient ? n + proficiency : n;

  return n > 0 ? `+${n}` : `${n}`;
};

export const bonusProficiencyByLevel = (level: number): number => {
  const bonusProfTable = [0, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6];

  return bonusProfTable[level];
};

export const attributeTooltip = (attribute: Attribute): string => {
  const tooltipTable = [
    { attribute: Attribute.STRENGTH, tooltip: 'Atletismo natural, poder corporal' },
    { attribute: Attribute.DEXTERITY, tooltip: 'Agilidade física, reflexos, equilíbrio' },
    { attribute: Attribute.CONSTITUTION, tooltip: 'Saúde, vigor, força vital' },
    {
      attribute: Attribute.INTELLIGENCE,
      tooltip: 'Acuidade mental, recordar informações, perícia analítica',
    },
    { attribute: Attribute.WISDOM, tooltip: 'Consciência, intuição, perspicácia' },
    { attribute: Attribute.CHARISMA, tooltip: 'Confiança, eloquência, liderança' },
  ];

  return tooltipTable.find((x) => x.attribute == attribute)?.tooltip ?? 'Erro';
};

export const attributeToString = (attribute: Attribute): string => {
  const tooltipTable = [
    { attribute: Attribute.STRENGTH, value: 'Força' },
    { attribute: Attribute.DEXTERITY, value: 'Destreza' },
    { attribute: Attribute.CONSTITUTION, value: 'Constituição' },
    { attribute: Attribute.INTELLIGENCE, value: 'Inteligência' },
    { attribute: Attribute.WISDOM, value: 'Sabedoria' },
    { attribute: Attribute.CHARISMA, value: 'Carisma' },
  ];

  return tooltipTable.find((x) => x.attribute == attribute)?.value ?? 'Erro';
};
