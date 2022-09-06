import MyButton from "./MyButton";

interface PricingProps {
  id: number;
  title: string;
  price: number;
  desc: string;
  qty: number;
  modalOpen: boolean;
  setSelectedRadio: (value: number) => void;
  setModalOpen: (value: boolean) => void;
}

const Pricing = ({
  id,
  title,
  price,
  desc,
  qty,
  setSelectedRadio,
  setModalOpen,
  modalOpen,
}) => {
  const handleClick = () => {
    setSelectedRadio(id);
    setModalOpen(true);
  };
  return (
    <div className="border mt-8 px-6 py-8 rounded-lg space-y-8">
      <div className="flex flex-col md:flex-row justify-center  md:justify-between md:items-center items-start">
        <h1 className="text-lg font-bold">{title}</h1>
        <h2 className="text-md text-Moderatecyan font-medium">
          Pledge ${price} or more
        </h2>
      </div>
      <p className="text-left text-Darkgray">{desc}</p>
      <div className="flex  flex-col md:flex-row space-y-6 items-start justify-center md:justify-between md:items-center">
        <h1 className="text-3xl font-extrabold">
          {qty}
          {"  "}
          <span className="text-base align-baseline font-normal text-Darkgray">
            left
          </span>
        </h1>
        <MyButton onClick={handleClick}>select reward</MyButton>
      </div>
    </div>
  );
};

export default Pricing;
