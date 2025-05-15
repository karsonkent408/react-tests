import BaseService from './base.service';
import { Project, type IProject } from 'models';

class ProjectService extends BaseService<IProject> {
    constructor() {
        super(Project);
    }
    
}

export const projectService = new ProjectService();