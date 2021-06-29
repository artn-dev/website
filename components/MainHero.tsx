import styles from '../styles/Home.module.scss';
import classNames from 'classnames';

const MainHero = () => {
    var coverClass = classNames("row", "py-5", styles.backgroundImage);

    return (
        <>
            <div className={coverClass}>
                <div className="w-50 d-flex flex-column justify-content-center" style={{
                    paddingLeft: 100,
                }}>
                    <p className="fs-1 text-light mb-5">Meu nome é Azemar. Eu transformo ideias em realidade</p>
                    <div>
                        <button type="button" className="btn btn-primary">
                            Conheça meu trabalho
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainHero
