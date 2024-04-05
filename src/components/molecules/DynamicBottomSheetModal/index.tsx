import React, {forwardRef, useMemo} from 'react';
import {
  BottomSheetScrollView,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';
import {BottomSheetMethods} from '@gorhom/bottom-sheet/lib/typescript/types';

import {DynamicBottomSheetModalProps} from './types';
import {BackdropBottomSheet, HandleBottomSheet} from '@components/atoms';
import BottomSheet from '@gorhom/bottom-sheet';

const DynamicBottomSheetModal = forwardRef<
  BottomSheetMethods,
  DynamicBottomSheetModalProps
>((props, ref) => {
  const {
    children,
    maxHeight,
    minHeight,
    height,
    innerStyle,
    enablePanDownToClose = true,
    enableOverDrag = true,
    isScrollable,
  } = props;
  const initialSnapPoints = useMemo(() => ['CONTENT_HEIGHT'], []);
  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(initialSnapPoints);

  const InnerContainer = isScrollable ? BottomSheetScrollView : BottomSheetView;

  return (
    <BottomSheet
      index={-1}
      ref={ref}
      enablePanDownToClose={enablePanDownToClose}
      enableOverDrag={enableOverDrag}
      handleHeight={animatedHandleHeight}
      contentHeight={animatedContentHeight}
      // @ts-ignore
      snapPoints={animatedSnapPoints}
      handleComponent={HandleBottomSheet}
      backdropComponent={BackdropBottomSheet}
      {...props}>
      {isScrollable && (props.StickyHeaderComponent as any)}
      <InnerContainer
        style={[innerStyle, {maxHeight, minHeight, height}]}
        onLayout={handleContentLayout}>
        <>{children}</>
      </InnerContainer>
    </BottomSheet>
  );
});

export default React.memo(DynamicBottomSheetModal);
