import { useContext } from "react";
import { ItemsContext } from "../contexts/ItemsContextProvider";

export function useItemContext() {
  const context = useContext(ItemsContext);
  if (!context) {
    throw new Error(
      "useItemsContext must be used within an ItemsContextProvider"
    );
  }
  return context;
}
