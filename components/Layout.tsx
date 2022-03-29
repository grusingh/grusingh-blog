import Header from './Header'
import Footer from './Footer'
import { Global, css } from '@emotion/react'
import cssReset from "../theme/cssReset";
import globalCss from "../theme/globalCss";
import React from "react";
import {Menu} from "../utils/helpers";

type LayoutProps = {
    menu: Menu;
};

const Layout : React.FunctionComponent<LayoutProps> = ({children, menu}) => {
    return (
        <>
            <Global styles={css(cssReset)}/>
            <Global styles={css(globalCss)}/>
            <Header menu={menu}/>
            <main css={{
                flexGrow: 1,
            }}>{children}</main>
            <Footer/>
        </>
    )
};

export default Layout;
