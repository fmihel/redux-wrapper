
interface iReducerModule{
    is:Function,
    reducer:Function,
}
declare class Reducers{
    add(...args:iReducerModule[]):void;
}
declare class Data{
    /**
    * метод добавления инициализирующих данных в начальную структуру.
    * добавление осуществляется только в случае, если не такого
    * же поля в исходной структуре init, в противном случае выбрасывает исключение
    * и данные не добавляются
    */
   attach(data:object):void;
}
export class Redux{
    init:object;
    reducers:Reducers;
    data:Data;
    store:object;
    actions:object;
    constructor(init:object);
    addReducer(reducerObject:iReducerModule):void; 
    addAction(actionObject:object):object;
    add(reducerObject:iReducerModule,actionObject:object):void;
    on(func:Function):Function;
    off(func:Function);
}
