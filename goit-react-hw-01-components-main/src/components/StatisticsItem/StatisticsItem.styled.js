import styled from 'styled-components';

export const StatLabel = styled.span`
  font-size: ${p => p.theme.fontSizes.sm};
`;

export const StatPercentage = styled.span`
  margin-top: ${p => p.theme.space[2]};
  font-weight: ${p => p.theme.fontWeights.bolder};
`;
