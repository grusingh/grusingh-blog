import Header from './Header'
import Footer from './Footer'

export default function Layout({children, menu}: { children: any, menu: any }) {
    return (
        <div>
            <Header menu={menu}/>
            <main>{children}</main>
            <Footer/>
        </div>
    )
}
