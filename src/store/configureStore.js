import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers/index'
import thunk from 'redux-thunk';
import {persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
//import {asyncSessionStorage} from 'redux-persist/storages';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
    key: 'root',
    storage:storage,
    stateReconciler: autoMergeLevel2 
  }
  
  const persistedReducer = persistReducer(persistConfig, rootReducer)

  //export default () => {
    let store = createStore(persistedReducer,
        applyMiddleware(thunk));
    let persistor = persistStore(store)
    //return { store, persistor };
//}
export default {store, persistor};