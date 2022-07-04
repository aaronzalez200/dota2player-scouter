import React from 'react';
import Info from './components/info';
import Heroes from './components/heroes.json';
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

const role = 1;
const id = 129050083;

const [dota2AllHeroes, setDota2AllHeroes] = React.useState()
React.useEffect(function() {
  fetch(`https://api.opendota.com/api/players/${id}/heroes?&lane_role=${role}`)
      .then(res => res.json())
      .then(data => setDota2AllHeroes(data))
}, [role, id]) 

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
/*
  const matchData = dota2AllHeroes.map((item) => {
    return (
      <div className="Match">
      <h1>Kills: {item.kills} Deaths: {item.deaths}</h1>
      <text>Match ID: {item.match_id}</text>
  </div>
    )
  }, [])
*/


    if (dota2Data === undefined || dota2DataWL === undefined || dota2AllHeroes === undefined) return <>We are loading...</>;

  return (
    <div>
        <Navbar image={dota2Data.profile.avatarfull} winLoss={dota2DataWL}/> 
        <section className="heroes-info" >
            {heroes}
        </section>
        <br></br>
        <br></br>
        Testing Data:
        <br></br>
        {JSON.stringify(dota2AllHeroes[0].kills)} and {JSON.stringify(dota2AllHeroes[0].deaths)}
        <br></br>
        {JSON.stringify(dota2AllHeroes[1].kills)} and {JSON.stringify(dota2AllHeroes[1].deaths)}
        <h1>  Heroes: {JSON.stringify(dota2AllHeroes)}</h1>
    </div>
  )
}