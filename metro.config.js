const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
    server: {
        port: 5009, // Cambia este valor al puerto que deseas utilizar
    },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
