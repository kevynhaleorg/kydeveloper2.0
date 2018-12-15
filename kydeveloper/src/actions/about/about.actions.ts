import { Injectable } from "../../../node_modules/@angular/core";
import { dispatch } from "../../../node_modules/@angular-redux/store";
import { FluxStandardAction } from "../../../node_modules/flux-standard-action";
import { IReadingListRequest, IReadingListResponse, IReadingItem, IResumeResponse, IPresentationSummary, IPresentationRequest, IBookRecommendationRequest } from "../../app/services/about/about.service";

@Injectable()
export class AboutActions {

    // GET READING ITEM
    static ABOUT_GET_READING_LIST_RESET = "ABOUT_GET_READING_LIST_RESET"
    static ABOUT_GET_READING_LIST = "ABOUT_GET_READING_LIST"
    static ABOUT_SET_READING_LIST_CATEGORY = "ABOUT_SET_READING_LIST_CATEGORY"
    static ABOUT_GET_READING_LIST_START = "ABOUT_GET_READING_LIST_START"
    static ABOUT_GET_READING_LIST_RESPONSE = "ABOUT_GET_READING_LIST_RESPONSE"
    static ABOUT_GET_READING_LIST_ERROR = "ABOUT_GET_READING_LIST_ERROR"

    // GET READING ITEM
    static ABOUT_GET_READING_ITEM = "ABOUT_GET_READING_ITEM"
    static ABOUT_GET_READING_ITEM_START = "ABOUT_GET_READING_ITEM_START"
    static ABOUT_GET_READING_ITEM_RESPONSE = "ABOUT_GET_READING_ITEM_RESPONSE"
    static ABOUT_GET_READING_ITEM_ERROR = "ABOUT_GET_READING_ITEM_ERROR"

    // RECOMMEND BOOK
    static ABOUT_RECOMMEND_BOOK = "ABOUT_RECOMMEND_BOOK"
    static ABOUT_RECOMMEND_BOOK_START = "ABOUT_RECOMMEND_BOOK_START"
    static ABOUT_RECOMMEND_BOOK_RESPONSE = "ABOUT_RECOMMEND_BOOK_RESPONSE"
    static ABOUT_RECOMMEND_BOOK_ERROR = "ABOUT_RECOMMEND_BOOK_ERROR"

    // GET BIOGRAPHY
    static ABOUT_GET_BIOGRAPHY = "ABOUT_GET_BIOGRAPHY"
    static ABOUT_GET_BIOGRAPHY_START = "ABOUT_GET_BIOGRAPHY_START"
    static ABOUT_GET_BIOGRAPHY_RESPONSE = "ABOUT_GET_BIOGRAPHY_RESPONSE"
    static ABOUT_GET_BIOGRAPHY_ERROR = "ABOUT_GET_BIOGRAPHY_ERROR"

    // GET RESUME
    static ABOUT_GET_RESUME = "ABOUT_GET_RESUME"
    static ABOUT_GET_RESUME_START = "ABOUT_GET_RESUME_START"
    static ABOUT_GET_RESUME_RESPONSE = "ABOUT_GET_RESUME_RESPONSE"
    static ABOUT_GET_RESUME_ERROR = "ABOUT_GET_RESUME_ERROR"

    // GET PRESENTATIONS
    static ABOUT_GET_PRESENTATIONS = "ABOUT_GET_PRESENTATIONS"
    static ABOUT_GET_PRESENTATIONS_START = "ABOUT_GET_PRESENTATIONS_START"
    static ABOUT_GET_PRESENTATIONS_RESPONSE = "ABOUT_GET_PRESENTATIONS_RESPONSE"
    static ABOUT_GET_PRESENTATIONS_ERROR = "ABOUT_GET_PRESENTATIONS_ERROR"

    // REQUEST PRESENTATION
    static ABOUT_REQUEST_PRESENTATION = "ABOUT_REQUEST_PRESENTATION"
    static ABOUT_REQUEST_PRESENTATION_START = "ABOUT_REQUEST_PRESENTATION_START"
    static ABOUT_REQUEST_PRESENTATION_RESPONSE = "ABOUT_REQUEST_PRESENTATION_RESPONSE"
    static ABOUT_REQUEST_PRESENTATION_ERROR = "ABOUT_REQUEST_PRESENTATION_ERROR"

    // ACTIONS:

    // GET READING ITEM ACTIONS

    @dispatch()
    getReadingList(): FluxStandardAction<{}, {}> {
        return {
            type: AboutActions.ABOUT_GET_READING_LIST,
            meta: {},
            payload: {}
        }
    }

    @dispatch()
    getReadingListReset(): FluxStandardAction<{}, {}> {
        return {
            type: AboutActions.ABOUT_GET_READING_LIST_RESET,
            meta: {},
            payload: {}
        }
    }

    @dispatch()
    setReadingListCategory(category: string): FluxStandardAction<{}, {}> {
        return {
            type: AboutActions.ABOUT_SET_READING_LIST_CATEGORY,
            meta: {},
            payload: category
        }
    }

    getReadingListStart(): FluxStandardAction<{}, {}> {
        return {
            type: AboutActions.ABOUT_GET_READING_LIST_START,
            meta: {},
            payload: {}
        }
    }

    getReadingListResponse(response: IReadingListResponse): FluxStandardAction<{}, {}> {
        return {
            type: AboutActions.ABOUT_GET_READING_LIST_RESPONSE,
            meta: {},
            payload: response
        }
    }

    getReadingListError(error: Error): FluxStandardAction<{}, {}> {
        return {
            type: AboutActions.ABOUT_GET_READING_LIST_ERROR,
            meta: {},
            payload: error
        }
    }

