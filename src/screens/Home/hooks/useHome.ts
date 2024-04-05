import {getActivity} from '@services/ActivityService';
import {IActivity} from '@types';
import {useCallback, useEffect, useState} from 'react';
import {ACTIVITY_TYPE} from '@constants/activity';

const useHome = () => {
  const [suggestedActivity, setSuggestedActivity] = useState<IActivity>();
  const [currentType, setCurrentType] = useState(ACTIVITY_TYPE[0]);
  const fetchActivity = useCallback(() => {
    getActivity(currentType === ACTIVITY_TYPE[0] ? undefined : currentType)
      .then(response => {
        setSuggestedActivity(response);
      })
      .catch(error => {
        console.error('Error fetching photos:', error);
      });
  }, [currentType]);

  useEffect(() => {
    fetchActivity();
  }, [fetchActivity]);

  const handleChangeType = useCallback((type: string) => {
    setCurrentType(type);
  }, []);

  return {suggestedActivity, handleChangeType, fetchActivity};
};

export default useHome;
