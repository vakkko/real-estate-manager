import { useState } from "react";
import { CardTitle } from "../Description/description.styled";
import {
  PhotoContainer,
  UploadIcon,
  UploadedContainer,
} from "./uploadPhoto.styled";

export default function UploadPhoto({ gridItem }: { gridItem?: boolean }) {
  const [file, setFile] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) setFile(URL.createObjectURL(selectedFile));
  };

  const handleClick = () => {
    setFile("");
  };

  return (
    <PhotoContainer $gridItem={gridItem}>
      <CardTitle>ატვირთეთ ფოტო *</CardTitle>
      <UploadIcon>
        {!file ? (
          <button>
            <img src="./assets/plus-circle.svg" alt="plus circle" />
            <input
              onChange={handleChange}
              type="file"
              aria-label="upload photo"
            />
          </button>
        ) : (
          <UploadedContainer>
            <img src={file} alt="listing" />
            <button onClick={handleClick}>
              <img src="./assets/delete-icon.svg" alt="delete-icon" />
            </button>
          </UploadedContainer>
        )}
      </UploadIcon>
    </PhotoContainer>
  );
}
