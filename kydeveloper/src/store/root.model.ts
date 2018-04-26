import { InjectionToken } from '@angular/core'
import { EpicMiddleware } from 'redux-observable'

export interface EpicCreator {
  createEpics(): EpicMiddleware<any, any>[]
}

export const KY_EPICS = new InjectionToken<EpicCreator[]>('ky.epics')