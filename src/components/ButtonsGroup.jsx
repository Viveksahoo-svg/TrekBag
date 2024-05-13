import Button from "./Button";
import { buttonActions } from "../utils/constants";
import { useItemsStore } from "../stores/itemsStore";
// import { useContext } from "react";
// import { ItemsContext } from "../contexts/ItemsContextProvider";

function ButtonsGroup() {
  // const {
  //   handleRemoveAllItems,
  //   handleResetToInitial,
  //   handleMarkAllAsComplete,
  //   handleMarkAllAsIcomplete,
  // } = useContext(ItemsContext);
  const removeAllItems = useItemsStore((state) => state.removeAllItems);
  const resetToInitial = useItemsStore((state) => state.resetToInitial);
  const markAllAsComplete = useItemsStore((state) => state.markAllAsComplete);
  const markAllAsIncomplete = useItemsStore(
    (state) => state.markAllAsIncomplete
  );
  return (
    <section className="button-group">
      {/* {buttonActions.map((action) => (
        <Button  key={action} type="secondary" >
          {action}
        </Button>
      ))} */}
      <Button btnType="secondary" onClick={markAllAsComplete}>
        {buttonActions[0]}
      </Button>
      <Button btnType="secondary" onClick={markAllAsIncomplete}>
        {buttonActions[1]}
      </Button>
      <Button btnType="secondary" onClick={resetToInitial}>
        {buttonActions[2]}
      </Button>
      <Button btnType="secondary" onClick={removeAllItems}>
        {buttonActions[3]}
      </Button>
    </section>
  );
}

export default ButtonsGroup;
