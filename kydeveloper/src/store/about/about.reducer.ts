import { IReadingListResponse, IReadingItem, IResumeResponse, IPresentationSummary, IMilestone } from "../../app/services/about/about.service";
import { AboutActions } from "../../actions";


export interface IAboutReadingListState {
  loading: boolean;
  error: boolean;
  hasMore: false;
  page: number;
  pageSize: number;
  category: string;
  readingList: Array<IReadingItem>;
}

export interface IAboutReadingItemState {
  loading: boolean;
  error: boolean;
  item: IReadingItem;
}

export interface IAboutRecommendBookState {
  loading: boolean;
  error: boolean;
  recommended: boolean;
}

export interface IAboutBiographyState {
  loading: boolean;
  error: boolean;
  biography: string;
}

export interface IAboutResumeState {
  loading: boolean;
  error: boolean;
  resume: IResumeResponse;
}

export interface IAboutPresentationsState {
  loading: boolean;
  error: boolean;
  presentations: Array<IPresentationSummary>;
}

export interface IAboutRequestPresentationState {
  loading: boolean;
  error: boolean;
}

export interface IAboutMilestonesState {
  milestones: IMilestone[]
  loading: boolean;
  error: boolean
}

export interface IAboutState {
  readingList: IAboutReadingListState;
  readingItem: IAboutReadingItemState;
  recommendBook: IAboutRecommendBookState;
  biography: IAboutBiographyState;
  resume: IAboutResumeState;
  presentations: IAboutPresentationsState;
  requestPresentation: IAboutRequestPresentationState;
  milestones: IAboutMilestonesState;
}


const READING_LIST_INITIAL_STATE: IAboutReadingListState = {
  loading: false,
  error: false,
  hasMore: false,
  page: 0,
  pageSize: 10,
  category: 'all',
  readingList: []
}

const INITIAL_STATE: IAboutState = {
    readingList: READING_LIST_INITIAL_STATE,
    readingItem: {
      loading: false,
      error: false,
      item: null
    },
    recommendBook: {
      loading: false,
      error: false,
      recommended:false
    },
    biography: {
      loading: false,
      error: false,
      biography: null
    },
    resume: {
      loading: false,
      error: false,
      resume: null
    },
    presentations: {
      loading: false,
      error: false,
      presentations: []
    },
    requestPresentation: {
      loading: false,
      error: false
    },
    milestones: {
      milestones: [],
      loading: false,
      error: false
    }
}

