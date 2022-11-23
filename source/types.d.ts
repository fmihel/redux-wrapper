
interface iReducerModule{
    is:Function,
    reducer:Function,
}
declare class Reducers{
    add(...args:iReducerModule[]):void;
}
export class Redux{
    init:object;
    reducers:Reducers;
    store:object;
    actions:object;
    constructor(init:object);
    addReducer(reducerObject:iReducerModule):void; 
    addAction(actionObject:object):object;
    add(reducerObject:iReducerModule,actionObject:object):void;
    on(func:Function):Function;
    off(func:Function);
}
