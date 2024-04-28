import styled from 'styled-components';

export const TransactionTable = styled.table`
  margin-left: auto;
  margin-right: auto;
  border-collapse: collapse;

  color: grey;

  box-shadow: ${p => p.theme.shadows.default};

  border-radius: ${p => p.theme.radii.borderRadius};
`;

export const TableHeader = styled.thead`
  color: ${p => p.theme.colors.inverseText};
  background-color: ${p => p.theme.colors.accent};
`;

export const TableHeaderItem = styled.th`
  width: 200px;
  padding: ${p => p.theme.space[3]};

  border-right: 1px solid white;

  :first-child {
    border-top-left-radius: ${p => p.theme.radii.borderRadius};
  }

  :last-child {
    border-top-right-radius: ${p => p.theme.radii.borderRadius};
    border-right: none;
  }
`;

export const TableRow = styled.tr`
  :nth-child(2n) {
    background-color: ${p => p.theme.colors.secondaryBgd};
  }
`;
