import { agentProps } from "../../../../../App.modal";

export default function Agent({
  avatar,
  name,
  surname,
  phone,
  email,
}: agentProps) {
  return (
    <div>
      <div>
        <img src={avatar} alt="avatar " />
        <div>
          <span>{name}</span> <span>{surname}</span>
          <span>აგენტი</span>
        </div>
      </div>
      <div>
        <div>
          <img src="./assets/mail.svg" alt="maik" />
          <span>{email}</span>
        </div>
        <div>
          <img src="./assets/phone.svg" alt="phone" />
          <span>{phone}</span>
        </div>
      </div>
    </div>
  );
}
