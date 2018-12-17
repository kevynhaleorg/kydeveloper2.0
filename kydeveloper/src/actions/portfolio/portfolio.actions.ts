import { Injectable } from '@angular/core'
import { dispatch } from '@angular-redux/store';
import { FluxStandardAction } from 'flux-standard-action'
import { IProjectsResponse, IProjectSingleResponse } from '../../app/services/portfolio/portfolio.service';

@Injectable()
export class PortfolioActions {

    static PROJECTS_GET = 'PROJECTS_GET'
    static PROJECTS_GET_START = 'PROJECTS_GET_START'
    static PROJECTS_GET_RESPONSE = 'PROJECTS_GET_RESPONSE'
    static PROJECTS_GET_ERROR = 'PROJECTS_GET_ERROR'
    static PROJECTS_SET_FILTER = 'PROJECTS_SET_FILTER'
    static PROJECTS_SET_CATEGORY = 'PROJECTS_SET_CATEGORY'

    static PROJECTS_GET_SINGLE = 'PROJECTS_GET_SINGLE'
    static PROJECTS_GET_SINGLE_START = 'PROJECTS_GET_SINGLE_START'
    static PROJECTS_GET_SINGLE_RESPONSE = 'PROJECTS_GET_SINGLE_RESPONSE'
    static PROJECTS_GET_SINGLE_ERROR = 'PROJECTS_GET_SINGLE_ERROR'

    
    @dispatch()
    getProjects(): FluxStandardAction<{}, {}> {
        return {
            type: PortfolioActions.PROJECTS_GET,
            meta: {},
            payload: {}
        }
    }

    getProjectsInternal(): FluxStandardAction<{}, {}> {
        return {
            type: PortfolioActions.PROJECTS_GET,
            meta: {},
            payload: {}
        }
    }
    
    getProjectsStart(): FluxStandardAction<{}, {}> {
        return {
            type: PortfolioActions.PROJECTS_GET_START,
            meta: {},
            payload: {}
        }
    }
    
    getProjectsResponse(response: IProjectsResponse): FluxStandardAction<{}, {}> {
        return {
            type: PortfolioActions.PROJECTS_GET_RESPONSE,
            meta: {},
            payload: {response: response}
        }
    }
    
    getProjectsError(error: Error): FluxStandardAction<{}, {}> {
        return {
            type: PortfolioActions.PROJECTS_GET_ERROR,
            meta: {},
            payload: error
        }
    }

    @dispatch()
    setProjectsFilter(key: string): FluxStandardAction<{}, {}> {
        return {
            type: PortfolioActions.PROJECTS_SET_FILTER,
            meta: {},
            payload: {filter: key}
        }
    }

    @dispatch()
    setProjectsCategory(key: string): FluxStandardAction<{}, {}> {
        return {
            type: PortfolioActions.PROJECTS_SET_CATEGORY,
            meta: {},
            payload: {category: key}
        }
    }

    @dispatch()
    getSingleProject(projectId: string): FluxStandardAction<{}, {}> {
        return {
            type: PortfolioActions.PROJECTS_GET_SINGLE,
            meta: {},
            payload: { projectId: projectId}
        }
    }
    
    getSingleProjectStart(): FluxStandardAction<{}, {}> {
        return {
            type: PortfolioActions.PROJECTS_GET_SINGLE_START,
            meta: {},
            payload: {}
        }
    }
    
    getSingleProjectResponse(response: IProjectSingleResponse): FluxStandardAction<{}, {}> {
        return {
            type: PortfolioActions.PROJECTS_GET_SINGLE_RESPONSE,
            meta: {},
            payload: {response: response}
        }
    }
    
    getSingleProjectError(error: Error): FluxStandardAction<{}, {}> {
        return {
            type: PortfolioActions.PROJECTS_GET_SINGLE_ERROR,
            meta: {},
            payload: error
        }
    }
}