import { Injectable, Inject, Optional } from "@angular/core";
import { EpicMiddleware } from 'redux-observable'

import { KY_EPICS, EpicCreator } from './root.model'


@Injectable()
export class RootEpics {
    constructor(
        @Inject(KY_EPICS) @Optional() private readonly epicCreators: EpicCreator[]
    ) { }

    public createEpics() {
        if (this.epicCreators) {
          return this.epicCreators.reduce(
              (epics, creator) => [
                  ...epics,
                  ...creator.createEpics()],
                  [] as EpicMiddleware<any, any>[])
        }
    
        return []
    }
}
