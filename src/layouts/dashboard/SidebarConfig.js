// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'Introdução',
    path: '/dashboard/introducao',
    icon: getIcon('eva:home-outline')
  },
  {
    title: 'Escolhendo chá',
    path: '/dashboard/escolhendo-cha',
    icon: getIcon('eva:search-fill')
  },
  {
    title: 'Fazendo chá',
    path: '/dashboard/fazendo-cha',
    icon: getIcon('simple-icons:mocha')
  }
];

export default sidebarConfig;
