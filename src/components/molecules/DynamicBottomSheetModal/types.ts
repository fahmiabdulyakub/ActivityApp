import {BottomSheetProps} from '@gorhom/bottom-sheet';
import {ViewStyle} from 'react-native';

export type DynamicBottomSheetModalMethods = {
  present: () => void;
  dismiss: () => void;
  isOpen: () => boolean;
};
export interface DynamicBottomSheetModalProps
  extends Omit<BottomSheetProps, 'snapPoints'> {
  snapPoints?: BottomSheetProps['snapPoints'];
  isScrollable?: boolean;
  maxHeight?: number;
  minHeight?: number;
  height?: number;
  innerStyle?: ViewStyle;
  StickyHeaderComponent?:
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ComponentType<any>
    | null
    | undefined;
}
