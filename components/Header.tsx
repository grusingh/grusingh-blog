import Link from 'next/link';
import React from 'react';
import {PrismicText, PrismicLink} from "@prismicio/react";
import {mq} from "../theme";
import Header1 from "./common/Header1";

const Header = ({menu}: { menu: any }) => {
    const {title, menuLinks} = menu.data;

    return (
        <header css={{
            margin: '0 -1rem 1rem -1rem',
            padding: '1rem',
            backgroundColor: 'rgb(245, 245, 245)',
            display: 'flex',
            flexDirection: 'column',
            [mq.sm]: {
                justifyContent: 'space-between',
                flexDirection: 'row'
            }
        }}>
            <Header1>
                <Link href={"/"} >
                    <a>
                        <PrismicText field={title}/>
                    </a>
                </Link>
            </Header1>
            <nav>
                <ul css={{
                    display: 'flex',
                    gap: '1rem'
                }}>
                    {menuLinks.map((menuLink: any, index: number) => (
                        <li key={index}>
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
