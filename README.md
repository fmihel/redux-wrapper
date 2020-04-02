# redux-wrapper
Обертка для библиотеки redux, упрощает 
начальную инициализацию библиотеки и содержит несколько вспомогательных
утилит.

## Начало работы / Install

`npm i fmihel-redux-wrapper -D`

## Структура приложения / Application struct
```
[APP]
  |----[REDUX]
  |       |----index.js
  |----[ACTION]
  |       |----action.js
  |       |----reducer.js
  |       |----consts.js
  |       |----index.jss      
  |----index.js
  |----App.jsx
  
```
---------------------------------------------------
``APP\REDUX\index.js``
```javascript
import { Redux } from 'fmihel-redux-wrapper';

const init = {
    ui: {
        msg: 'text',
    },
};

const redux = new Redux(init);

export default redux;
```
---------------------------------------------------
``APP\ACTION\consts.js``

```javascript
export const TEST = 'TEST';
export const TEST_OK = 'TEST_OK';
export const TEST_ERR = 'TEST_ERR';

```
---------------------------------------------------
``APP\ACTION\action.js``
```javascript
import redux from '../REDUX';
import * as consts from './consts';

const doAction = (msg) => (dispatch) => {
    dispatch({
        type: consts.TEST,
    });
    
    setTimeout(()=>{
        if (msg){
            dispatch({
                type: consts.TEST_OK,
                payload: msg,
            });
        }else{
            dispatch({
                type: consts.TEST_ERR,
                payload: 'msg is empty',
            });
        }
    },1000);
};
const action = (msg) => redux.store.dispatch(doAction(msg));
export default action;
```
---------------------------------------------------
``APP\ACTION\reducer.js``
```javascript
import redux from '../REDUX';
import * as consts from './consts';

const is = (action) => Object.keys(consts).indexOf(action.type) >= 0;
const reducer = (store, action) => {
    if (action.type === consts.TEST) {
        return redux.storing(store)
            .assign({ ui: { msg: 'wait...' } })
            .store;
    }
    if (action.type === consts.TEST_OK) {
        return redux.storing(store)
            .assign({ ui: { msg: action.payload } })
            .store;
    }
    if (action.type === consts.TEST_ERR) {
        return redux.storing(store)
            .assign({ ui: { msg: action.payload } })
            .store;
    }

    return store;
};

export default { is, reducer };

```
---------------------------------------------------
``APP\ACTION\index.js``
```javascript
import redux from '../REDUX';
import reducer from './reducer';
import action from './action';

redux.reducers.add(reducer);
export default action;

```
---------------------------------------------------
``APP\App.jsx``
```javascript
import React from 'react';
import {binds} from 'fmihel-browser-lib';
import { connect } from 'react-redux';
import action from './ACTION/';

class App extends React.Component {
    constructor(p) {
        super(p);
        binds(this,  'onPress');
    }

    onPress() {
        action('send message');
    }

    render() {
        const { ui } = this.props.reduxData;
        return (
                <div onClick={this.onPress}>
                    {ui.msg}
                </div>
        );
    }
}

const mapStateToProps = (state) => ({
    reduxData: state,
});

export default connect(mapStateToProps)(App);

```
---------------------------------------------------
``APP\index.js``
```javascript
import redux from './REDUX';
import { Provider } from 'react-redux';
import { DOM } from 'fmihel-browser-lib';
import React from 'react';
import ReacDOM from 'react-dom';
import App from './App.jsx';


$(() => {
    ReacDOM.render(<Provider store={redux.store}> <App /></Provider>, DOM('#app'));
});
```
----
## API

### Redux.reducers.add(object) - добавляет объект редюсер (object это специфичный объект, см    `reducer.js`)
### Redux.add(object) - универсальная ф-ция добавления редюсеров/action
### Redux.store - объект store 
### Redux.storing(data) - утилита для работы с данными в обработчике редюсере 
### Redux.storing(data).assign(data) 
### Redux.actions - коллекция действий, создаваемая с помощью Redux.add({action:{actionName:func}})