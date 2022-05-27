import React from 'react'
import Main from '../template/Main'
import './Home.css'

export default props =>
    <Main icon="bars">
        <div className="display-4">
            <h3 className='indicadores'>
                Indicadores
            </h3>
        </div>
        <div className='row'>
            <div className='col-sm-3'>
                <div className='card'>
                    <div className='card-body'>
                        <p className='title-desc'>
                            <i className="fa fa-shopping-cart"></i> Vendas
                        </p>
                        <p className='desc-value'>
                            245
                        </p>
                        <p className='desc-percent'>
                            <i className="fa fa-sort-up"></i> 12,67%
                        </p>
                    </div>
                </div>
            </div>

            <div className='col-sm-3'>
                <div className='card'>
                    <div className='card-body'>
                        <p className='title-desc'>
                            <i className="fa fa-dollar"></i> Faturamento
                        </p>
                        <p className='desc-value'>
                            <p><span className='cifra'>R$</span> 12.167.943</p>
                        </p>
                        <p className='desc-percent'>
                            <i className="fa fa-sort-up"></i> 4,67%
                        </p>
                    </div>
                </div>
            </div>

            <div className='col-sm-3'>
                <div className='card'>
                    <div className='card-body'>
                        <p className='title-desc'>
                            <i className="fa fa-exchange"></i> Conversão
                        </p>
                        <p className='desc-value'>
                            12%
                        </p>
                        <p className='desc-percent'>
                            <i className="fa fa-sort-up"></i> 21,67%
                        </p>
                    </div>
                </div>
            </div>

            <div className='col-sm-3'>
                <div className='card'>
                    <div className='card-body'>
                        <p className='title-desc'>
                            <i className="icon-ind fa fa-user"></i> Leads
                        </p>
                        <p className='desc-value'>
                            432
                        </p>
                        <p className='desc-percent'>
                            <i className="fa fa-sort-up"></i> 11,34%
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </Main>