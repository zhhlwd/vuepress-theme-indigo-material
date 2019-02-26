import routes from 'imRouter/routes';
import importElement from 'imUtils/importElement';

import 'imStyles/palette.styl';
import 'imStyles/index.styl';
import 'imStyles/element-variables.scss';
import 'imStyles/iconfont.css';
import 'imStyles/code.styl';
import 'imStyles/content.styl';

export default ({ Vue, router }) => {
  Vue.use(routes, { router });
  Vue.use(importElement);
};
