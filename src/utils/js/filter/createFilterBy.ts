import {pipe} from "../pipe";
import {pick} from "../pick";
import {isEqual} from "../isEqual";
import {cond} from "../cond";

export const createFilterBy = (prop: string) => (id: number) => pipe(pick(prop), isEqual(id), cond);
