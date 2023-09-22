
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Subscribe from '../Components/Subscribe';
import Features from '../Components/Features';
import { Fragment, useEffect, useState } from 'react';
import Loading from '../Components/Loading';

function MainLayout() {
  const [isLoading , setIsLoading] = useState(true)
  useEffect(()=>{
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  })
  return (
    <Fragment>
    {isLoading ? <Loading/> : <Fragment>
    <Header/>
    <Outlet/>
    <Features/>
    <Subscribe/>
    <Footer/>
    </Fragment>}
    </Fragment>
   
  );
}

export default MainLayout;


