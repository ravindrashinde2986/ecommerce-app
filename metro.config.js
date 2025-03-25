// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

module.exports = getDefaultConfig(__dirname);

// const path = require('path');

// module.exports = {
//   resolver: {
//     extraNodeModules: {
//         child_process: path.resolve(__dirname, 'node_modules/rn-nodeify/node_modules/child_process'),
//         crypto: path.resolve(__dirname, 'node_modules/react-native-crypto'),
//         events: path.resolve(__dirname, 'node_modules/events'),
//         stream: path.resolve(__dirname, 'node_modules/stream-browserify'),
//         buffer: path.resolve(__dirname, 'node_modules/buffer'),
//     },
//   },
// };