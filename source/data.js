
export default class Data {
    constructor(init) {
        this.cond = {};
        this.init = init;
    }

    /**
    * метод добавления инициализирующих данных в начальную структуру.
    * добавление осуществляется только в случае, если не такого
    * же поля в исходной структуре init, в противном случае выбрасывает исключение
    * и данные не добавляются
    * @param {object} data
    */
    attach(data) {
        const keysData = Object.keys(data);
        const keysInit = Object.keys(this.init);
        for (let i = 0; i < keysData.length; i++) {
            if (keysInit.includes(keysData[i])) {
                const msg = `Can\`t add data to init struct, duplicate field "${keysData[i]}" in init.`;
                console.group('duplicate field');
                console.error(msg);
                console.error('data', data);
                console.error('init', this.init);
                console.groupEnd('duplicate field');
                throw msg;
            }
        }
        keysData.forEach((key) => { this.init[key] = data[key]; });
    }

}
