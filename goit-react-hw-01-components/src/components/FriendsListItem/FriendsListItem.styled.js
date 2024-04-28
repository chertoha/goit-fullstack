import styled from 'styled-components';

export const FriendName = styled.p`
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.bolder};
`;

export const Status = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${p =>
    p.isOnline ? p.theme.colors.success : p.theme.colors.failure};
`;

export const Avatar = styled.img`
padding: ${p => p.theme.space[3]};
width: 60px;
height 60px;
border-radius: ${p => p.theme.radii.borderRadius};
border: 1px solid grey;
`;
