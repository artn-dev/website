import Header from '../components/Header';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <div className={styles.backgroundImage}/>
      <Header cover/>

      <div className="container">

        <div className="row align-items-center my-5">

          <div className="col-12 col-md-7 d-flex  justify-content-end">
            <h1 className="text-light">Azemar da Rosa Teixeira Neto</h1>
          </div>

          <div className="col-md-5 d-flex justify-content-center justify-content-md-start">
            <div className={styles.profilePic}>
              <img className={styles.profilePic} src="/profile-pic.png"/>
            </div>
          </div>

        </div>

        <div className="row mt-5 p-5">

          <div className="col text-center">
            <h3 className="text-secondary fs-5">
              Telefone
            </h3>

            <div className="d-flex justify-content-center align-items-center text-light">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
              </svg>
              <p className="m-0 ms-1">+55 (81) 98187-4078</p>
            </div>
          </div>

          <div className="col text-center">
            <h3 className="text-secondary fs-5">
              E-mail
            </h3>

            <div className="d-flex justify-content-center align-items-center text-light">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
              </svg>
              <p className="m-0 ms-1">azemarteixeira@gmail.com</p>
            </div>
          </div>

          <div className="col text-center">
            <h3 className="text-secondary fs-5">
              Github
            </h3>

            <div className="d-flex justify-content-center align-items-center text-light">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              <p className="m-0 ms-1">https://github.com/artn-dev</p>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}
