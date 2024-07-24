import { Storage } from 'redux-persist'
import {MMKV} from 'react-native-mmkv';


const storage = new MMKV({
  id: 'storage-boilerplate',
  encryptionKey: '4e8cff8b3a814bcd0479d51e9cf45dfd9afbbe35', // generate guid and hashed into sha1 hash
});

const storageUtils: Storage = {
  setItem: (key, value) => {
    storage.set(key, value)
    return Promise.resolve(true)
  },
  getItem: (key) => {
    const value = storage.getString(key)
    return Promise.resolve(value)
  },
  removeItem: (key) => {
    storage.delete(key)
    return Promise.resolve()
  },
};

export default storageUtils;
