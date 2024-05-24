import { Provider } from 'react-redux'

import { Router } from '@/routes'
import { store } from '@/service/store'

export function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}
