"use client";

import type { Dispatch, ReactNode, SetStateAction } from "react";
import { createContext, useContext, useState } from "react";

export type CursorType = "default" | "link" | "project-view";

interface CursorContextProps {
  cursorType: CursorType;
  setCursorType: Dispatch<SetStateAction<CursorType>>;
}

const CursorContext = createContext<CursorContextProps | undefined>(undefined);

export function CursorProvider({ children }: { children: ReactNode }) {
  const [cursorType, setCursorType] = useState<CursorType>("default");

  return (
    <CursorContext.Provider value={{ cursorType, setCursorType }}>
      {children}
    </CursorContext.Provider>
  );
}

export function useCursor() {
  const context = useContext(CursorContext);
  if (context === undefined) {
    throw new Error("useCursor must be used within a CursorProvider");
  }
  return context;
}
