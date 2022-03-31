import { PrismicLink, PrismicText } from '@prismicio/react';
import Link from 'next/link';
import { FC } from 'react';
import { mq } from 'theme';
import { Menu } from 'utils/helpers';
import Header1 from './common/Header1';

type HeaderProps = {
  menu: Menu;
};

const Header: FC<HeaderProps> = ({ menu }) => {
  const { title, menuLinks } = menu.data;

  return (
    <header
      css={{
        margin: '0 -1rem 1rem -1rem',
        padding: '1rem',
        backgroundColor: 'rgb(245, 245, 245)',
        display: 'flex',
        flexDirection: 'column',
        [mq.sm]: {
          justifyContent: 'space-between',
          flexDirection: 'row',
        },
      }}
    >
      <Header1>
        <Link href={'/'}>
          <a>
            <PrismicText field={title} />
          </a>
        </Link>
      </Header1>
      <nav>
        <ul
          css={{
            display: 'flex',
            gap: '1rem',
          }}
        >
          {menuLinks.map((menuLink, index: number) => (
            <li key={index}>
              <PrismicLink field={menuLink.link}>
                <PrismicText field={menuLink.label} />
              </PrismicLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
