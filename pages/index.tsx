import type { NextPage } from "next";
import { useState } from "react";
import DescCard from "../src/components/DescCard";
import Header from "../src/components/Header";
import Modal from "../src/components/Modal";
import MyButton from "../src/components/MyButton";
import ProjectCard from "../src/components/ProjectCard";
import StatsCard from "../src/components/StatsCard";
import SuccessModal from "../src/components/SuccessModal";

const Home: NextPage = () => {
  const [bookMarked, setBookMarked] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState(0);
  const [totalBacked, setTotalBacked] = useState(37580);
  const [totalBackers, setTotalBackers] = useState(5007);
  return (
    <>
      <div className="">
        <Header />
        {/* project section */}
        <section className="flex space-y-8 flex-col justify-center items-center bg-offWhite pb-16 ">
          <ProjectCard
            bookMarked={bookMarked}
            setBookMarked={setBookMarked}
            setModalOpen={setModalOpen}
            setSuccessModalOpen={setSuccessModalOpen}
            successModalOpen={successModalOpen}
            setSelectedRadio={setSelectedRadio}
            modalOpen={modalOpen}
            selectedRadio={selectedRadio}
          />
          <StatsCard totalBacked={totalBacked} totalBackers={totalBackers} />
          <DescCard
            setSelectedRadio={setSelectedRadio}
            setModalOpen={setModalOpen}
            modalOpen={modalOpen}
          />
          <SuccessModal show={successModalOpen} onClose={setSuccessModalOpen}>
            <div className="flex flex-col justify-center items center p-4 space-y-4">
              <svg
                className="block self-center"
                width="64"
                height="64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <circle fill="#3CB3AB" cx="32" cy="32" r="32" />
                  <path
                    stroke="#FFF"
                    strokeWidth="5"
                    d="M20 31.86L28.093 40 44 24"
                  />
                </g>
              </svg>
              <h1 className="text-xl font font-extrabold text-center">
                Thanks for your support!
              </h1>
              <p className="text-Darkgray text-center">
                Your pledge brings us one step closer to sharing Mastercraft
                Bamboo Monitor Riser worldwide. You will get an email once our
                campaign is completed.
              </p>
              <MyButton onClick={() => setSuccessModalOpen(false)}>
                Got it
              </MyButton>
            </div>
          </SuccessModal>
        </section>
      </div>
    </>
  );
};

export default Home;
