import {useMemo} from 'react';
import {
  BottomSheetScrollView,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';

const useDynamicBottomSheetModal = (isScrollable: boolean) => {
  const initialSnapPoints = useMemo(() => ['CONTENT_HEIGHT'], []);

  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(initialSnapPoints);

  const InnerContainer = isScrollable ? BottomSheetScrollView : BottomSheetView;

  return {
    animatedSnapPoints,
    animatedContentHeight,
    animatedHandleHeight,
    InnerContainer,
    handleContentLayout,
  };
};

export default useDynamicBottomSheetModal;
