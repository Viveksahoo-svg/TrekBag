import { initialItems } from "../utils/constants";
import { create } from "zustand";
import { persist } from "zustand/middleware";

//In the create function is where is return the data(states) and the functions tha modify it

//For useState behavior "set" is used instead

export const useItemsStore = create(
  persist(
    (set) => ({
      items: initialItems,
      addItem: (newItemName) => {
        set((state) => {
          const newItem = {
            id: new Date().getTime(),
            name: newItemName,
            packed: false,
          };
          return { items: [...state.items, newItem] };
        });
      },
      deleteItem: (id) => {
        set((state) => {
          const newItems = state.items.filter((item) => item.id !== id);
          return { items: newItems };
        });
      },
      toggleItem: (id) => {
        set((state) => {
          const newItems = state.items.map((item) => {
            if (item.id === id) {
              return { ...item, packed: !item.packed };
            }
            return item;
          });
          return { items: newItems };
        });
      },
      removeAllItems: () => {
        set(() => ({ items: [] }));
      },
      resetToInitial: () => {
        set(() => ({ items: initialItems }));
      },
      markAllAsComplete: () => {
        set((state) => {
          const itemsCompleted = state.items.map((item) => {
            return { ...item, packed: true };
          });
          return { items: itemsCompleted };
        });
      },
      markAllAsIncomplete: () => {
        set((state) => {
          const itemsIncompleted = state.items.map((item) => {
            return { ...item, packed: false };
          });

          return { items: itemsIncompleted };
        });
      },
    }),
    {
      name: "items",
    }
  )
);
