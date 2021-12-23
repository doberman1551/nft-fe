import { Header } from '../components/Header'
import '../styles/globals.css'

import GlobalStyles from '../components/GlobalStyles/GlobalStyles'
import theme from '../theme/theme'
import {QueryClientProvider, QueryClient} from 'react-query'

const queryClient=new QueryClient()
 

function MyApp({ Component, pageProps }) {
  return (
  <>
 
<Header></Header>
<QueryClientProvider client={queryClient}>
  <Component {...pageProps}/>
</QueryClientProvider>
  </>
)}

export default MyApp
