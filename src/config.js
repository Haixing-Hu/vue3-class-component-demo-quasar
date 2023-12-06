////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import packageInfo from '../package.json';

/**
 * The global immutable configuration of the application.
 *
 * @author Haixing Hu
 */
export default {
  debug: ((process.env.DEBUGGING !== undefined)
    && (process.env.NODE_ENV !== 'production')),                // Whether in the debugging mode
  nodeEnv: process.env.NODE_ENV,                                // Current node environment variables
  baseUrl: process.env.BASE_URL,                                // The Base url of the HTML page
  defaultLanguage: 'zh-CN',                                     // The default language of the application
  quasarCDN: 'https://unpkg.com/quasar@2.6.0/',                 // The CDN URL of the Quasar Framework
  app: {                                                        // Application configuration
    name: packageInfo.productName,                              // The name of this application
    code: packageInfo.name,                                     // The code name for this application
    version: packageInfo.version,                               // The version number of this application
    signature: `${packageInfo.name}-${packageInfo.version}`,    // The signature of this application,
    // which can be used as the primary key prefix of persistent data
    title: packageInfo.productName,                             // The window title of this application
  },
  request: {                                                    // HTTP request related configuration information
    timeout: 30000,                                             // HTTP request timeout, unit is milliseconds
    header: {                                                   // HTTP request header
      'Content-Type': 'application/json;charset=UTF-8',         // Content-Type key value
      'Accept': 'application/json;charset=UTF-8',               // Accept key value
    },
    rollPullingPeriod: 3000,                                    // The time interval for polling checks, in milliseconds
  },
};
