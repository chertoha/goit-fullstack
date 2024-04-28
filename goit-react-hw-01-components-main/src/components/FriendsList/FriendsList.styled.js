import styled from 'styled-components';

export const List = styled.ul`
  width: 320px;

  margin-left: auto;
  margin-right: auto;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  column-gap: ${p => p.theme.space[5]};

  padding-top: ${p => p.theme.space[2]};
  padding-bottom: ${p => p.theme.space[2]};
  padding-right: ${p => p.theme.space[4]};
  padding-left: ${p => p.theme.space[4]};

  box-shadow: ${p => p.theme.shadows.default};

  margin-bottom: ${p => p.theme.space[4]};

  :last-child {
    margin-bottom: ${p => p.theme.space[0]};
  }
`;
