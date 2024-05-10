import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import './styles/pokedex.css';
import useFetch from "../hooks/useFetch";
import PokeCard from "../components/pokedex/PokeCard";
import PokeSelect from "../components/pokedex/styles/PokeSelect";



const Pokedex = () => {

    const [selectValue, setSelectValue] = useState('');
    const [inputValue, setInputValue] = useState('');

    const [pokemons, getPokemons, getType] = useFetch();

    const trainer = useSelector(store => store.trainer);

    useEffect(() => {
        if (selectValue) {
            getType(selectValue);
        } else {
            const url = 'https://pokeapi.co/api/v2/pokemon?limit=20';
        getPokemons(url);
        }
        
    }, [selectValue]);

    const textInput = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        setInputValue(textInput.current.value.toLowerCase().trim());
        textInput.current.value = '';
    }

    console.log(pokemons);

    const pokeSearch = (poke) => {
        const perName = poke.name.includes(inputValue);
        return perName;
    }

    const pagination = () => {
        pokemons?.results.filter(pokeSearch).slice()
        return
    }

    return (
        <section className="pokedex">
            <header><img src="https://academlo.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F0640d539-599c-477d-b514-cd74b15ced93%2F3ce5ae02-7933-496c-8bbe-b8d42997e98c%2FUntitled.png?table=block&id=1aeaf2c7-e73f-472a-9635-8bf2dee6f565&spaceId=0640d539-599c-477d-b514-cd74b15ced93&width=2000&userId=&cache=v2" alt="" /></header>
            <h2 className="pokedex__title"><span>Bienvenido {trainer},</span> aquí podrás encontrar tu pokemon favorito</h2>
            <div>
                <form onSubmit={handleSubmit}>
                    <input ref={textInput} type="text" />
                    <button>Buscar</button> 
                </form>
                <PokeSelect
                setSelectValue={setSelectValue}
                />
            </div>
            <div className="pokedex__container">
                {
                    pokemons?.results.filter(pokeSearch).map((poke) => (
                     <PokeCard
                        key={poke.url}
                        url={poke.url}
                     />   
                    ))
                }
            </div>
        </section>
    )
}

export default Pokedex;