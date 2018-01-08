import BaseService from './BaseService';
import Task from '../models/task';

export default class TaskService extends BaseService {
    /**
     * Task service class for handling additional functionalities
     * and specifying model.
     */
    constructor() {
        super(new Task());
    }

}