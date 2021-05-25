import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <div className="container-fluid min-vh-100 px-0 bg-light">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp
