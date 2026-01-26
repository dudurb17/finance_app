import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import styled from 'styled-components/native';
import { tv } from 'tailwind-variants';

// export const ContainerView = styled.View<{
//   removedPaddingTop?: boolean;
//   backgroundColor?: string;
//   inset?: Insets;
// }>`
//   flex: 1;
//   padding-top: ${({ removedPaddingTop, inset }) =>
//     `${removedPaddingTop ? 0 : inset?.top || 0}px`};
//   padding-bottom: ${({ inset }) => `${inset?.bottom || 0}px`};
//   padding-horizontal: 20px;
//   background-color: ${({ backgroundColor }) => backgroundColor || '#f0f4ff'};
// `;

export const container = () => {
  // const inset = useSafeAreaInsets();
  return tv({
  // base: `flex-1 bg-gray-100 p-top-${inset.top} p-bottom-${inset.bottom} p-horizontal-20`,
  variants: {
    removedPaddingTop: {
      true: 'pt-0',
    },
    backgroundColor: {
      true: 'bg-gray-100',
      },
    },
  });
};
