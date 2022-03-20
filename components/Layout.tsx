import Header from './Header'
import Footer from './Footer'
import { Global, css } from '@emotion/react'
import cssReset from "../theme/cssReset";
import globalCss from "../theme/globalCss";

export default function Layout({children, menu}: { children: any, menu: any }) {
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
}
