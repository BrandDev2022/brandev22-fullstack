import React, { ReactNode } from "react";
import styled from "styled-components";

interface PageProps {
  children: ReactNode;
}

const Page: React.FC<PageProps> = ({ children }) => {
  return <PageStyle>{children}</PageStyle>;
};
export default Page;

const PageStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 100%;
`;
