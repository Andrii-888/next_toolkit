import { Inter } from "next/font/google";
import StoreProvider from "../store/StoreProvider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}

// import { useEffect } from 'react';
// import { useStore } from '../store'; // Импортируйте свой store
// import { PersistGate } from 'redux-persist/integration/react';
// import { Provider } from 'react-redux';
// import { useRouter } from 'next/router';

// const MyApp = ({ Component, pageProps }) => {
//   const store = useStore(pageProps.initialReduxState);
//   const { persistor, store: reduxStore } = store;

//   const router = useRouter();

//   useEffect(() => {
//     const handleRouteChange = () => {
//       persistor.persist();
//     };

//     router.events.on('routeChangeComplete', handleRouteChange);
//     return () => {
//       router.events.off('routeChangeComplete', handleRouteChange);
//     };
//   }, [router.events, persistor]);

//   return (
//     <Provider store={reduxStore}>
//       <PersistGate loading={null} persistor={persistor}>
//         <Component {...pageProps} />
//       </PersistGate>
//     </Provider>
//   );
// };

// export default MyApp;
