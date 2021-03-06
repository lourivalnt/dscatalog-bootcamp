import React from 'react';
import './styles.scss'
import { ReactComponent as MainImage} from 'core/assets/images/main-image.svg'

import { Link } from 'react-router-dom'
import ButtonIcon from 'core/components/ButtonIcon';

const Home = () => (
    <div className="home-container">
        <div className="row home-content card-base border-radius-20">
            <div className="col-6">
            <h1 className = "text-title">Conheça o melhor catálogo de produtos</h1>
            <p className = "text-subtitle">
                Ajudaremos você a encontrar os melhores produtos disponíveis no mercado.
            </p>
            <Link to="/products">
                <ButtonIcon text="Inicie agora a sua busca"/>
            </Link>
            </div>
            <div className="col-6">
                <MainImage className="main-image"/>
            </div>
        </div>
    </div>
);

export default Home;