import React, { useRef } from "react";
import './styles/homePage.css'
import { useDispatch } from "react-redux";
import { setTrainer } from "../store/slices/trainer.slice";
import { useNavigate } from "react-router-dom";

const HomePage = () => {

        const dispatch = useDispatch();

        const navigate = useNavigate();

        const textInput = useRef();

        const handleSubmit = (event) => {
            event.preventDefault();
            dispatch(setTrainer(textInput.current.value.trim()));
            textInput.current.value = '';
            navigate('/pokedex');
        }
 

    return (
        <div className="homePage">
            <header><img src="https://academlo.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F0640d539-599c-477d-b514-cd74b15ced93%2F3ce5ae02-7933-496c-8bbe-b8d42997e98c%2FUntitled.png?table=block&id=1aeaf2c7-e73f-472a-9635-8bf2dee6f565&spaceId=0640d539-599c-477d-b514-cd74b15ced93&width=2000&userId=&cache=v2" alt="" /></header>
            <div className="homePage__container">
                <h1 className="homePage__title">¡Hola entrenador!</h1>
                <h2>Para poder comenzar, dame tu nombre</h2>
                <form onSubmit={handleSubmit}>
                    <input ref={textInput} type="text" />
                    <button>Comenzar</button>
                </form>
            </div>
        </div>
    )
}

export default HomePage;
