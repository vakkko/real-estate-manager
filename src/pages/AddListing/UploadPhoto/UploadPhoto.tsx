import { CardTitle } from "../Description/description.styled";
import { UploadIcon } from "./uploadPhoto.styled";

export default function UploadPhoto() {
  return (
    <div>
      <CardTitle>ატვირთეთ ფოტო *</CardTitle>
      <UploadIcon>
        <button>
          <img src="./assets/plus-circle.svg" alt="plus circle" />
          <input type="file" aria-label="upload photo" />
        </button>
      </UploadIcon>
    </div>
  );
}
