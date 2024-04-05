/* eslint-disable react-hooks/exhaustive-deps */
import {getActivity, getActivityType} from '@services/ActivityService';
import {IActivity} from '@types';
import {useCallback, useEffect, useRef, useState} from 'react';
import {ACTIVITY_TYPES} from '@constants/activity';
import {DynamicBottomSheetModalMethods} from '@components/molecules/DynamicBottomSheetModal/types';

const useHome = () => {
  const [suggestedActivity, setSuggestedActivity] = useState<IActivity>();
  const [currentType, setCurrentType] = useState(ACTIVITY_TYPES[0]);
  const changeTypeBSRef = useRef<DynamicBottomSheetModalMethods>(null);

  const fetchActivity = useCallback(
    (data?: string) => {
      const type = data ?? currentType;
      const getData =
        type === ACTIVITY_TYPES[0] ? getActivity : getActivityType;
      getData(type.toLowerCase())
        .then(response => {
          console.log(response);
          setSuggestedActivity(response);
        })
        .catch(error => {
          console.error('Error fetching photos:', error);
        });
    },
    [currentType],
  );

  useEffect(() => {
    fetchActivity();
  }, []);

  const handleChangeType = useCallback(
    (type: string) => {
      setCurrentType(type);
      fetchActivity(type);
    },
    [fetchActivity],
  );

  const handleActivity = useCallback(() => {
    fetchActivity();
  }, [fetchActivity]);

  const onPressType = useCallback(() => {
    changeTypeBSRef.current?.present();
  }, []);

  return {
    suggestedActivity,
    changeTypeBSRef,
    handleChangeType,
    onPressType,
    handleActivity,
  };
};

export default useHome;
