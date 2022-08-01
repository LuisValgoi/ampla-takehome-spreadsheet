import { ISpreadsheetData } from 'components/Spreadsheet';

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
  if (typeof window !== 'undefined') {
    const existingDataRaw = localStorage?.getItem(linkId) as any as string;
    const existingData = JSON.parse(existingDataRaw);
    return existingData;
  } else {
    return {};
  }
};

export const getReferenceCell = (value: string, humanIdx: string, source: ISpreadsheetData, circularRef: boolean): string => {
  if (circularRef) {
    return "Error Circular Ref";
  }

  if (value?.startsWith('=')) {
    const cellValueHumanIndex = value.slice(1, value.length).toUpperCase();
    const cellValue = source?.[cellValueHumanIndex]?.value;
    const isCircularRef = humanIdx === cellValueHumanIndex;

    return getReferenceCell(cellValue, humanIdx, source, isCircularRef);
  }

  return value;
};
