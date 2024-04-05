import {
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import {HookProps} from '../types';

const useChangeTypeBottomSheet = ({params, ref}: HookProps) => {
  const {onPress} = params;
  const bottomSheetRef = useRef<BottomSheet | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    isOpen && bottomSheetRef.current?.snapToIndex(0);
  }, [isOpen]);

  const handlePressItem = useCallback(
    (item: string) => {
      onPress(item);
      bottomSheetRef?.current?.close();
    },
    [onPress],
  );

  const close = useCallback(() => {
    bottomSheetRef?.current?.close();
  }, []);

  const onDismiss = () => {
    setIsOpen(false);
  };

  useImperativeHandle(
    ref,
    () => ({
      present: () => {
        setIsOpen(true);
      },
      dismiss: close,
      isOpen: () => isOpen,
    }),
    [isOpen, setIsOpen, close],
  );

  return {
    isOpen,
    bottomSheetRef,
    handlePressItem,
    onDismiss,
  };
};

export default useChangeTypeBottomSheet;
