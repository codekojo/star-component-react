import { useState } from "react";
import starImage from "./assets/Five-pointed_star.svg";
import starImageFull from "./assets/star-full-svgrepo-com.svg";

const starStyles = {
  display: "flex",
  gap: "20px",
  alignItems: "center",
  trasniton: "all",
};
const App = () => {
  const [starRatingCount, setStarRatingCount] = useState(0);
  const [hoverRatingCount, setHoverRatingCount] = useState(0);
  return (
    <div style={starStyles}>
      <div style={starStyles}>
        {Array.from({ length: 10 }, (_, i) => (
          <img
            // src={hoverRatingCount > i ? starImageFull : starImage}
            src={
              hoverRatingCount > i
                ? starImageFull
                : starRatingCount > i
                ? starImageFull
                : starImage
            }
            alt={"5 star pointer"}
            style={{
              width: "40px",
              height: "40px",
              cursor: "pointer",
              transition: "all",
            }}
            onClick={() => setStarRatingCount(i + 1)}
            onMouseEnter={() => setHoverRatingCount(i + 1)}
            onMouseLeave={() => setHoverRatingCount(0)}
          />
        ))}
      </div>

      {hoverRatingCount ? hoverRatingCount : starRatingCount || ""}
    </div>
  );
};

//First Create the star of 5.

export default App;
