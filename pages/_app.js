import "styles/globals.css";

function MyApp({ Component, pageProps }) {
  return ( 
    <main className="bg-slate-100 text-slate-900  dark:bg-slate-900 dark:text-slate-100  transition duration-500 min-h-screen">
    <Component {...pageProps} />
    </main>
  )
}

export default MyApp;
