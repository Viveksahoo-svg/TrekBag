import AddItemForm from "./AddItemForm";
import ButtonsGroup from "./ButtonsGroup";
// import { useItemContext } from "../hooks/useItemsContext";
import { useItemsStore } from "../stores/itemsStore";

function SideBar() {
  // const { handleAddItem } = useItemContext();
  const addItem = useItemsStore((state) => state.addItem);
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={addItem} />
      <ButtonsGroup />
    </div>
  );
}

export default SideBar;
