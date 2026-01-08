import React, { createContext, useContext, useRef, ReactNode } from 'react';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMemo } from 'react';
import { Keyboard } from 'react-native';

interface BottomSheetContextType {
  open: (content: ReactNode, snapPoints?: string[]) => void;
  close: () => void;
  expand: () => void;
  collapse: () => void;
}

const BottomSheetContext = createContext<BottomSheetContextType | null>(null);

export const useBottomSheet = () => {
  const context = useContext(BottomSheetContext);
  if (!context) {
    throw new Error('useBottomSheet must be used within BottomSheetProvider');
  }
  return context;
};

interface BottomSheetProviderProps {
  children: ReactNode;
}

export function BottomSheetProvider({ children }: BottomSheetProviderProps) {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [content, setContent] = React.useState<ReactNode>(null);
  const [snapPoints, setSnapPoints] = React.useState<string[]>(['25%', '50%']);
  const insets = useSafeAreaInsets();

  const defaultSnapPoints = useMemo(() => ['25%', '50%'], []);

  const renderBackdrop = useMemo(
    () => (props: any) => {
      return (
        <BottomSheetBackdrop
          {...props}
          opacity={0.5}
          appearsOnIndex={0}
          disappearsOnIndex={-1}
          style={[props.style]}
        />
      );
    },
    [insets.top],
  );

  const open = (newContent: ReactNode, customSnapPoints?: string[]) => {
    Keyboard.dismiss();
    setContent(newContent);

    setSnapPoints(customSnapPoints || defaultSnapPoints);
    bottomSheetRef.current?.expand();
  };

  const close = () => {
    bottomSheetRef.current?.close();
  };

  const expand = () => {
    bottomSheetRef.current?.expand();
  };

  const collapse = () => {
    bottomSheetRef.current?.collapse();
  };

  const value = useMemo(
    () => ({
      open,
      close,
      expand,
      collapse,
    }),
    [],
  );

  return (
    <BottomSheetContext.Provider value={value}>
      {children}
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        backdropComponent={renderBackdrop}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        onClose={() => setContent(null)}
      >
        <BottomSheetView>{content}</BottomSheetView>
      </BottomSheet>
    </BottomSheetContext.Provider>
  );
}
