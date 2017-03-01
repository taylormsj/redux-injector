// Type definitions for redux-injector
// Project: https://github.com/randallknutson/redux-injector
// Definitions by: Taylor Mitchell-St Joseph <http://taylormitchellstjoseph.co.uk>

import * as Redux from 'redux';

declare module 'redux-injector' {

  interface createInjectStoreFn {
    <S>(reducer: any, enhancer?: Redux.StoreEnhancer<S>): Redux.Store<S>;
    <S>(reducer: any, preloadedState: S, enhancer?: Redux.StoreEnhancer<S>): Redux.Store<S>;
  }

  interface injectReducerFn {
    (key: string, reducers: any, force?: boolean): void;
  }

	const createInjectStore: createInjectStoreFn;
  const injectReducer: injectReducerFn;
  
}