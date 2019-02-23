import {
  Pagination,
  Autocomplete,
  Menu,
  MenuItem,
  Button,
  Tag,
  Row,
  Col,
  Card,
  Container,
  Header,
  Aside,
  Main,
  Footer
} from 'element-ui';
const install = Vue => {
  Vue.use(Pagination);
  Vue.use(Autocomplete);
  Vue.use(Menu);
  Vue.use(MenuItem);
  Vue.use(Button);
  Vue.use(Tag);
  Vue.use(Row);
  Vue.use(Col);
  Vue.use(Card);
  Vue.use(Container);
  Vue.use(Header);
  Vue.use(Aside);
  Vue.use(Main);
  Vue.use(Footer);
};
export default {
  install
};
