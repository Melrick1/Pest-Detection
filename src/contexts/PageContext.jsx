import { createContext, useContext, useState, useEffect } from "react";

const PageContext = createContext();

export function usePage() {
  return useContext(PageContext);
}

export function PageProvider() {
    const [isActive, setIsActive] = useState(false)
}