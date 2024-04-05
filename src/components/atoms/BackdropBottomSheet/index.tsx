import React, {memo} from 'react';
import {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import {BottomSheetDefaultBackdropProps} from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';

const BackdropBottomSheet = (props: BottomSheetDefaultBackdropProps) => {
  return (
    <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />
  );
};

export default memo(BackdropBottomSheet);
