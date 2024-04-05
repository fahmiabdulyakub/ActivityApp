import {DynamicBottomSheetModalMethods} from '../DynamicBottomSheetModal/types';

export interface HookProps {
  params: Props;
  ref: React.ForwardedRef<DynamicBottomSheetModalMethods>;
}

export interface Props {
  onPress: (item: string) => void;
}
