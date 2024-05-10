import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const PokeInfo = () => {

    const params = useParams();

    const [pokemon, getPokemon] = useFetch();

    useEffect(() => {
        const url = `https://pokeapi.co/api/v2/pokemon/${params.id}`;
        getPokemon(url);
    }, []);

    console.log(pokemon);

    return (
        <section>
            <header><img src="https://academlo.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F0640d539-599c-477d-b514-cd74b15ced93%2F3ce5ae02-7933-496c-8bbe-b8d42997e98c%2FUntitled.png?table=block&id=1aeaf2c7-e73f-472a-9635-8bf2dee6f565&spaceId=0640d539-599c-477d-b514-cd74b15ced93&width=2000&userId=&cache=v2" alt="" /></header>
            <figure>
                <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="pokemon image" />
            </figure>
            <span># {pokemon?.id}</span>
            <h2>{pokemon?.name}</h2>
            <ul>
                <li><span>weight</span><span>{pokemon?.weigth}</span></li>
                <li><span>heigth</span><span>{pokemon?.heigth}</span></li>
            </ul>
            <div>
                <article>
                    <h3>type</h3>
                    <ul>
                        {
                            pokemon?.types.map(type => (
                                <li key={type.type.url}>{type.type.name}</li>
                            ))
                        }
                    </ul>
                </article>
                <article>
                    <h3>skills</h3>
                    <ul>
                        {
                            pokemon?.abilities.map(skill => (
                                <li key={skill.ability.url}>{skill.ability.name}</li>
                            ))
                        }
                    </ul>
                </article>
            </div>
            <h2>stats</h2>
            <ul>
                {
                    pokemon?.stats.map(stat => (
                        <li key={stat.stat.url}><span>{stat.stat.name}</span><span>{stat.base_stat}/150</span> 
                        <div><div></div></div></li>
                    ))
                }
            </ul>
            <h2>Movements</h2>
            <ul>{
                pokemon?.moves.map(move => (
                    <li key={move.move.url}>{move.move.name}</li>
                ))
                }
            </ul>
        </section>
    )
}

export default PokeInfo;