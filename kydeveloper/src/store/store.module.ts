import { NgModule } from "@angular/core";
import { NgReduxModule, NgRedux, DevToolsExtension } from "@angular-redux/store";
import { createLogger } from 'redux-logger'
import { RootEnhancers } from "./root.enhancers";
import { RootEpics } from "./root.epics";
import { IAppState, rootReducer } from "./store";


@NgModule({
    imports: [NgReduxModule],
    exports: [NgReduxModule],
    providers: [RootEnhancers, RootEpics],
  })
export class StoreModule {
    constructor(
        ngRedux: NgRedux<IAppState>,
        devTools: DevToolsExtension,
        rootEpics: RootEpics,
        rootEnhancers: RootEnhancers
      ) {
        ngRedux.configureStore(
          rootReducer,
          {},
          [createLogger({
            collapsed: true
          }), ...rootEpics.createEpics()],
          rootEnhancers.createEnhancers())
      }
}