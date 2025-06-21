import { agentProps } from "../../../../../App.modal";
import { AgentContacts, AgentContainer, AgentInfo } from "./agent.styled";

export default function Agent({
  avatar,
  name,
  surname,
  phone,
  email,
}: agentProps) {
  return (
    <AgentContainer>
      <AgentInfo>
        <img src={avatar} alt="avatar " />
        <div>
          <p>
            {name} {surname}
          </p>
          <span>აგენტი</span>
        </div>
      </AgentInfo>
      <AgentContacts>
        <div>
          <img src="./assets/mail.svg" alt="maik" />
          <span>{email}</span>
        </div>
        <div>
          <img src="./assets/phone.svg" alt="phone" />
          <span>{phone}</span>
        </div>
      </AgentContacts>
    </AgentContainer>
  );
}
