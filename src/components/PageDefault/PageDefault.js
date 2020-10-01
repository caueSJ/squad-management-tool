import React from 'react';
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const PageDefault = props => {
    return (
        <>
            <Header />
            <main>{props.children}</main>
            <Footer />
        </>
    )
}

export default PageDefault;