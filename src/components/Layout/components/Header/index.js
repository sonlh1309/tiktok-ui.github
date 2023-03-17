

import classNames from "classnames/bind";
import styles from './Header.module.scss'
import images from "../../../../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlus, faEllipsisVertical, faCircleQuestion, faKeyboard, faEarthEurope, faUser, faCoins, faGear, faSignOut } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import HeadlessTippy from '@tippyjs/react/headless'

import { Wrapper as PopperWrapper } from "../../../Popper";
import AccountItem from "../AccountItem/Index";
import Button from "../Button";
import Menu from "../../../Popper/Menu";
import { InboxIcon, MessageIcon } from "../../../Icons";
import Image from "../../../Image";
import Search from "../Search";




const cx = classNames.bind(styles)

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthEurope} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: ' Tiếng Việt',
        }

      ]
    }
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to: '/feedback'
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcuts',
  },
];

function Header() {
 
  const currentUser = true;


  


  // Handle logic
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case 'language':
        break;
      default:
    }
  };

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View profile',
      to: '/@hoaa',
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Get coins',
      to: '/coin',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Settings',
      to: '/settings',
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: 'Log out',
      to: '/logout',
      separate: true,
    },
];


  return (
   <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="Tiktok" />
        </div>
        {/* Search */}
        
      <Search/>

        <div className={cx('actions')}>
          <Button outline small leftIcon={<FontAwesomeIcon icon={faPlus} />}>Upload</Button>
            {currentUser ? (
              <>
                <Tippy delay={[0, 50]} content="Tin nhắn" placement="bottom">
                  <button className={cx('action-btn')}>
                   <MessageIcon />
                  </button>
                </Tippy>
                <Tippy  delay={[0, 50]} content="Hộp thư" placement="bottom">
                  <button className={cx('action-btn')}>
                    <InboxIcon/>
                  </button>
                </Tippy>
              </>
            ): (
             <Button primary >Log in</Button>
            )}
             <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
              {currentUser ? (
               <Image className={cx('user-avatar')}
                 src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/abecd00ddb883689596f50a65ef255cf~c5_100x100.jpeg?x-expires=1679130000&x-signature=lGCEGf%2B0o0TuCJmrClln6gFLF5g%3D"
                 alt="Nguyen van A"
               />
              ): (
                <button className={cx('more-btn')}>
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
              )}
            </Menu>
          </div>
      </div>
    </header>
  );
}
export default Header;