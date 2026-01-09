import { Insets } from 'react-native';
import styled from 'styled-components/native';

export const ContainerView = styled.View<{
  removedPaddingTop?: boolean;
  backgroundColor?: string;
  inset?: Insets;
}>`
  flex: 1;
  padding-top: ${({ removedPaddingTop, inset }) =>
    `${removedPaddingTop ? 0 : inset?.top || 0}px`};
  padding-bottom: ${({ inset }) => `${inset?.bottom || 0}px`};
  padding-horizontal: 20px;
  background-color: ${({ backgroundColor }) => backgroundColor || '#f0f4ff'};
`;
