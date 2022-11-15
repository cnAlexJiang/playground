import { Package } from '@idg/idg';
import components from './components';
import controllers from './controllers';
import pages from './pages';
import { routes } from './router';
import locales from './locales';

import './init';

const pkg: Package = {
name: '__gui__',
components,
locales,
controllers,
routes,
pages,
};

export default pkg;
