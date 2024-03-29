import styled from "styled-components";
import { XCircle, Heart, ShareNetwork as Share } from "phosphor-react";

export const Container = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 10px auto;
  display: flex;

  justify-content: ${(props) => (props.$cnt01 ? "space-between" : "")};
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    justify-content: ${(props) => (props.$cnt01 ? "space-around" : "")};
    margin-top: -5px;
  }
`;

export const DivGallery = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  position: relative;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const GalleryMainImage = styled.img.attrs((props) => ({
  src: props.$source,
}))`
  width: 49%;
  border-radius: 16px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const GalleryImage = styled.img.attrs((props) => ({
  src: props.$source,
}))`
  width: 48%;
  border-radius: 16px;
`;

export const MorePhotos = styled.p`
  position: absolute;
  top: 85%;
  right: 5%;
  cursor: pointer;
  font-size: 1.1rem;

  transition: all 0.5s;

  &:hover {
    background-color: ${(props) => props.theme["purple1"]};
    padding: 5px 10px;
    border-radius: 8px;
  }
`;

export const Modal = styled.div`
  width: 100%;
  height: 100vh;

  background-color: #1d1c1cf1;
  position: absolute;
  top: 0;

  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  max-width: 750px;
  height: 500px;
`;

export const CloseModal = styled(XCircle).attrs({
  size: 35,
  color: "#1a1919df",
})`
  position: relative;
  top: -500px;
  right: -355px;
  z-index: 100;

  transition: all 0.5s;

  &:hover {
    cursor: pointer;
  }
`;


export const DivGalleryMobile = styled.section`
    display: none;

    @media (max-width: 768px) {
        display: contents;
  }
`;

export const DivLikeAndShare = styled.div`
  width: 100%;
  padding: 0 25px;

  display: flex;
  justify-content: start;
  gap: 20px;
`;

export const LikeIcon = styled(Heart).attrs((props) => ({
  size: 30,
  weight: props.$like ? "fill" : "bold", 
}))`
  cursor: pointer;
  color: ${(props) => props.$like ? props.theme["error-light"] : props.theme["gray300"]};

  &:hover{
    color: ${(props) => props.theme["error-light"]};
  }
`;

export const ShareIcon = styled(Share).attrs({
  size: 30,
})`
  cursor: pointer;
  color: ${(props) => props.theme["gray300"]};
  transition: all .5s;
  
  &:hover{
    color: ${(props) => props.theme["purple1"]};
  }
`;