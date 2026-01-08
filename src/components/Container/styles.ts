import styled from 'styled-components/native';

export const ContainerStyled = styled.View<{ backgroundColor?: string }>`
  flex: 1;
  background-color: ${({ backgroundColor }) => backgroundColor || '#f0f4ff'};
`;
