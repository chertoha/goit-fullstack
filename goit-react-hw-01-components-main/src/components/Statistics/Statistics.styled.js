import styled from 'styled-components';

export const Title = styled.h2`
  width: 300px;
  margin-left: auto;
  margin-right: auto;

  padding-top: ${p => p.theme.space[4]};
  padding-bottom: ${p => p.theme.space[4]};

  font-size: ${p => p.theme.fontSizes.xl};
  text-align: center;

  background-color: ${p => p.theme.colors.bgd}; ;
`;

export const List = styled.ul`
  width: 300px;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ListItem = styled.li`
  padding: ${p => p.theme.space[3]};

  flex-basis: calc(100%);

  color: ${p => p.theme.colors.inverseText};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${p => p.bgdColor};
`;
