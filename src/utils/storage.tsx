import {MMKV} from 'react-native-mmkv';
import { Storage } from 'redux-persist'


const storage = new MMKV({
  encryptionKey: '4e8cff8b3a814bcd0479d51e9cf45dfd9afbbe35',
  id: 'storage-boilerplate', // generate guid and hashed into sha1 hash
});

const storageUtils: Storage = {
  getItem: (key) => {
    const value = storage.getString(key)
    return Promise.resolve(value)
  },
  removeItem: (key) => {
    storage.delete(key)
    return Promise.resolve()
  },
  setItem: (key, value) => {
    storage.set(key, value)
    return Promise.resolve(true)
  },
};

export default storageUtils;
