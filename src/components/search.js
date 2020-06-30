
import React, { useEffect, useState } from 'react'
import ListItem from './list-item'
import FavItem from './favItem'
import axios from 'axios'

    const storageForPeople=[]
    const storageForPlanet=[]
  
    const Search = ({tabSelected}) => {
      const [people, setPeople] = useState([])
      const [planets, setPlanets] = useState([])
      const [favPeople, setFavPeople]=useState([])
      const [favPlanet, setFavPlanet]=useState([])
      const baseUrlPeople = 'https://swapi.dev/api/people/'
      const baseUrlPlanets = 'https://swapi.dev/api/planets/'
    
      useEffect(() => {
        callApi(setPeople, baseUrlPeople)
        callApiPlanets(setPlanets, baseUrlPlanets)
    
        // eslint-disable-next-line
      }, [])

      function createFavoriteList(element, from){
        if(from==="people"){
          if(storageForPeople.some((ele)=>ele.name===element.name)){
            window.alert("elementent is available")
          }
          else{
            let storage=[]
            storage=[...storage,element]
            storageForPeople.push(...storage)
            setFavPeople([...storageForPeople])
          }
        
        }else{
          if(storageForPlanet.some((elm)=>elm.name===element.name)){
            window.alert("elementent is availavle")

          }

          else{
            let storage=[]
            storage=[...storage, element]
            storageForPlanet.push(...storage)
            setFavPlanet(...storageForPlanet)
          }

        }

      }


    function removeFavouriteItemList(element,from){
      if (from==='people'){
        const indexOfPeople=storageForPeople.indexOf(element)
        if(indexOfPeople>-1){
          storageForPeople.splice(indexOfPeople,1)
        }

        setFavPeople([...storageForPeople])

      }else{
        const indexOfPlanet=storageForPlanet.indexOf(element)
        if(indexOfPlanet>-1){
          storageForPlanet.splice(indexOfPlanet,1)
        }
        setFavPlanet([...storageForPlanet])

      }

    }
    
      
    
    const temp2 = []
    function callApi (setPeople, baseUrlPeople) {
      axios
        .get(`${baseUrlPeople}`)
        .then((res) => {
          temp2.push(...res.data.results)
          setPeople([...temp2])
          if (res.data.next !== null) {
            callApi(setPeople, res.data.next)
          }
        })
        .catch((err) => console.log('ERROR ---> ' + err))
    }
    
    const temp2Plantes = []
    function callApiPlanets (setPlanets, baseUrlPlanets) {
      
    
      axios
        .get(`${baseUrlPlanets}`)
        .then((res) => {
          temp2Plantes.push(...res.data.results)
          setPlanets([...temp2Plantes])
          if (res.data.next !== null) {
            callApiPlanets(setPlanets, res.data.next)
          }
        })
        .catch((err) => console.log('ERROR ---> ' + err))
    }

    return(

    
      <div className='listItemContainer'>
        {tabSelected === 'search' ? (
          <ListItem
            data={people}
            dataPlanets={planets}
    addFav={(element, from) => createFavoriteList(element, from)}/>

      
    ) : (
      <FavItem
        favDataOfPeople={favPeople}
        favDataOfPlanet={favPlanet}
        remFav={(element, from) => removeFavouriteItemList(element, from)}
      />
    )}
  </div>
            
    )
 
    
}
    
export default Search