import Pricing from "./Pricing";
import { cardData } from "../../src/data.js";

interface DescCardProps {
  selectedRadio: number;
  modalOpen: boolean;
  setModalOpen: (value: boolean) => void;
  setSelectedRadio: (value: number) => void;
}

const DescCard = ({ setSelectedRadio, setModalOpen, modalOpen }) => {
  return (
    <div className=" bg-white rounded-lg text-center p-10 w-4/5 lg:w-3/5 -mt-24 shadow-md  ">
      <div className="text-left space-y-8">
        <h1 className="text-xl font-bold">About this project</h1>
        <p className="text-Darkgray">
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.
        </p>
        <p className="text-Darkgray">
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, pens, and USB
          sticks to be stored under the stand.
        </p>
      </div>
      {cardData.map((item, i) => (
        <Pricing
          id={item.id}
          key={item.id}
          title={item.title}
          price={item.price}
          qty={item.qty}
          desc={item.desc}
          setSelectedRadio={setSelectedRadio}
          setModalOpen={setModalOpen}
          modalOpen={modalOpen}
        />
      ))}
    </div>
  );
};

export default DescCard;
