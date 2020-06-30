import React from 'react'

const Navbar=({tabCallback})=>{
    return(
        <nav className="nav-wrapper orange ">
         

         
            <img src="https://img.icons8.com/clouds/100/000000/black-jaguar.png" alt='logo' />
                <a className="brand-logo" href="https://img.icons8.com/clouds/100/000000/black-jaguar.png">React APP</a>
                <ul className="right" >
                    {/* <li><div className='favBtn' onClick={()=>tabCallback('home')}>Home</div></li> */}
                    <li ><div className='favBtn' onClick={()=>tabCallback('favourite')}>FavouriteItem</div></li>
                    <li ><div className='favBtn' onClick={()=>tabCallback('')}>||</div></li>
                    
                    <li ><div className='favBtn' onClick={()=>tabCallback('search')}>Search</div></li>
                </ul>
           
        </nav>

    )
}

export default Navbar