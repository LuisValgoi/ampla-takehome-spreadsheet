export interface ISpreadsheetData {
  [key: string]: {
    display: string;
    value: string;
    dep?: string;
  };
}
