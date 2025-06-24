import { FlatDetails } from "../../../App.modal";
import Flat from "../../HomePage/Flat/Flat";
import { Carousel, RelatedCont } from "./relatedProperty.styled";
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

export default function RelatedProperty({
  relatedData,
}: {
  relatedData: FlatDetails[] | undefined;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { events } = useDraggable(ref as React.MutableRefObject<HTMLElement>);

  const handleScroll: (direction: "left" | "right") => void = (
    direction: "left" | "right"
  ) => {
    ref.current?.scrollTo({
      left: ref.current.scrollLeft + (direction === "right" ? 200 : -200),
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <RelatedCont>
      {relatedData?.length !== 0 ? (
        <>
          <h1>ბინები მსგავს ლოკაციაზე</h1>
          {relatedData && relatedData?.length > 4 && (
            <button onClick={() => handleScroll("left")}>
              <img src="./assets/left-arrow.svg" alt="left arrow" />
            </button>
          )}
          <Carousel
            scrolable={relatedData && relatedData?.length > 4}
            ref={ref}
            {...events}
          >
            <Flat related flatData={relatedData} />
          </Carousel>
          {relatedData && relatedData?.length > 4 && (
            <button onClick={() => handleScroll("right")}>
              <img src="./assets/right-arrow.svg" alt="right arrow" />
            </button>
          )}
        </>
      ) : (
        <h1>ბინები მსგავს ლოკაციაზე არ მოიძებნა</h1>
      )}
    </RelatedCont>
  );
}
