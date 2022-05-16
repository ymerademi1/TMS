import { generateMedia } from "styled-media-query";

const CustomMedia = generateMedia({
  xl: "1200px",
  lg: "992px",
  md: "768px",
  sm: "576px",
  xx: "485px",
  x: "400px",
  xs: "320px"
});

export default CustomMedia;