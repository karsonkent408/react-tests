import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getProject } from '../features/projects/services';

const ProjectDetail = () => {


    const { id } = useParams();

    const { data: project } = useQuery({
        queryKey: ['project', id],
        queryFn: () => getProject(id as string)
    });

    return (
        <div>
            <p>Project Detail</p>
            <p>{project?.name}</p>
            <p>{project?.description}</p>
        </div>
    )
}   

export default ProjectDetail