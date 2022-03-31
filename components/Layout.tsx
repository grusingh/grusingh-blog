import { css, Global } from '@emotion/react';
import { FC } from 'react';
import cssReset from 'theme/cssReset';
import globalCss from 'theme/globalCss';
import { Menu } from 'utils/helpers';
import Footer from './Footer';
import Header from './Header';

type LayoutProps = {
  menu: Menu;
};

const Layout: FC<LayoutProps> = ({ children, menu }) => {
  return (
    <>
      <Global styles={css(cssReset)} />
      <Global styles={css(globalCss)} />
      <Header menu={menu} />
      <main
        css={{
          flexGrow: 1,
        }}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
