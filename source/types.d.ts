
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
     /**
     * изменяет состояние устанавливая в Storing.state его копию
     * @param {object} o - объект, который будет установлен поверх текущего состояния
     * Ex:
     * extend({ui:{ visible:{dialog:true}}})
     * эквивалентно
     * {...state,ui:{...state.ui,visible:{...state.ui.visible,dialog:true}}};
     * @return {this}
    */
   extend(o:object):object;
    /**
     * Включает ошибку в объект
     * если для нее предусмотрен раздел, в противном случае добавляет ошибк
     * в общую внешнюю структруру store.error
     * @param {any}
     * Ex: error('string')  -  store.error.message = 'string
     * Ex: error(Error(...)) - store.error = { message: Error.message,origin:Error)
     * Ex: error({myName: string | Error() })  если store.myName.error определено,
     * то изменит на store.myName.error={message:string|Error.message,origin:string|Error}
     * если store.myName.error не определено, то store.error = { message: string|Error.message,origin:string | Error)
     * @return {this}
    */
   error(o:any):object;
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
    on(func:Function):Function;
    off(func:Function);
}
