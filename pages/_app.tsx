import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <div className="container-fluid d-flex flex-column min-vh-100 px-0 bg-light">
      <Component {...pageProps} />

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
        crossOrigin="anonymous"
      ></script>

    </div>
  );
}

export default MyApp
