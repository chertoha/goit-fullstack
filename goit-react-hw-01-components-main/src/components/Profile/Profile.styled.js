import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 200px;
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.14;
  color: ${p => p.theme.colors.text};

  overflow: hidden;

  border-radius: ${p => p.theme.radii.borderRadius};

  box-shadow: ${p => p.theme.shadows.default};
`;

export const Description = styled.div`
  padding: ${p => p.theme.space[4]};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  padding: ${p => p.theme.space[3]};

  border: 1px solid rgb(232, 230, 230);
`;

export const UserName = styled.p`
  font-size: ${p => p.theme.fontSizes.lg};
`;

export const UserTag = styled.p`
  margin-top: ${p => p.theme.space[3]};
  color: ${p => p.theme.colors.secondaryText};
`;

export const UserLocation = styled.p`
  margin-top: ${p => p.theme.space[3]};
  color: ${p => p.theme.colors.secondaryText};
`;

export const StatsList = styled.ul`
  background-color: ${p => p.theme.colors.secondaryBgd};
  display: flex;
  justify-content: center;

  border-top: 1px solid rgb(184, 183, 183);
`;

export const StatsListItem = styled.li`
  padding: ${p => p.theme.space[3]};
  display: flex;
  flex-direction: column;
  align-items: center;

  flex-basis: calc(100% / 3);

  border-left: 1px solid rgb(184, 183, 183);

  :first-child {
    border-left: none;
  }
`;

export const StatLabel = styled.span`
  color: ${p => p.theme.colors.secondaryText};
`;

export const StatQuantity = styled.span`
  margin-top: ${p => p.theme.space[2]};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
