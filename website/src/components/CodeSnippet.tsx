import styled from "styled-components";

import copyAsset from "../assets/copy.svg";
import tickAsset from "../assets/tick.png";
import { useState } from "react";

const StyledCodeSnippet = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 1.2rem;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  gap: 3rem;
`;

const Code = styled.div`
  color: var(--main);
  font-size: 1.7rem;
  font-weight: 500;
`;

const CopyButton = styled.button`
  cursor: pointer;
`;

const CopyIcon = styled.img`
  width: 1.6rem;
`;

const CodeSnippet = ({ code }: { code: string }): JSX.Element => {
  const [success, setSuccess] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <StyledCodeSnippet>
      <Code>{code}</Code>
      <CopyButton onClick={copyCode}>
        <CopyIcon src={success ? tickAsset : copyAsset} alt="Copy code" />
      </CopyButton>
    </StyledCodeSnippet>
  );
};

export default CodeSnippet;
