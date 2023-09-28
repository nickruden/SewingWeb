import { FC } from 'react'
import Image from "next/image";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from "./HeaderSite.module.scss"

import logoMenu from "public/Logo/logoMenu.svg"
import city from "public/icons/headerAdress.svg"

interface Props {}

const HeaderSite: FC<Props> = (props) => {

  const path = usePathname();

  return (
    <header className={styles.header}>
      <div className="header__container">
        <div className={styles.header__content}>
          <div className={styles.header__left}>
            <div className={styles.header__logo}>     
              <Link href='/'>
                <Image src={logoMenu} alt="SewingWeb"  />
              </Link>
            </div>
            <div className={styles.header__menu}>
              <nav className={styles.header__menuNav}>
                <ul className={styles.header__menuList}>
                  <li className={styles.header__menuItem}>
                    <Link 
                      href="/" 
                      className={path == '/' ? [styles.header__menuLink, styles.header__menuLink_active].join(' ') : styles.header__menuLink}>
                        Найти работу
                    </Link>
                  </li>
                  <li className={styles.header__menuItem}>
                    <Link 
                      href="/employer" 
                      className={path == '/employer' ? [styles.header__menuLink, styles.header__menuLink_active].join(' ') : styles.header__menuLink}>
                        Работодателю
                    </Link>
                  </li>
                  <li className={styles.header__menuItem}>
                    <Link 
                      href="/professions" 
                      className={path == '/professions' ? [styles.header__menuLink, styles.header__menuLink_active].join(' ') : styles.header__menuLink}>
                        Профессии
                      </Link>
                  </li>
                  <li className={styles.header__menuItem}>
                    <Link 
                      href="/companies" 
                      className={path == '/companies' ? [styles.header__menuLink, styles.header__menuLink_active].join(' ') : styles.header__menuLink}>
                        Предприятия
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
         
          <div className={styles.header__control}>
            <div className={styles.header__city}>
              <div className={styles.header__cityText}>Город</div>
              <div className={styles.header__cityIcon}>
                <Image src={city} alt={'Город'}/>
              </div>
            </div>
            <div className={styles.header__login}>
              <div className={styles.header__loginBtn}>Войти</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  ) 
};

export default HeaderSite;