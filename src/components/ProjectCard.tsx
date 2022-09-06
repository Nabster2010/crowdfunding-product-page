import MyButton from "./MyButton";
import Modal from "./Modal";
import ModalPricingCard from "./ModalPricingCard";
import { modalCardsData } from "../data";

interface ProjectCardProps {
  setModalOpen: (value: boolean) => void;
  setSelectedRadio: (value: number) => void;
  setBookMarked: (value: boolean) => void;
  setSuccessModalOpen: (value: boolean) => void;
  modalOpen: boolean;
  successModalOpen: boolean;
  selectedRadio: number;
  bookMarked: boolean;
}

const ProjectCard = ({
  setModalOpen,
  setSuccessModalOpen,
  setSelectedRadio,
  setBookMarked,
  bookMarked,
  modalOpen,
  successModalOpen,
  selectedRadio,
}: ProjectCardProps) => {
  return (
    <>
      <div className="relative bg-white  rounded-lg text-center p-10 w-4/5 lg:w-3/5 -mt-24 shadow-md ">
        <svg
          className="absolute -top-7 left-1/2 transform -translate-x-1/2"
          width="56"
          height="56"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <circle fill="#000" cx="28" cy="28" r="28" />
            <g fillRule="nonzero">
              <path
                d="M15.565 28.565a1.93 1.93 0 012.606-.113l.122.113 10.142 10.142a1.93 1.93 0 01-2.606 2.84l-.122-.112-10.142-10.142a1.93 1.93 0 010-2.728z"
                fill="#444"
              />
              <path
                d="M36.19 17.48c1.006-.996 2.706-.34 2.805 1.026l.005.126v10.736c0 .9-.737 1.629-1.646 1.629a1.64 1.64 0 01-1.642-1.507l-.005-.122v-6.805l-8.043 7.957c-1.006.996-2.707.34-2.806-1.026l-.004-.126v-6.805L16.81 30.52a1.66 1.66 0 01-2.224.095l-.105-.095a1.616 1.616 0 01-.096-2.2l.096-.103L25.336 17.48c1.006-.996 2.707-.34 2.806 1.026l.004.126v6.804l8.043-7.956z"
                fill="#FFF"
              />
            </g>
          </g>
        </svg>
        <h1 className="text-2xl font-bold tracking-wider">
          Mastercraft Bamboo Monitor Riser
        </h1>
        <p className="mt-6 text-Darkgray ">
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <div className="flex justify-between items-center mt-6">
          <MyButton onClick={() => setModalOpen(true)}>
            Back this project
          </MyButton>
          <button
            onClick={() => setBookMarked(!bookMarked)}
            className="flex md:w-48 group  gap-2 items-center text-Darkgray bg-gray-200 hover:opacity-80  font-medium rounded-full  transition "
          >
            <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <circle
                  className={`  ${bookMarked && "fill-Moderatecyan"}`}
                  fill="#2F2F2F"
                  cx="28"
                  cy="28"
                  r="28"
                />
                <path fill="#fff" d="M23 19v18l5-5.058L33 37V19z" />
              </g>
            </svg>
            <span
              className={`hidden md:block pr-6 text-left  ${
                bookMarked && "text-Moderatecyan"
              }`}
            >
              {bookMarked ? "Bookmarked" : "Bookmark"}
            </span>
          </button>
        </div>
      </div>

      <Modal
        onClose={() => setModalOpen(false)}
        show={modalOpen}
        title="Back this project"
      >
        <div>
          <h3 className="text-Darkgray mt-4">
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </h3>
          {modalCardsData.map((item) => (
            <ModalPricingCard
              key={item.id}
              title={item.title}
              desc={item.desc}
              stock={item.stock}
              subtitle={item.subtitle}
              inputValue={item.id}
              price={item.price}
              selected={selectedRadio === item.id}
              setSelected={setSelectedRadio}
              setSuccessModalOpen={setSuccessModalOpen}
              successModalOpen={successModalOpen}
              setModalOpen={setModalOpen}
            />
          ))}
        </div>
      </Modal>
    </>
  );
};

export default ProjectCard;
