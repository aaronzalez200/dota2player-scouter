import React from 'react';
import Info from './components/info';
import Heroes from './components/heroes.json';
import data from './components/data';
import Navbar from './components/navbar';

export default function App() {
  const [dota2Data, setDota2Data] = React.useState()
  React.useEffect(function() {
    fetch(`https://api.opendota.com/api/players/${id}`)
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
const id = 242151708;

const [dota2AllHeroes, setDota2AllHeroes] = React.useState()
React.useEffect(function() {
  fetch(`https://api.opendota.com/api/players/${id}/heroes?&lane_role=${role}`)
      .then(res => res.json())
      .then(data => setDota2AllHeroes(data))
}, [role, id]) 

const [dota2Ranks, setDota2Ranks] = React.useState()
React.useEffect(function() {
  fetch(`https://api.opendota.com/api/players/129050083/rankings`)
      .then(res => res.json())
      .then(data => setDota2Ranks(data))
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

  if (dota2AllHeroes === undefined) return <>We are loading 2...</>;

const Array10 = dota2AllHeroes.slice(0, 10);

const matchData = Array10.map((item) => {
  return (
    <div className="Match">
    <h1>Games: {item.games} Wins: {item.win}</h1>
    <text>Hero ID: 
      <img src={`https://cdn.cloudflare.steamstatic.com${Heroes[item.hero_id].icon}`}/>
    </text>
</div>
  )
}, [])

    if (dota2Data === undefined || dota2DataWL === undefined) return <>We are loading...</>;

    function importAll(r) {
      let images = {};
      r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
      return images;
    }
    
    const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));
    
    

  return (
    <div>
        <Navbar image={dota2Data.profile.avatarfull} winLoss={dota2DataWL}/> 
        <section className="heroes-info" >
            {heroes}
        </section>
        <br></br>
          {matchData}
        <br></br>
        Testing Data:
        {JSON.stringify(dota2Data)}
        Profile Badge: <img src={images[`badge-${dota2Data.rank_tier}.png`]} />
        Name: {(dota2Data.profile.personaname)} and {JSON.stringify(dota2AllHeroes[0].deaths)}
        <br></br>
        {JSON.stringify(dota2AllHeroes[1].kills)} and {JSON.stringify(dota2AllHeroes[1].deaths)}
        <h1>  Heroes: 
          <img src="https://static.wikia.nocookie.net/dota2_gamepedia/images/8/85/SeasonalRank1-1.png/revision/latest/scale-to-width-down/160?cb=20190130002445" />
          {JSON.stringify(Array10)}
        </h1>
    </div>
  )
}