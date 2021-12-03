import 'next-i18next';

import en from './en/common.json';

declare module 'next-i18next' {
    // and extend them!
    interface Resources {
        en: typeof en;
    }
}
