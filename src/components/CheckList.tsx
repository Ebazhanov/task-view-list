import { FunctionComponent, useEffect, useState } from "react";
import CheckItem from "./CheckItem";
import { Item } from "../types";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

const CheckList: FunctionComponent = () => {
  const [list, setList] = useState<Item[]>([]);

  useEffect(() => {
    // for first load, we should call GET https://xxx.com/Tasks/Get here
    // and save the response value to list.
    setList([
      {
        id: 1,
        title: "Paint the wall",
        description: "Please paint all the walls in white color",
        checked: true,
      },
      {
        id: 2,
        title: "Clean the site",
        description:
          "Please make sure you cleaned the construction site before leaving",
        checked: false,
      },
      {
        id: 3,
        title: "Test requirements",
        description: "All pages and description",
        checked: false,
      },
    ]);
  }, []);

  const toggleStatus = (id: number) => {
    setList(
      list.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <div className="bg-gray-100 max-w-xl mx-auto p-4 pb-24">
      <div className="flex items-center mb-6">
        <ArrowLeftIcon className="h-8 w-8 text-black cursor-pointer" />
        <h3 className="text-4xl ml-3">Tasks</h3>
      </div>
      <div className="space-y-4">
        {!list.length ? (
          <div>No todos found.</div>
        ) : (
          list.map((item) => (
            <CheckItem key={item.id} item={item} onClick={toggleStatus} />
          ))
        )}
      </div>
    </div>
  );
};

export default CheckList;
