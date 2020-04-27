
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
   /** 
    * проверка на последнее изменение данных.
    * @param {any} o - объект сравнения
    * @param {string} key - уникальный ключ/индекс для хранения предыдущего состояния объекта 
   */
   changing(o:any, key:string, param?:object):boolean;
}
export class Storing{

}
export class Redux{
    init:object;
    reducers:Reducers;
    data:Data;
    store:object;
    actions:object;
    constructor(init:object,storing?:Storing);
    addReducer(reducerObject:iReducerModule):void; 
    addAction(actionObject:object):object;
    add(reducerObject:iReducerModule,actionObject:object):void;
    change(state:object):Storing;
}
