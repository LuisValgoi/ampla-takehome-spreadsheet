import { createContext, SetStateAction, useContext, useState } from 'react';

export interface SpreadSheetState {
  cellsFocused: ICellsFocused;
  setCellsFocused: React.Dispatch<SetStateAction<ICellsFocused>>;
}

export interface ICellsFocused {
  columnLetter?: string;
  rowNumber?: number;
}

export const AppContext = createContext<SpreadSheetState>({} as SpreadSheetState);

export function useSpreadSheet() {
  return useContext(AppContext);
}

export function SpreadSheetProvider({ children }: { children: JSX.Element }) {
  const [cellsFocused, setCellsFocused] = useState<ICellsFocused>({ columnLetter: undefined, rowNumber: undefined });

  const value = {
    cellsFocused,
    setCellsFocused,
  } as SpreadSheetState;

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
