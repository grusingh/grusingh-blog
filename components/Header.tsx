import Link from 'next/link';
import React from 'react';
import styles from './Header.module.css';
import {PrismicText, PrismicLink} from "@prismicio/react";

const Header = ({menu}: { menu: any }) => {
    const {title, menuLinks} = menu.data;

    return (
        <header>
            <h1 className={styles.title}>
                <Link href={"/"}>
                    <a>
                        <PrismicText field={title}/>
                    </a>
                </Link>
            </h1>
            <nav className={styles.nav}>
                <ul>
                    {menuLinks.map((menuLink: any) => (
                        <li key={menuLink.label}>
                            <PrismicLink field={menuLink.link}>
                                <PrismicText field={menuLink.label}/>
                            </PrismicLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