export function aboutReducer(
  state: IAboutState = INITIAL_STATE,
  action: any): any {

  switch(action.type) {

    // READING LIST

    case AboutActions.ABOUT_GET_READING_LIST_START: {
      return {
        ...state,
        readingList: {
          ...state.readingList,
          loading: true,
          error: false
        }      
      }
    }

    case AboutActions.ABOUT_SET_READING_LIST_CATEGORY: {
      return {
        ...state,
        readingList: {
          ...READING_LIST_INITIAL_STATE,
          category: action.payload
        }      
      }
    }

    case AboutActions.ABOUT_GET_READING_LIST_RESET: {
      return {
        ...state,
        readingList: {
          ...READING_LIST_INITIAL_STATE
        }      
      }
    }

    case AboutActions.ABOUT_GET_READING_LIST_RESPONSE: {
      return {
        ...state,
        readingList: {
          ...state.readingList,
          loading: false,
          readingList: state.readingList.readingList.concat(action.payload.results),
          page: state.readingList.page + 1,
          hasMore: action.payload.length === state.readingList.pageSize
        }      
      }
    }

    case AboutActions.ABOUT_GET_READING_LIST_ERROR: {
      return {
        ...state,
        readingList: {
          ...state.readingList,
          loading: false,
          error: true
        }      
      }
    }

    // READING ITEM

    case AboutActions.ABOUT_GET_READING_ITEM_START: {
      return {
        ...state,
        readingItem: {
          ...state.readingItem,
          loading: true,
          error: false
        }      
      }
    }

    case AboutActions.ABOUT_GET_READING_ITEM_RESPONSE: {
      return {
        ...state,
        readingItem: {
          ...state.readingItem,
          loading: false,
          item: action.payload
        }      
      }
    }

    case AboutActions.ABOUT_GET_READING_ITEM_ERROR: {
      return {
        ...state,
        readingItem: {
          ...state.readingItem,
          loading: false,
          error: true
        }      
      }
    }

    // RECOMMEND BOOK

    case AboutActions.ABOUT_RECOMMEND_BOOK_START: {
      return {
        ...state,
        recommendBook: {
          ...state.recommendBook,
          loading: true,
          error: false
        }      
      }
    }

    case AboutActions.ABOUT_RECOMMEND_BOOK_RESPONSE: {
      return {
        ...state,
        recommendBook: {
          ...state.recommendBook,
          loading: false,
          recommended: true
        }      
      }
    }

    case AboutActions.ABOUT_RECOMMEND_BOOK_ERROR: {
      return {
        ...state,
        recommendBook: {
          ...state.recommendBook,
          loading: false,
          error: true
        }      
      }
    }

    // BIOGRAPHY

    case AboutActions.ABOUT_GET_BIOGRAPHY_START: {
      return {
        ...state,
        biography: {
          ...state.biography,
          loading: true,
          error: false
        }      
      }
    }

    case AboutActions.ABOUT_GET_BIOGRAPHY_RESPONSE: {
      return {
        ...state,
        biography: {
          ...state.biography,
          loading: false,
          biography: action.payload
        }      
      }
    }

    case AboutActions.ABOUT_GET_BIOGRAPHY_ERROR: {
      return {
        ...state,
        biography: {
          ...state.biography,
          loading: false,
          error: true
        }      
      }
    }

    // RESUME

    case AboutActions.ABOUT_GET_RESUME_START: {
      return {
        ...state,
        resume: {
          ...state.resume,
          loading: true,
          error: false
        }      
      }
    }

    case AboutActions.ABOUT_GET_RESUME_RESPONSE: {
      return {
        ...state,
        resume: {
          ...state.resume,
          loading: false,
          resume: action.payload
        }      
      }
    }

    case AboutActions.ABOUT_GET_RESUME_ERROR: {
      return {
        ...state,
        resume: {
          ...state.resume,
          loading: false,
          error: true
        }      
      }
    }

    // PRESENTATIONS

    case AboutActions.ABOUT_GET_PRESENTATIONS_START: {
      return {
        ...state,
        presentations: {
          ...state.presentations,
          loading: true,
          error: false
        }      
      }
    }

    case AboutActions.ABOUT_GET_PRESENTATIONS_RESPONSE: {
      return {
        ...state,
        presentations: {
          ...state.presentations,
          loading: false,
          presentations: action.payload
        }      
      }
    }

    case AboutActions.ABOUT_GET_PRESENTATIONS_ERROR: {
      return {
        ...state,
        presentations: {
          ...state.presentations,
          loading: false,
          error: true
        }      
      }
    }

    // REQUEST PRESENTATION

    case AboutActions.ABOUT_REQUEST_PRESENTATION_START: {
      return {
        ...state,
        requestPresentation: {
          ...state.requestPresentation,
          loading: true,
          error: false
        }      
      }
    }

    case AboutActions.ABOUT_REQUEST_PRESENTATION_RESPONSE: {
      return {
        ...state,
        requestPresentation: {
          ...state.requestPresentation,
          loading: false
        }      
      }
    }

    case AboutActions.ABOUT_REQUEST_PRESENTATION_ERROR: {
      return {
        ...state,
        requestPresentation: {
          ...state.requestPresentation,
          loading: false,
          error: true
        }      
      }
    }


    // Milestones

    case AboutActions.ABOUT_REQUEST_MILESTONES_START: {
      return {
        ...state,
        milestones: {
          ...state.milestones,
          loading: true,
          error: false
        }      
      }
    }

    case AboutActions.ABOUT_REQUEST_MILESTONES_RESPONSE: {
      return {
        ...state,
        milestones: {
          ...state.milestones,
          loading: false,
          milestones: action.payload.response.milestones
        }      
      }
    }

    case AboutActions.ABOUT_REQUEST_MILESTONES_ERROR: {
      return {
        ...state,
        milestones: {
          ...state.milestones,
          loading: false,
          error: true
        }      
      }
    }



    default:
      return state

  }
}
