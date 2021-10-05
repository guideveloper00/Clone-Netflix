import React from "react";
import './featuredMovie.css';

// eslint-disable-next-line
export default ({item}) => {

console.log(item.overview)

    let overview = item.overview.substring(0, 300);
    let cortar = overview.lastIndexOf('.') + 1;
    let feito = overview.substring(0, cortar);


    let firstRelase = new Date(item.first_air_date);

    let generos = [];

     for(let i in item.genres) {
        generos.push(item.genres[i].name);
    }

    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,

        }}>
            <div className="featured--vertical">
            <div className="featured--horizontal">
                <div className="featured--section">
                <div className="featured--name">{item.original_name}</div>
                <div className="featured--info">
                    <div className="featured--points">{item.vote_average} pontos</div>
                    <div className="featured--year">{firstRelase.getFullYear()}</div>
                    <div className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                </div>
                <div className="featured--description">{feito}</div>
                <div className="featured-buttons">
                    <a href={`https://www.google.com/search?q=${item.original_name}`} className="featured--watchbutton">&#x025B8; Assistir</a>
                    <a href={`/lista/add${item.id}`} className="featured--mylistbutton">+ minha lista</a>
                </div>
                <div className="featured--genres"><strong>Generos: </strong>{generos.join(', ')}</div>
                </div>
            </div>
            </div>
        </section>
    );
}