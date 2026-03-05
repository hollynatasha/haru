export interface Prize {
  label: string;
  shortLabel: string;
  probability: number; // out of 100
  color: string;
  textColor: string;
}

export const PRIZES: Prize[] = [
  {
    label: 'Free Photobooth',
    shortLabel: 'Free Photo',
    probability: 3,
    color: '#f5c842',
    textColor: '#3d1a00',
  },
  {
    label: 'Free Giant Photobooth',
    shortLabel: 'Giant Photo',
    probability: 5,
    color: '#ff7675',
    textColor: '#ffffff',
  },
  {
    label: 'Free ID Card',
    shortLabel: 'Free ID',
    probability: 5,
    color: '#c94f82',
    textColor: '#ffffff',
  },
  {
    label: '75% Photobooth Discount',
    shortLabel: '75% Photo',
    probability: 7,
    color: '#8b2252',
    textColor: '#ffffff',
  },
  {
    label: '50% Photobooth Discount',
    shortLabel: '50% Photo',
    probability: 15,
    color: '#f07096',
    textColor: '#ffffff',
  },
  {
    label: '50% Merch Discount',
    shortLabel: '50% Merch',
    probability: 15,
    color: '#f9c4d2',
    textColor: '#4a1a2c',
  },
  {
    label: '25% Merch Discount',
    shortLabel: '25% Merch',
    probability: 50,
    color: '#FFB2C5',
    textColor: '#4a1a2c',
  },
];

// Total must equal 100
if (PRIZES.reduce((sum, p) => sum + p.probability, 0) !== 100) {
  throw new Error('Prize probabilities must sum to 100');
}

export function pickPrize(): Prize {
  const rand = Math.random() * 100;
  let cumulative = 0;
  for (const prize of PRIZES) {
    cumulative += prize.probability;
    if (rand < cumulative) return prize;
  }
  return PRIZES[PRIZES.length - 1];
}
