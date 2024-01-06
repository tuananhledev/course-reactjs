import React, { useState } from 'react';
import { Layout } from 'antd'
import HeaderWeb from './components/HeaderWeb'
import FooterWeb from './components/FooterWeb'
import { Route, Routes } from 'react-router-dom';
import router from './router'
import SidebarMobile from './components/SidebarMobile';

const App = () => {

    const [isShow, setIsShow] = useState(false);

    return (
        <Layout className='layout'>
            <HeaderWeb onToggleSidebar={() => setIsShow(!isShow)} />

            <SidebarMobile
                isShow={isShow}
                onToggleSidebar={() => setIsShow(!isShow)}
            />

            <Routes>
                {router.map(({ path, element }) => (
                    <Route path={path} element={element} key={path} />
                ))}
            </Routes>



            <FooterWeb />
        </Layout>
    )
}

export default App