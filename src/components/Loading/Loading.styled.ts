import styled, { keyframes } from "styled-components";
import colors from "../style/colors";
import { FULL } from "../style/sizes";

export const LoadingScreen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  position: fixed;
  width: ${FULL};
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99999;
`;

const spin = keyframes`
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
`;

export const LoadingSpinner = styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid ${colors.primary};
  width: 100px;
  height: 100px;
  -webkit-animation: ${spin} 2s linear infinite;
  animation: ${spin} 2s linear infinite;
`;
