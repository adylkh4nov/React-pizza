import React from 'react'
import './scss/app.scss'
import Header from "./components/header";
import Categories from "./components/categories";
import Sort from "./components/sort";
import PizzaBlock from "./components/pizza-block";




function App() {
    return (
        <div>

            <div className="wrapper">
                <Header/>
                <div className="content">
                    <div className="container">
                        <div className="content__top">
                            <Categories/>
                            <Sort/>
                        </div>
                        <h2 className="content__title">Все пиццы</h2>
                        <div className="content__items">
                        <PizzaBlock title={"Чизбургер-пицца"} price ={500}/>
                        <PizzaBlock title={"Мексиканская"} price ={400}/>
                        <PizzaBlock title={"Пепперони"} price ={300}/>
                        <PizzaBlock title={"Маргарита"} price ={100}/>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;
