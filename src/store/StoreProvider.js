"use client";

import React from "react";
import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
import { store } from "./store";

const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
// const StoreProvider = ({ children }) => {
//   return (
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         {children}
//       </PersistGate>
//     </Provider>
//   );
// };
export default StoreProvider;
