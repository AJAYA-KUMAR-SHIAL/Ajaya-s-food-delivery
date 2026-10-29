import { useContext } from "react";
import { dataContext } from "../context/UserContext";

const Quantity = ({ id }) => {
  const { basketData, setBasketData } = useContext(dataContext);

  const increaseQty = (id) => {
    setBasketData((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setBasketData((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Get the quantity of one specific item
  const currentItem = basketData.find(
    (item) => item.id === id
  );

  return (
    <div className="flex justify-between items-center gap-4 bg-green-500 text-black font-bold text-sm md:text-[16px] py-1 px-4 rounded-lg mt-1">
      <button onClick={() => decreaseQty(id)}>
        -
      </button>

      <span className="text-[18px]">
        {currentItem?.quantity ?? 0}
      </span>

      <button onClick={() => increaseQty(id)}>
        +
      </button>
    </div>
  );
};

export default Quantity;