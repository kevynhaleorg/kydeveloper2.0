import { Injectable } from "../../../node_modules/@angular/core";
import { AboutService, BlogService } from "../../app/services";
import { AboutActions, BlogActions } from "..";
import { EpicCreator } from "../../store/root.model";
import { EpicMiddleware } from "../../../node_modules/redux-observable";

@Injectable()
export class BlogEpics implements EpicCreator {

    constructor(
        private _actions: BlogActions,
        private _blogService: BlogService) {}

    createEpics(): EpicMiddleware<any, any, any, any>[] {
        return []
    }


}