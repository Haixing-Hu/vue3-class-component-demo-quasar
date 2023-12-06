////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { Quasar } from 'quasar';
import { boot } from 'quasar/wrappers';
import logger from 'src/logger';
import setQuasarLang from 'src/utils/set-quasar-lang';

export default boot(async (/* { app, router, ... } */) => {
  const locale = Quasar.lang.getLocale();
  logger.info('The default locale of the browser is:', locale);
  logger.info('Setting the language of Quasar framework to:', locale);
  await setQuasarLang(locale);
});
