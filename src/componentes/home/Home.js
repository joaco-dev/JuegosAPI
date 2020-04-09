import React, {Component} from 'react';
import './Home.css';

class Home extends Component{
    render() {
        return (
            <header className="container" >
                <div className="row align.item-center">
                    <div className="col-sm-12 my-5">
                        <a href="Home.js">{/*Cambiar linck*/}
                            <img src="/favicon.ico" alt="Logo" className="logo"/>
                        </a>
                        <h1 className="text-center display-1 text-uppercase font-weight-bold mt-4">
                            Nombre del Juego 
                        </h1>
                    </div> 
                    <div className="col-sm-6 text-center">
                        <div className="card-img-top">
                            <img 
                                src="logo512.png" 
                                alt="icono" 
                                className="img-fluid">
                            </img>
                        </div>
                    </div>
                    <div className="col-sm-6 text-center my-1 mt-5 display-3">
                        <>
                        </>
                        <p><strong>Bienvenido</strong></p>
                        <form action ="">
                            <input type="text" className="form-control rounded-0 my-5 text-center" placeholder="Escribe tu Nombre" ></input>
                                <button className="btn btn-block btn-outline-light rounded-0 mt-2">
                                    JUGAR
                                </button>
                        </form>
                        {/*<ul className="list-unstyled list-inline mt-4">
                                <li className="list-inline-item">
                                    <a href="/#">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="/#">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="/#">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="/#">
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                </li>
                        </ul>*/}
                    </div>

                </div>

            </header>
            
        )
    }
}

export default Home;