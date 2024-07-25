import { Container } from "components/Container/Container";
import { StyledTeachers } from "./Teachers.styled";
import Select from "react-select";
import { reactSelectStyles } from "constants/reactSelectStyled";
import TeachersCard from "components/TeachersCard/TeachersCard";
import Modal from "components/Modal/Modal";
import { useState } from "react";
import teachersData from "../../db.json";

const languageOptions = [
  { value: "English", label: "English" },
  { value: "Ukrainian", label: "Ukrainian" },
  { value: "Russian", label: "Russian" },
  { value: "German", label: "German" },
  { value: "French", label: "French" },
  { value: "Spanish", label: "Spanish" },
  { value: "Italian", label: "Italian" },
  { value: "Portuguese", label: "Portuguese" },
  { value: "Chinese", label: "Chinese" },
  { value: "Japanese", label: "Japanese" },
  { value: "Korean", label: "Korean" },
  { value: "Arabic", label: "Arabic" },
  { value: "Polish", label: "Polish" },
  { value: "Turkish", label: "Turkish" },
  { value: "Dutch", label: "Dutch" },
  { value: "Swedish", label: "Swedish" },
  { value: "Norwegian", label: "Norwegian" },
  { value: "Danish", label: "Danish" },
  { value: "Finnish", label: "Finnish" },
  { value: "Greek", label: "Greek" },
];

const languageLevelOptions = [
  { value: "#A1 Beginner", label: "#A1 Beginner" },
  { value: "#A2 Elementary", label: "#A2 Elementary" },
  { value: "#B1 Pre-Intermediate", label: "#B1 Pre-Intermediate" },
  { value: "#B2 Intermediate", label: "#B2 Intermediate" },
  { value: "#C1 Upper-Intermediate", label: "#C1 Upper-Intermediate" },
  { value: "#C2 Advanced", label: "#C2 Advanced" },
  { value: "#Proficient", label: "#Proficient" },
];
const priceOptions = [
  { value: "30", label: "$30" },
  { value: "35", label: "$35" },
  { value: "40", label: "$40" },
  { value: "45", label: "$45" },
  { value: "50", label: "$50" },
  { value: "55", label: "$55" },
  { value: "60", label: "$60" },
  { value: "65", label: "$65" },
  { value: "70", label: "$70" },
  { value: "75", label: "$75" },
  { value: "80", label: "$80" },
  { value: "85", label: "$85" },
  { value: "90", label: "$90" },
  { value: "95", label: "$95" },
  { value: "100", label: "$100" },
];

const Teachers = () => {
  const [openModal, setOpenModal] = useState(false);
  const onOpenModal = () => {
    setOpenModal(true);
  };
  const onCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <StyledTeachers>
      <section className="sectionFilters">
        <Container>
          <div className="labelsWrapper">
            <label className="label">
              <span className="labelText">Languages</span>

              <Select
                className="select-launuage"
                defaultValue={languageOptions[0]}
                //   onChange={setCarBrand}
                options={languageOptions}
                styles={reactSelectStyles}
              />
            </label>
            <label className="label">
              <span className="labelText">Level of knowledge</span>
              <Select
                className="select-brand"
                defaultValue={languageLevelOptions[0]}
                //   onChange={setCarBrand}
                options={languageLevelOptions}
                styles={reactSelectStyles}
              />
            </label>
            <label className="label">
              <span className="labelText">Price</span>
              <Select
                className="select-brand"
                defaultValue={priceOptions[0]}
                //   onChange={setCarBrand}
                options={priceOptions}
                styles={reactSelectStyles}
              />
            </label>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <div className="cardsWrapper">
            {teachersData.map((data) => (
              <TeachersCard
                key={data.avatar_url}
                name={data.name}
                surname={data.surname}
                languages={data.languages}
                levels={data.levels}
                rating={data.rating}
                reviews={data.reviews}
                price_per_hour={data.price_per_hour}
                lessons_done={data.lessons_done}
                avatar_url={data.avatar_url}
                conditions={data.conditions}
                experience={data.experience}
                lesson_info={data.lesson_info}
              />
            ))}
          </div>
        </Container>
      </section>
      {openModal && (
        <Modal
          closeModal={onCloseModal}
          title={"Book trial lesson"}
          text={
            "Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs."
          }
        />
      )}
      <button onClick={onOpenModal}>Open Modal</button>
    </StyledTeachers>
  );
};

export default Teachers;