    // GET READING ITEM ACTIONS

    @dispatch()
    getReadingItem(id: string): FluxStandardAction<{}, {}> {
        return {
            type: AboutActions.ABOUT_GET_READING_ITEM,
            meta: {},
            payload: id
        }
    }

    getReadingItemStart(): FluxStandardAction<{}, {}> {
        return {
            type: AboutActions.ABOUT_GET_READING_ITEM_START,
            meta: {},
            payload: {}
        }
    }

    getReadingItemResponse(response: IReadingItem): FluxStandardAction<{}, {}> {
        return {
            type: AboutActions.ABOUT_GET_READING_ITEM_RESPONSE,
            meta: {},
            payload: response
        }
    }

    getReadingItemError(error: Error): FluxStandardAction<{}, {}> {
        return {
            type: AboutActions.ABOUT_GET_READING_ITEM_ERROR,
            meta: {},
            payload: error
        }
    }

    // RECOMMEND BOOK ACTIONS

    @dispatch()
    recommendBook(request: IBookRecommendationRequest): FluxStandardAction<{}, {}> {
        return {
            type: AboutActions.ABOUT_RECOMMEND_BOOK,
            meta: {},
            payload: request
        }
    }

    recommendBookStart(): FluxStandardAction<{}, {}> {
        return {
            type: AboutActions.ABOUT_RECOMMEND_BOOK_START,
            meta: {},
            payload: {}
        }
    }

    recommendBookResponse(): FluxStandardAction<{}, {}> {
        return {
            type: AboutActions.ABOUT_RECOMMEND_BOOK_RESPONSE,
            meta: {},
            payload: {}
        }
    }

    recommendBookError(error: Error): FluxStandardAction<{}, {}> {
        return {
            type: AboutActions.ABOUT_RECOMMEND_BOOK_ERROR,
            meta: {},
            payload: error
        }
    }

    // GET BIOGRAPHY ACTIONS

    @dispatch()
    getBiography(): FluxStandardAction<{}, {}> {
        return {
            type: AboutActions.ABOUT_GET_BIOGRAPHY,
            meta: {},
            payload: {}
        }
    }

    getBiographyStart(): FluxStandardAction<{}, {}> {
        return {
            type: AboutActions.ABOUT_GET_BIOGRAPHY_START,
            meta: {},
            payload: {}
        }
    }

    getBiographyResponse(response: string): FluxStandardAction<{}, {}> {
        return {
            type: AboutActions.ABOUT_GET_BIOGRAPHY_RESPONSE,
            meta: {},
            payload: response
        }
    }

    getBiographyError(error: Error): FluxStandardAction<{}, {}> {
        return {
            type: AboutActions.ABOUT_GET_BIOGRAPHY_ERROR,
            meta: {},
            payload: error
        }
    }

    // GET RESUME ACTIONS

    @dispatch()
    getResume(): FluxStandardAction<{}, {}> {
        return {
            type: AboutActions.ABOUT_GET_RESUME,
            meta: {},
            payload: {}
        }
    }

    getResumeStart(): FluxStandardAction<{}, {}> {
        return {
            type: AboutActions.ABOUT_GET_RESUME_START,
            meta: {},
            payload: {}
        }
    }

    getResumeResponse(response: IResumeResponse): FluxStandardAction<{}, {}> {
        return {
            type: AboutActions.ABOUT_GET_RESUME_RESPONSE,
            meta: {},
            payload: response
        }
    }

    getResumeError(error: Error): FluxStandardAction<{}, {}> {
        return {
            type: AboutActions.ABOUT_GET_RESUME_ERROR,
            meta: {},
            payload: error
        }
    }

    // GET PRESENTATIONS ACTIONS

    @dispatch()
    getPresentations(): FluxStandardAction<{}, {}> {
        return {
            type: AboutActions.ABOUT_GET_PRESENTATIONS,
            meta: {},
            payload: {}
        }
    }

    getPresentationsStart(): FluxStandardAction<{}, {}> {
        return {
            type: AboutActions.ABOUT_GET_PRESENTATIONS_START,
            meta: {},
            payload: {}
        }
    }

    getPresentationsResponse(response: Array<IPresentationSummary>): FluxStandardAction<{}, {}> {
        return {
            type: AboutActions.ABOUT_GET_PRESENTATIONS_RESPONSE,
            meta: {},
            payload: response
        }
    }

    getPresentationsError(error: Error): FluxStandardAction<{}, {}> {
        return {
            type: AboutActions.ABOUT_GET_PRESENTATIONS_ERROR,
            meta: {},
            payload: error
        }
    }

    // REQUEST PRESENTATION ACTIONS

    @dispatch()
    requestPresentation(request: IPresentationRequest): FluxStandardAction<{}, {}> {
        return {
            type: AboutActions.ABOUT_REQUEST_PRESENTATION,
            meta: {},
            payload: request
        }
    }

    requestPresentationStart(): FluxStandardAction<{}, {}> {
        return {
            type: AboutActions.ABOUT_REQUEST_PRESENTATION_START,
            meta: {},
            payload: {}
        }
    }

    requestPresentationResponse(): FluxStandardAction<{}, {}> {
        return {
            type: AboutActions.ABOUT_REQUEST_PRESENTATION_RESPONSE,
            meta: {},
            payload: {}
        }
    }

    requestPresentationError(error: Error): FluxStandardAction<{}, {}> {
        return {
            type: AboutActions.ABOUT_REQUEST_PRESENTATION_ERROR,
            meta: {},
            payload: error
        }
    }




}