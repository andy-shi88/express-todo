import BaseService from './BaseService';
import Task from '../models/Task';

export default class TaskService extends BaseService {
    /**
     * Task service class for handling additional functionalities
     * and specifying model.
     */
    constructor() {
        super(new Task());
    }

}