import React,{useState} from 'react'
import { Container, Card, CardBody, CardImg } from "shards-react";

const FavItems=({favDataOfPlanet,favDataOfPeople,remFav})=>{
    console.log(favDataOfPlanet)
const [Tab,setTab]= useState("all")

    const elementOfPeople=favDataOfPeople.map((e)=>(
        <Container key={e.name} >
          <Card >
          <CardBody>
              <div ><CardImg top src={"https://img.icons8.com/color/48/000000/they.png"} alt='logo'/><b>People</b></div>
              <div>
                <div>Name:{e.name}</div>
                <div>Eye Color: {e.eye_color}</div>
                <div>Age:{e.birth_year}</div>
                <button className='favBtn' onClick={() => remFav(e, 'people')}>
                Remove from Favorites
                </button>
            </div>
            </CardBody>    
            
          </Card>   
   
    </Container>

    ))

    //const returnedArray = Array.from(favDataOfPlanet)
    const elementOfPlanet = [favDataOfPlanet].map((el)=>(
    <Container key={el.name}>
         
        <Card>
         <CardBody>
        <div><CardImg top src={"https://img.icons8.com/color/48/000000/saturn-planet.png"} alt='logo'/><b>Planets</b></div>
        
          <div>Name:{el.name}</div>
          <div>Climate: {el.climate}</div>
          <div>Terrain:{el.terrain}</div>
          <button className='favBtn' onClick={() => remFav(el, 'planets')}>
                Remove from Favorites
              </button>
  
        
      </CardBody>    
      
    </Card>   

</Container>
))

    const showAll=[...elementOfPeople, ...elementOfPlanet]

function selectionOfTab(Tab){
    switch(Tab){
        case 'all':
         return showAll

        case 'people':
            return elementOfPeople
        case 'planet':
            return elementOfPlanet
        default:
            return showAll

    }

}
return(
    <div className='listContainer'>
        <ul className="nav nav-tabs">
            <li className="active">
                <button onClick={()=>setTab('all')}>AllItem</button>
            </li>
            <li>
            <button onClick={()=>setTab('planet')}>Planet</button>
            </li>
            <li>
            <button onClick={()=>setTab('people')}>People</button>
            </li>
            <li>
            <button onClick={()=>setTab('default')}>Default</button>
            </li>
        </ul>

        <div className='listItem'>{selectionOfTab(Tab)}</div>

    </div>
)

}

export default FavItems

// const About=()=>{
//     return(
//     <div className="container">
//         <h4 className="center">About</h4>
//         <div class="row">
//       <div class="col s12 red">This div is 12-columns wide on all screen sizes</div>
//       <div class="col s3 orange">6-columns (one-half)</div>
//       <div class="col s6 yellow">6-columns (one-half)</div>
//     </div>
     
     
//         <p>jahirul haq is from bangladesh.jahirul haq is from bangladeshjahirul haq is from bangladeshjahirul haq is from bangladeshjahirul haq is from bangladesh</p>
//     </div>
    

        

//     )
// }

// export default About