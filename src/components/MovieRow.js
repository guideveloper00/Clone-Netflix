import React, {useState} from "react";
import './MovieRow.css';

// eslint-disable-next-line
export default ({title, items}) => {

    const [rolagem, setRolagem] = useState(0);



    const handleLeftClick = () => {
        let x = rolagem + 600
        if(x > 0) {
            x = 0;
        }
        setRolagem(x)
    }

    
    const handleRightClick = () => {
        let x = rolagem - 600;
        let tamanholista = -61 * (items.results.length-1);
        console.log(items.results.length)
        if (x < tamanholista){
            x = tamanholista;
        }
        console.log(tamanholista)
        setRolagem(x)
    }



    return (
        <div className="movieRow">
            <h2>{title}</h2>

        <div className="movieRow--left" onClick={handleLeftClick}> <img src="https://img.icons8.com/ios-filled/50/ffffff/back.png" alt="seta voltar"/> </div>
        
        <div className="movieRow--right" onClick={handleRightClick}> <img src="https://img.icons8.com/ios-filled/50/ffffff/forward--v1.png" alt="seta ir"/> </div>


            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    marginLeft: rolagem,
                    width: items.results.length * 150,
                }}>
                    {items.results.length > 0 && items.results.map((item, key) => (


                        <a className="movieRow--item" key={key} href={`https://www.google.com/search?q=${item.original_name}`}>
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </a>
                    ))}
                </div>

                
            </div>
        </div>
    );
}