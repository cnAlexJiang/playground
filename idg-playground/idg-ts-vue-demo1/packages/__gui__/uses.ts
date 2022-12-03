import Vue from 'vue';
import { Locales } from '@idg/idg';

const i18n = Locales.i18n;
import idgIview from '@idg/iview';
import '@idg/iview/dist/styles/custom.css';

Vue.use(idgIview, { i18n });
