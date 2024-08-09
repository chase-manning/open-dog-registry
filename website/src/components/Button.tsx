import styled from "styled-components";

const StyledButton = styled.a<{ $primary: boolean }>`
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-size: 1.8rem;
  font-weight: 500;
  min-width: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ $primary }) =>
    $primary ? "var(--primary)" : "var(--secondary)"};
  border: 2px solid
    ${({ $primary }) => ($primary ? "var(--primary)" : "var(--secondary)")};

  @media (max-width: 900px) {
    font-size: 1.6rem;
    padding: 0.8rem 1.6rem;
    min-width: 12rem;
  }
`;

interface Props {
  children: React.ReactNode;
  href: string;
  primary?: boolean;
}

const Button = ({ children, href, primary = false }: Props): JSX.Element => {
  return (
    <StyledButton href={href} $primary={primary} target="_blank">
      {children}
    </StyledButton>
  );
};

export default Button;
