import React,{useEffect,useRef,useState} from 'react';
import HeaderLogo from './HeaderLogo'
import MenuItems from './MenuItems'
import {Link,BrowserRouter} from 'react-router-dom'


const Navbar = ({item}) => {

    const menuRef = useRef(null)
    const [activeMenu,toggleMenu] = useState(false)
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            const menu = menuRef.current
            if(window.pageYOffset > 0){
                menu.nextElementSibling.style.marginTop = `${menu.clientHeight}px`
                menu.classList.add('fixed')
            }else{
                menu.nextElementSibling.style.marginTop = `0px`
                menu.classList.remove('fixed')
            }
        })
    })
    
    return (
    <nav ref={menuRef} id="main-nav-subpage" class="subpage-nav" style={{display: "none"}}>
        <div class="row">
            <div class="container">
                <Link to={`/`}> <HeaderLogo/> </Link>
                <div onClick={()=>toggleMenu(!activeMenu)} class="responsive">
                    <i class="fa fa-bars" aria-hidden="true"></i>
                </div>
                <MenuItems active={activeMenu}/>
            </div>
        </div>
    </nav>
    )
    

};

export default Navbar;