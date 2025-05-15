import { type Project } from '../types';
import ProjectCard from './ProjectCard';
import { useSuspenseQuery } from '@tanstack/react-query';
import { listProjects } from '../services';

interface ProjectListProps {
    handleModalOpen: (project: Project, type: 'edit' | 'delete') => void
}

const ProjectList = ({ handleModalOpen }: ProjectListProps) => {

    const { data: projects } = useSuspenseQuery({
        queryKey: ['projects'],
        queryFn: () => listProjects(1, 10)
      });

      if (!projects || projects.length === 0) {
        return <div>No projects found.</div>;
    }


      
    return (
        <>
        
        <ul className='flex flex-col gap-2'>
                    {projects.map((project: Project) => (
                        <li key={project._id}>
                            <ProjectCard project={project} handleModalOpen={handleModalOpen} />
                        </li>
                    ))}
                </ul>
        </>

    )
}

export default ProjectList