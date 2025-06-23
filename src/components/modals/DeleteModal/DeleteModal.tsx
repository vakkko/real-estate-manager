import { useNavigate } from "react-router";
import { DeleteModalProps } from "../../../App.modal";
import { realEstate, token } from "../../../constants/apiConstant";
import Button from "../../Button/Button";
import { DeleteCont } from "./deleteModal.styled";

export default function DeleteModal({ handleClose, id }: DeleteModalProps) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const response = await fetch(`${realEstate}/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        handleClose();
        navigate("/");
      } else {
        console.error("Failed to delete");
      }
    } catch (err) {
      console.error("Error deleting:", err);
    }
  };

  return (
    <DeleteCont>
      <button onClick={handleClose}>
        <img src="./assets/x.svg" alt="x icon" />
      </button>
      <div>
        <h2>გსურთ წაშალოთ ლისტინგი</h2>
        <div>
          <Button handleClick={handleClose} text="გაუქმება" />
          <button onClick={handleDelete}>დადასტურება</button>
        </div>
      </div>
    </DeleteCont>
  );
}
