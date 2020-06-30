import React, { useState } from 'react'
import { Container, Card, CardBody, CardImg } from "shards-react";

const ListItem = ({ data, dataPlanets, addFav }) => {
  const [input, setInput] = useState('')
  const elements = data
    .filter(
      (el) =>
        el.name.toLowerCase().match(input.toLowerCase()) || 
        el.eye_color.toLowerCase().match(input.toLowerCase()) ||
        el.birth_year.toLowerCase().match(input.toLowerCase())
    )
    .map((e) => ( 
      <Container key={e.name} >
      <Card >
      <CardBody>
          <div ><CardImg top src={"https://img.icons8.com/color/48/000000/they.png"} alt='logo'/><b>People</b></div>
          <div>
            <div>Name:{e.name}</div>
            <div>Eye Color: {e.eye_color}</div>
            <div>Age:{e.birth_year}</div>
            <button className="btn btn-success" onClick={() => addFav(e, 'people')}>
            ADD to Favorites
            </button>
        </div>
        </CardBody>    
        
      </Card>   

</Container>
    ))
  
  const elementsPlanet = dataPlanets
    .filter(
      (el) =>
        el.name.toLowerCase().match(input.toLowerCase()) || 
        el.climate.toLowerCase().match(input.toLowerCase()) ||
        el.terrain.toLowerCase().match(input.toLowerCase())
    )
    .map((e) => ( 
      <Container key={e.name}>
      <Card>
       <CardBody>
      <div><CardImg top src={"https://img.icons8.com/color/48/000000/saturn-planet.png"} alt='logo'/><b>Planets</b></div>
      
        <div>Name:{e.name}</div>
        <div>Climate:{e.climate}</div>
        <div>Terrain:{e.terrain}</div>
        <button className='btn btn-primary' onClick={() => addFav(e,'planets')}>
        ADD to Favorites
            </button>

      
    </CardBody>    
    
  </Card>   

</Container>
    ))
  return (
    <div className='listContainer'>
       
      <div > <i className="glyphicon glyphicon-search"></i>
        <input className="input-group input-group-sm mb-3"  type="text" placeholder="Search" aria-label="Search" value={input} onChange={(e) => setInput(e.target.value)}/>
       
      </div>

      <div className='listItem'>
        <div className='Item'>{elements}</div>
        <div className='Item'>{elementsPlanet}</div>
      </div>
    </div>
  )
}

export default ListItem
