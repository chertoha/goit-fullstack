import styled from 'styled-components';

const setMessageType = props => {
  switch (props.type) {
    case 'success':
      return props.theme.colors.success;
    case 'failure':
      return props.theme.colors.failure;

    default:
      return props.theme.colors.secondaryText;
  }
};

export const Message = styled.p`
  font-size: ${p => p.theme.fontSizes.lg};
  color: ${setMessageType};
`;
