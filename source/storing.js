
export default class Storing {
    constructor(init) {
        this.store = init;
        return this;
    }

    setStore(store) {
        this.store = { ...store };
    }

    /**
     * Включает ошибку в объект
     * если для нее предусмотрен раздел, в противном случае добавляет ошибк в общую внешнюю структруру store.error
     *
     * @param {object} store вся структура данных
     * @param {string} name  имя подраздела в структуре данных
     * @param {object} error добавляемая ошибка
     */
    error(name, error) {
        const modif = this.store;
        if ('error' in modif[name]) {
            modif[name].error = { ...modif[name].error, ...error };
        } else {
            modif.error = { ...modif.error, ...error };
        }
        return this;
    }

    // eslint-disable-next-line no-underscore-dangle
    _assign(owner, from) {
        const t = this;
        const modif = owner;
        const gettype = (o) => {
            const type = typeof (o);
            return ((type === 'object') && (Array.isArray(o))) ? 'array' : type;
        };
        const typeFrom = gettype(from);
        const typeOwner = gettype(owner);

        if ((typeOwner !== 'object') || (typeFrom !== 'object')) { return from; }

        const keys = Object.keys(from);
        // eslint-disable-next-line array-callback-return
        keys.map((key) => {
            if (key in modif) {
                // eslint-disable-next-line no-underscore-dangle
                modif[key] = t._assign(owner[key], from[key]);
            } else { modif[key] = from[key]; }
        });
        return modif;
    }

    assign(fromObject, deep = false) {
        const self = this;
        const { store } = self;
        const keys = Object.keys(fromObject);
        // eslint-disable-next-line array-callback-return
        keys.map((key) => {
            if (deep) {
                // eslint-disable-next-line no-underscore-dangle
                store[key] = self._assign(store[key], fromObject[key]);
            } else {
                store[key] = {
                    ...store[key],
                    ...fromObject[key],
                };
            }
        });
        return this;
    }
}
