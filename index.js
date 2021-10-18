/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ChunkManager} from '@callstack/repack/client';

ChunkManager.configure({
  storage: AsyncStorage, // optional
  resolveRemoteChunk: async chunkId => {
    // Feel free to use any kind of remote config solution to obtain
    // a base URL for the chunks, if you don't know where they will
    // be hosted.

    return {
      url: `http://my-domain.dev/${chunkId}`,
    };
  },
});

AppRegistry.registerComponent(appName, () => App);
