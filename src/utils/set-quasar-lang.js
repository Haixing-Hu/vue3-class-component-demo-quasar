////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { Quasar } from 'quasar';
import config from 'src/config';
import logger from 'src/logger';

/**
 * Sets the language of the Quasar framework.
 *
 * @param {string} lang
 *     the specified language tag.
 */
async function setQuasarLang(lang) {
  const url = `${config.quasarCDN}lang/${lang}.js`;
  try {
    // dynamic import the URL
    logger.info('Loading the language pack of Quasar framework from:', url);
    const module = await import(/* @vite-ignore */ url);
    // install the language pack
    logger.info('Setting the language pack of Quasar framework to:', lang);
    Quasar.lang.set(module.default);
  } catch (e) {
    logger.error(`Failed to set the language pack "${lang}" of Quasar framework from: ${url}`, e);
  }
}

export default setQuasarLang;
