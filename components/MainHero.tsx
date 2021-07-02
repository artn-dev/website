import styles from '../styles/Home.module.scss';
import classNames from 'classnames';

const MainHero = () => {
    var coverClass = classNames("container-fluid", styles.backgroundImage);

    return (
        <>
            <div className={coverClass}>
                <div className="row h-100">
                    <div className="col-12 col-md-6 d-flex align-items-center">
                        <div className="container">
                            <p className="fs-1 text-light mb-0">Meu nome é Azemar</p>
                            <p className="fs-5 text-light mb-5">Eu transformo ideias em realidade</p>
                            <a href="#projects" className="btn btn-primary">
                                Conheça meu trabalho
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainHero
