import { useEffect, useState} from "react";
import Tmsdb from './Tmsdb';
import MovieRow from "./components/MovieRow";
import './App.css'
import FeaturedMovie from "./components/FeaturedMovie";



// eslint-disable-next-line
export default () => {


  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);



    useEffect(()=>{
      const loadAll = async () => {
        let list = await Tmsdb.getHomeList();
        setMovieList(list);

        let originals = list.filter(i=>i.slug === 'originals');
        let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
        
        let chosen = originals[0].items.results[randomChosen];
        let chosenInfo = await Tmsdb.getMovieInfo(chosen.id, 'tv');
        console.log(chosenInfo)

        setFeaturedData(chosenInfo);
      }

      loadAll();
    },[]);



  return (
    <div className="page">

    <header>  </header>

      {featuredData &&
        <FeaturedMovie item={featuredData}/>
      }
      
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items}/>
         ))}
      </section>
      

      {movieList.length <= 0 &&
      <div>
        <img className="loading" src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="carregando"></img>
      </div>
      }
    </div>
  );
}
