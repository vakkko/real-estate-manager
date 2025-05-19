import { UploadPhotoProps } from "../../../App.modal";
import { CardTitle } from "../Description/description.styled";
import {
  PhotoContainer,
  UploadIcon,
  UploadedContainer,
} from "./uploadPhoto.styled";

export default function UploadPhoto({
  gridItem,
  preview,
  handleFileChange,
  handleRemove,
}: UploadPhotoProps) {
  return (
    <PhotoContainer $gridItem={gridItem}>
      <CardTitle>ატვირთეთ ფოტო *</CardTitle>
      <UploadIcon>
        {!preview ? (
          <button>
            <img src="./assets/plus-circle.svg" alt="plus circle" />
            <input
              onChange={handleFileChange}
              type="file"
              aria-label="upload photo"
            />
          </button>
        ) : (
          <UploadedContainer>
            <img src={preview} alt="listing" />
            <button onClick={handleRemove}>
              <img src="./assets/delete-icon.svg" alt="delete-icon" />
            </button>
          </UploadedContainer>
        )}
      </UploadIcon>
    </PhotoContainer>
  );
}
