import styled from 'styled-components';

export const StatList = styled.ul`
  margin-bottom: ${p => p.theme.space[5]};
`;

export const StatListItem = styled.li`
  font-size: ${p => p.theme.fontSizes.lg};
  font-weight: ${p => p.theme.fontWeights.bolder};
  margin-bottom: ${p => p.theme.space[3]};

  :last-child {
    margin-bottom: 0;
  }
`;
