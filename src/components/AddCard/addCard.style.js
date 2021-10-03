import styled from "styled-components";

export const CardOuterWrapper = styled.div`
  display: flex;
  flex-direction:row;
  flex-wrap: wrap;
`;

export const CardWrapper = styled.div`
  padding: ${(props) => (props.listPadding ? "32px 10px 32px" : "0 0 32px")};
  margin:${(props) => (props.listMargin ? "10px" : "40px auto 0")};
  overflow: hidden;
    flex-direction: ${(props) => (props.directionForm ? "column" : "row")};
    display: flex;
    width: 100%;
    max-width: 300px;
    font-family: Quicksand,arial,sans-serif;
    box-shadow: 0 0 20px rgb(0 0 0 / 5%), 0 0px 40px rgb(0 0 0 / 8%);
    border-radius: 5px;
    :hover {
    box-shadow: #333 0px 8px 24px;
    transition: all 300ms ease 0s;
    transform: scale(1.01) translateY(-5px);
}
`;

export const CardHeader = styled.header`
  padding-top:32px;
  padding-bottom:32px;
`;

export const CardHeading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

export const CardBody = styled.div`
  padding-right: ${(props) => (props.listPadding ? "0px" : "32px")};
  padding-left: ${(props) => (props.listPadding ? "0px" : "32px")};
`;

export const CardFieldset = styled.fieldset`
      display: ${(props) => (props.displayForm ? "block" : "flex")};;
    position: relative;
    padding: 0;
    margin: 0;
    border: 0;
    width: 100%;

  & + & {
    margin-top: 24px;
  }
`;

export const CardInput = styled.div`
    padding: 10px;
    width:${(props) => (props.listWidth ? "inherit" : "100%")};
  .input {
    padding: 7px 0;
    width: 100%;
    font-family: inherit;
    font-size: 14px;
    border-top: 0;
    border-right: 0;
    border-bottom: 1px solid #ddd;
    border-left: 0;
    transition: border-bottom-color 0.25s ease-in;

    &:focus {
      border-bottom-color: black;
      outline: 0;
    }
  }
`;

export const CardButton = styled.button`
  display: block;
  width: 100%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: black;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;
