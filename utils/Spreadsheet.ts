export const LETTERS = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'AA',
  'AB',
  'AC',
  'AD',
];

export const EMPTY_DATA = new Array(100).fill(new Array(LETTERS.length).fill(''));

export const getData = (linkId: string) => {
  const existingDataRaw = localStorage.getItem(linkId) as any as string;
  const existingData = JSON.parse(existingDataRaw);
  return existingData;
};
