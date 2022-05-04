import "styles/globals.css"
import {Provider} from 'react-redux'
import store from "redux/store"

// Aquí va el provider, este es el que almacena el estado global de la app



function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className="bg-slate-100 text-slate-900  dark:bg-slate-900 dark:text-slate-100  transition duration-500 min-h-screen">
        <Component {...pageProps} />
      </div>
    </Provider>
  )
}

export default MyApp;
