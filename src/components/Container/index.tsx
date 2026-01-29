import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { cn } from 'tailwind-variants';
import HeaderScreenStack from '../HeaderScreenStack';
import HeaderScreenDrawer from '../HeaderScreenDrawer';

interface ContainerProps {
  children: React.ReactNode;
  backgroundColor?: string;
  removedPaddingX?: boolean;
  typeHeader?: 'Drawer' | 'Stack';
  showHeader?: boolean;
  titleHeader?: string;
  childrenModal?: React.ReactNode;
  showModal?: boolean;
  onCloseModal?: () => void;
}

export default function Container({
  children,
  backgroundColor = 'bg-gray-100',
  removedPaddingX = false,
  showHeader = true,
  typeHeader = 'Drawer',
  titleHeader,
  childrenModal,
  showModal,
  onCloseModal,
}: ContainerProps) {
  return (
    <View className="flex-1">
      {showHeader &&
        (typeHeader === 'Stack' ? (
          <HeaderScreenStack title={titleHeader} />
        ) : (
          <HeaderScreenDrawer title={titleHeader} />
        ))}
      <View
        className={cn(
          'flex-1',
          backgroundColor,
          { 'px-4': !removedPaddingX },
          'pb-safe',
          { 'pt-safe': !showHeader },
        )}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}
          enabled
        >
          {children}
        </KeyboardAvoidingView>
      </View>
      {showModal !== undefined && (
        <Modal
          visible={showModal}
          animationType="fade"
          transparent={true}
          onRequestClose={onCloseModal}
          statusBarTranslucent
        >
          <View className={'flex-1 bg-black/50'}>{childrenModal}</View>
        </Modal>
      )}
    </View>
  );
}
