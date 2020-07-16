import React from 'react';
import { RightMenuBox } from './right-menu.style';
import { FurnitureIcon } from 'assets/icons/FurnitureIcon';
import { FURNITURE_PAGE } from 'constants/navigation';
import { useRouter } from 'next/router';

import Logo from 'layouts/logo/logo';
const MENU_ITEMS = [
  {
    link: FURNITURE_PAGE,
    label: 'Furniture',
    icon: <FurnitureIcon width="15px" height="13px" />,
    intlId: 'navFurnitureMenu',
    dynamic: true,
  }
];

type Props = {
  logo: string;
};

export const RightMenu: React.FC<Props> = ({ logo }) => {
  const router = useRouter();
  const initialMenu = MENU_ITEMS.find((item) => item.link === router.pathname);
  const [activeMenu, setActiveMenu] = React.useState(
    initialMenu ?? MENU_ITEMS[0]
  );

  return (
    <RightMenuBox>
      <Logo
        imageUrl={logo}
        alt={'Shop Logo'}
        onClick={() => setActiveMenu(MENU_ITEMS[0])}
      />
    </RightMenuBox>
  );
};
