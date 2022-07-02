import React from 'react';
import Info from './components/info';
import data from './components/data';
import Navbar from './components/navbar';

export default function App() {
  const [dota2Data, setDota2Data] = React.useState()
  React.useEffect(function() {
    fetch("https://api.opendota.com/api/players/129050083")
        .then(res => res.json())
        .then(data => setDota2Data(data))
}, []) 

const [dota2DataWL, setDota2DataWL] = React.useState()
React.useEffect(function() {
  fetch("https://api.opendota.com/api/players/129050083/wl?limit=10")
      .then(res => res.json())
      .then(data => setDota2DataWL(data))
}, []) 

const [dota2DataHeroes, setDota2DataHeroes] = React.useState()
React.useEffect(function() {
  fetch("https://api.opendota.com/api/players/129050083/heroes")
      .then(res => res.json())
      .then(data => setDota2DataHeroes(data))
}, []) 

const heroes = data.map((item, index) => {
    return (
      <Info
        length={data.length}
        index={index}
        key={item.id}
        item={item}
      />
    )
  }, [])

    if (dota2Data === undefined || dota2DataWL === undefined) return <>We are loading...</>;

  return (
    <div>
        <Navbar image={dota2Data.profile.avatarfull} winLoss={dota2DataWL}/> 
        <section className="heroes-info" >
            {heroes}
        </section>
        <br></br>
        <h1>  Heroes: {JSON.stringify(dota2DataHeroes)}</h1>
    </div>
  )
}