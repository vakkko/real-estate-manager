import { useState } from "react";
import { AgentsProps, AgentsType } from "../../../App.modal";
import { AgentsBox, AgentOption, EmptyValue } from "./agent.styled";

export default function Agent({ agents, selected, setSelected }: AgentsProps) {
  const [showAgent, setShowAgent] = useState<boolean>(false);

  const handleClick = () => {
    setShowAgent(!showAgent);
  };

  const handleAgentClick = (person: AgentsType) => {
    setSelected(person);
    setShowAgent(false);
  };

  return (
    <AgentsBox>
      <h3>აგენტი</h3>
      {(agents || selected) && (
        <EmptyValue $selected={Boolean(selected)} onClick={handleClick}>
          {!selected && <span>აირჩიე</span>}
          <img
            src={selected ? selected.avatar : "./assets/down-arrow.svg"}
            alt="down arrow"
          />
          {selected && (
            <span>
              {selected.name} {selected.surname}
            </span>
          )}
        </EmptyValue>
      )}
      {showAgent &&
        agents?.map((agent) => (
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
    </AgentsBox>
  );
}
