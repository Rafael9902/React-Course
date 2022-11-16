import { AppRouter } from "./router/AppRouter"
import { Provider } from "react-redux"
import { store } from "./stores/store"

export const JournallApp = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}
