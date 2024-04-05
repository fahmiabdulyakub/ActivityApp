import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {forwardRef, memo} from 'react';

import {Props} from './types';
import useChangeTypeBottomSheet from './hooks/useChangeTypeBottomSheet';
import {DynamicBottomSheetModalMethods} from '../DynamicBottomSheetModal/types';
import DynamicBottomSheetModal from '../DynamicBottomSheetModal';
import {ACTIVITY_TYPES} from '@constants/activity';
import styles from './styles';

const ChangeTypeBottomSheet = forwardRef<DynamicBottomSheetModalMethods, Props>(
  (props, ref) => {
    const {bottomSheetRef, onDismiss, handlePressItem} =
      useChangeTypeBottomSheet({
        params: props,
        ref,
      });

    const renderItem = (item: string, index: number) => {
      const onPress = () => handlePressItem(item);
      return (
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={onPress}
          key={index}>
          <Text style={styles.text}>{item}</Text>
        </TouchableOpacity>
      );
    };
    return (
      <DynamicBottomSheetModal
        ref={bottomSheetRef}
        isScrollable
        height={300}
        onClose={onDismiss}
        StickyHeaderComponent={
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Change Type</Text>
          </View>
        }>
        <View style={styles.contentContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {ACTIVITY_TYPES.map((item: string, index: number) =>
              renderItem(item, index),
            )}
          </ScrollView>
        </View>
      </DynamicBottomSheetModal>
    );
  },
);

export default memo(ChangeTypeBottomSheet);
