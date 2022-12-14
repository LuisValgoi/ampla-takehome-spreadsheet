import { ISpreadsheetData } from 'interfaces/Spreadsheet';

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
  if (typeof window === 'undefined') {
    return {};
  }

  const existingDataRaw = localStorage?.getItem(linkId) as any as string;
  const existingData = JSON.parse(existingDataRaw);
  return existingData as ISpreadsheetData;
};

export const getReferenceCell = (
  linkId: string,
  value: string | undefined,
  humanIdx: string,
  circularRef: boolean,
): string => {
  const CIRCULAR_REF_MESSAGE = 'Error Circular Ref';
  if (circularRef) {
    return CIRCULAR_REF_MESSAGE;
  }

  if (value?.startsWith('=')) {
    const source = getData(linkId) as ISpreadsheetData | undefined;
    const cellValueHumanIndex = value.slice(1, value.length).toUpperCase();
    const cellValue = source?.[cellValueHumanIndex]?.value;
    const cellDisplay = source?.[cellValueHumanIndex]?.display;
    const isCircularRef = humanIdx === cellValueHumanIndex || cellDisplay === CIRCULAR_REF_MESSAGE;

    return getReferenceCell(linkId, cellValue, humanIdx, isCircularRef);
  }

  return value ?? '';
};

export const persistValue = (linkId: string, typedValue: string, humanIndex: string) => {
  const source = getData(linkId) as ISpreadsheetData | undefined;

  if (typedValue === '') {
    const modifiedData: ISpreadsheetData = { ...source };
    delete modifiedData[humanIndex];
    localStorage.setItem(linkId, JSON.stringify(modifiedData));
  } else {
    const dep = typedValue.slice(1, typedValue.length).toUpperCase();
    const cellValue = getReferenceCell(linkId, typedValue, humanIndex, false);
    const modifiedData: ISpreadsheetData = {
      ...source,
      [humanIndex]: {
        value: typedValue,
        display: cellValue ?? typedValue,
        ...(typedValue?.startsWith('=') ? { dep } : {}),
      },
    };
    localStorage.setItem(linkId, JSON.stringify(modifiedData));
  }
  window?.dispatchEvent?.(new Event('DEP'));
};
