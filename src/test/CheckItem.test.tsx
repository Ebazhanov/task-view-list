import { render, screen } from "@testing-library/react";
import CheckItem from "../components/CheckItem";

test("check item", async () => {
  const item = {
    id: 1,
    title: "Paint the wall",
    description: "Please paint all the walls in white color",
    checked: true,
  };

  const handleClick = jest.fn((id: number) => {});

  const { rerender } = render(<CheckItem item={item} onClick={handleClick} />);

  const checkMark = screen.getByTestId("item-check");
  expect(checkMark).toHaveClass(
    "w-12 h-12 rounded-full flex items-center justify-center bg-green-500"
  );

  const item2 = {
    id: 1,
    title: "Paint the wall",
    description: "Please paint all the walls in white color",
    checked: false,
  };

  rerender(<CheckItem item={item2} onClick={handleClick} />);

  expect(checkMark).toHaveClass(
    "w-12 h-12 rounded-full flex items-center justify-center bg-gray-300 border border-gray-400"
  );
});
