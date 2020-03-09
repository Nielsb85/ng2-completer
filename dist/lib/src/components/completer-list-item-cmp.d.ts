import { OnInit } from "@angular/core";
import * as i0 from "@angular/core";
export interface MatchPart {
    isMatch: boolean;
    text: string;
}
export declare class CompleterListItemCmp implements OnInit {
    text: string;
    searchStr: string;
    matchClass: string;
    type: string;
    parts: MatchPart[];
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<CompleterListItemCmp>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CompleterListItemCmp, "completer-list-item", never, { "text": "text"; "searchStr": "searchStr"; "matchClass": "matchClass"; "type": "type"; }, {}, never>;
}
