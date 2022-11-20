import { FunctionComponent } from "react";
import { Item } from "../types";
import { CheckIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

type ItemProps = {
  item: Item;
  onClick: (id: number) => void;
};

const CheckItem: FunctionComponent<ItemProps> = ({ item, onClick }) => {
  const itemClicked = () => {
    // here we should call POST https://xxx.com/Tasks/Save and update the list
    onClick(item.id);
  };

  return (
    <div
      className="shadow-sm bg-white rounded-sm p-4 flex items-center cursor-pointer"
      data-testid="item-button"
      onClick={() => itemClicked()}
    >
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center border border-gray-400 ${
          item.checked ? "bg-green-500" : "bg-gray-300 border border-gray-400"
        }`}
        data-testid="item-check"
      >
        {item.checked && <CheckIcon className="text-white w-8 h-8" />}
      </div>
      <div className="ml-4 flex-1">
        <div className="text-xl mb-2 font-semibold">{item.title}</div>
        <div className="text-sm text-gray-600">{item.description}</div>
      </div>
      <ChevronRightIcon className="text-gray-500 ml-4 h-6 w-6" />
    </div>
  );
};

export default CheckItem;
