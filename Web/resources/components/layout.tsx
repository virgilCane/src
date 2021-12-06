import { FC } from "react";
import SideBar from './sidebar';
import Head from 'next/head';



const Layout: FC = ({children}) =>{
    return(
        < >
            <Head>
                <title>Homely</title>
                <meta name="description" content="An App to Make You Want to Kill Your Flatmates Less" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='container-fluid'>
                <div className='row'>
                    {/* Action Pane */}
                    <div className='col-md-10 p-0'>
                        {children}
                    </div>
                    {/* Navigation */}
                    <div className='col-md-2 p-0'>
                        <SideBar />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout;