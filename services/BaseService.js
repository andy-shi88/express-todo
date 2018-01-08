export default class BaseService {
    /**
     * base service class for handling basic crud
     * @param {Model} model 
     */
    constructor(model) {
        this.model = model;
    }

    /**
     * find all rows
     * @param {func} callback 
     */
    findAll(callback) {
        this.model.findAll(callback);
    }
    
    /**
     * show row with provided id
     * @param {int} id 
     * @param {func} callback 
     */
    show(id, callback) {
        this.model.show(id, callback);
    }

    /**
     * create new rows
     * @param {object} payload 
     * @param {func} callback 
     */
    create(payload, callback) {
        this.model.create(payload, callback);
    }

    /**
     * delete rows with provided id
     * @param {int} id 
     * @param {func} callback 
     */
    delete(id, callback) {
        this.model.delete(id, callback);
    }

    /**
     * update rows with provided id and payload
     * @param {int} id 
     * @param {object} payload 
     * @param {func} callback 
     */
    update(id, payload, callback) {
        this.model.update(id, payload, callback);
    }
}