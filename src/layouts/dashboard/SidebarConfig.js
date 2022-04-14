// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'Introdução',
    path: '/introducao',
    icon: getIcon('eva:home-outline')
  },
  {
    title: 'Escolhendo chá',
    path: '/escolhendo-cha',
    icon: getIcon('eva:search-fill')
  },
  {
    title: 'Fazendo chá',
    path: '/fazendo-cha',
    icon: getIcon('simple-icons:mocha')
  }
];

export default sidebarConfig;
