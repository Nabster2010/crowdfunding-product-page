import { useState } from "react";
import MyButton from "./MyButton";
interface ModalPricingCardProps {
  title: string;
  subtitle: string;
  desc: string;
  stock: any;
  price: number;
  inputValue: number;
  selected: boolean;
  setSelected: (value: number) => void;
  setModalOpen: (value: boolean) => void;
  setSuccessModalOpen: (value: boolean) => void;
  successModalOpen: boolean;
}

const ModalPricingCard = ({
  title,
  subtitle = "",
  desc,
  stock = null,
  price,
  inputValue,
  selected,
  setSelected,
  setModalOpen,
  setSuccessModalOpen,
  successModalOpen,
}: ModalPricingCardProps) => {
  const [value, setValue] = useState(0);
  const [valid, setValid] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value < price || value <= 0) {
      setValid(false);
      return;
    }
    setModalOpen(false);
    // open success modal
    setSuccessModalOpen(true);
  };
  return (
    <div
      className={`relative px-4 py-8 mt-4 rounded-lg border  focus-within:border-Moderatecyan ${
        selected ? "border-Moderatecyan" : "border-gray-300"
      } `}
    >
      <div className="flex flex-col md:flex-row md:justify-start md:items-center hover:text-Moderatecyan cursor-pointer ">
        <div className="flex">
          <input
            type="radio"
            value={inputValue}
            onChange={(e) => setSelected(inputValue)}
            name="selectPledge"
            checked={selected}
            id="radio"
            className="appearance-none bg-white mr-4 peer text-Moderatecyan w-6 h-6 rounded-full border border-gray-300 hover:border-Moderatecyan grid place-content-center before:content-[''] before:w-4 before:h-4  before:bg-Moderatecyan before:rounded-full before:scale-0 checked:before:scale-100 checked:border-Moderatecyan "
          />
          <label
            htmlFor="radio"
            className="font-bold peer-checked:text-Moderatecyan"
          >
            {title}
          </label>
        </div>
        {subtitle && (
          <h3 className="text-Moderatecyan md:ml-6 ml-10 ">{subtitle}</h3>
        )}
      </div>

      <h3 className="mt-4 text-Darkgray leading-8 ">{desc}</h3>

      {stock && (
        <h1 className="lg:absolute lg:top-6 lg:right-4 text-xl font-bold mt-6 lg:mt-0">
          {stock}
          <span className="text-Darkgray text-base font-normal ml-2">
            {" "}
            left
          </span>
        </h1>
      )}
      {/* details */}

      {selected && (
        <div className="border-t w-full mt-8 ">
          <div className="flex flex-col space-y-6 lg:flex-row justify-center items-center mt-6">
            <h3 className="text-Darkgray w-1/3">Enter your pledge</h3>
            <form
              onSubmit={handleSubmit}
              className=" flex w-full flex-col md:flex-row items-center justify-center md:items-center md:justify-center"
            >
              <div className="relative mb-4 md:mb-0  md:mr-4 md:pl-4">
                <div
                  className={`
          w-full h-14 rounded-full flex  justify-start items-center  border before:content-['$'] before:text-lg before:px-4 before:text-Darkgray focus-within:border-black ${
            !valid && "border-red-600"
          }`}
                >
                  <input
                    name="pledge"
                    type={"number"}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="0:00"
                    className="w-full h-full outline-none rounded-full px-4 "
                  />
                  {!valid && (
                    <span className="absolute -bottom-4 left-6 text-red-500 text-xs">
                      Please enter a valid pledge
                    </span>
                  )}
                </div>
              </div>
              <MyButton type="submit">Continue</MyButton>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalPricingCard;
