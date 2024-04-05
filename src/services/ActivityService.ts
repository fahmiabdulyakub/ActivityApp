import {IActivity} from '@types';
import axios from 'axios';
import Config from 'react-native-config';

export const getActivity = (type?: string) => {
  return new Promise<IActivity>(resolve => {
    axios
      .get(`${Config.BASE_URL}api/activity${!type && '/'}`, {
        params: type && {type},
      })
      .then(result => {
        resolve(result.data);
      })
      .catch(error => {
        console.log(error);
      });
  });
};
