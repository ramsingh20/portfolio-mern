import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.9; }
  100% { transform: scale(1); opacity: 1; }
`;

export const StyledBadge = styled.span`
  display: inline-block;
  background: linear-gradient(90deg, rgba(124,58,237,1) 0%, rgba(6,182,212,1) 100%);
  color: white;
  padding: 0.45rem 1.05rem;
  border-radius: 9999px;
  font-weight: 700;
  font-size: 0.85rem;
  box-shadow: 0 6px 18px rgba(6,182,212,0.12);
  animation: ${pulse} 2.5s ease-in-out infinite;
`;
