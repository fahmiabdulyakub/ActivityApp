import {IActivity} from '@types';
import axios from 'axios';
import Config from 'react-native-config';

export const getActivity = () => {
  return new Promise<IActivity>(resolve => {
    axios
      .get(`${Config.BASE_URL}api/activity/`)
      .then(result => {
        resolve(result.data);
      })
      .catch(error => {
        console.log(error);
      });
  });
};

export const getActivityType = (type: string) => {
  return new Promise<IActivity>(resolve => {
    axios
      .get(`${Config.BASE_URL}api/activity`, {
        params: {type},
      })
      .then(result => {
        resolve(result.data);
      })
      .catch(error => {
        console.log(error);
      });
  });
};
