import { useState } from "react";
import { AgentsProps, AgentsType } from "../../../App.modal";
import { AgentsBox, AgentOption, EmptyValue } from "./agent.styled";
import Button from "../../../components/Button/Button";
import { ButtonsDiv } from "./agent.styled";
import { Link } from "react-router";
import { createPortal } from "react-dom";
import AgentModal from "../../../components/modals/AgentModal/AgentModal";

export default function Agent({
  agents,
  selected,
  setSelected,
  handleSubmit,
  setRender,
}: AgentsProps) {
  const [showAgent, setShowAgent] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleClick = () => {
    setShowAgent(!showAgent);
  };

  const handleAgentClick = (person: AgentsType) => {
    setSelected(person);
    setShowAgent(false);
  };

  const handleAddAgent = () => {
    setShowModal(true);
  };

  const handleCloseClick = () => {
    setShowModal(false);
    setRender((prev) => prev + 1);
  };

  const root = document.getElementById("root");

  if (showModal) {
    if (root) {
      root.classList.add("active");
    }
  } else {
    root?.classList.remove("active");
  }

  return (
    <AgentsBox>
      <h3>აგენტი</h3>
      {(agents || selected) && (
        <EmptyValue $selected={Boolean(selected)} onClick={handleClick}>
          {!selected && <span>აირჩიე</span>}
          {!selected ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 10 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.91247 0.337847C1.68466 0.110041 1.31532 0.110041 1.08751 0.337847C0.859705 0.565652 0.859705 0.934999 1.08751 1.1628L4.58751 4.6628C4.81532 4.89061 5.18466 4.89061 5.41247 4.6628L8.91247 1.1628C9.14028 0.934999 9.14028 0.565652 8.91247 0.337847C8.68466 0.110041 8.31532 0.110041 8.08751 0.337847L4.99999 3.42537L1.91247 0.337847Z"
                fill="#021526"
              />
            </svg>
          ) : (
            <img src={selected.avatar} alt="avatar" />
          )}
          {selected && (
            <span>
              {selected.name} {selected.surname}
            </span>
          )}
        </EmptyValue>
      )}
      {showAgent && (
        <>
          <AgentOption onClick={handleAddAgent} $showAgent={showAgent}>
            <img src="./assets/plus-circle.svg" alt="plus circle" />
            <span>დაამატე აგენტი</span>
          </AgentOption>
          {agents?.map((agent) => (
            <AgentOption
              $showAgent={showAgent}
              onClick={() => handleAgentClick(agent)}
              key={agent.id}
            >
              <img src={agent.avatar} alt="agent" />
              <span>
                {agent.name} {agent.surname}
              </span>
            </AgentOption>
          ))}
        </>
      )}

      <ButtonsDiv>
        <Link to={"/"}>
          <Button text="გაუქმება" />
        </Link>
        <Button handleClick={handleSubmit} text="დაამატე ლისტინგი" background />
      </ButtonsDiv>
      {showModal &&
        createPortal(
          <AgentModal
            showModal={showModal}
            handleCloseClick={handleCloseClick}
          />,
          document.body
        )}
    </AgentsBox>
  );
}
