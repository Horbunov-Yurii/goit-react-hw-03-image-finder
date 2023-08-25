import { BackDrop } from "./Overlay.styled";


export const OverLay = ({ children, onClick }) => {
  return <BackDrop onClick={onClick}> {children} </BackDrop>;
};
