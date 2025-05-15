import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { Modal } from '../components/modal';
import { useProjectMutations } from '../features/projects/handlers/index';
import { ProjectDetailSkeleton } from '../features/projects/components/projectDetailSkeleton';
import ProjectDetailCard from '../features/projects/components/projectDetailCard';
import { type Project } from '../features/projects/types';
import { getProject } from '../features/projects/services';
import { useQuery } from '@tanstack/react-query';

const ProjectDetail = () => {
    const { id } = useParams();
    const { data: project, isLoading, isError } = useQuery({
        queryKey: ['project', id],
        queryFn: () => getProject(id as string)
    });
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [modalType, setModalType] = useState<'edit' | 'delete'>('edit');
    const { editProject, deleteProject } = useProjectMutations();

    const handleModalOpen = (type: 'edit' | 'delete') => {
        setModalType(type);
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get('name') as string;
        const description = formData.get('description') as string;
    
        if (modalType === 'edit' && project?._id) {
            editProject.mutate({ 
               id: project?._id as string,
               name, 
               description 
            });
        } else if (modalType === 'delete' && project?._id) {
            deleteProject.mutate(project?._id as string);
            // Redirect to projects page after deletion
            window.location.href = '/projects';
        }
        
        handleModalClose();
    };

    if (isLoading) {
        return <ProjectDetailSkeleton />;
    }

    if (isError || !project) {
        return (
            <div className="max-w-4xl mx-auto p-6 text-center">
                <h2 className="text-2xl font-bold text-red-500 mb-4">Error loading project</h2>
                <p className="mb-6">We couldn't load the project details.</p>
                <Link to="/projects" className="text-blue-500 hover:underline">
                    Return to Projects
                </Link>
            </div>
        );
    }


    return (
        <>
            {isModalOpen && (
                <Modal setIsOpen={handleModalClose}>
                    <h3 className="text-xl font-semibold mb-4">
                        {modalType === 'edit' ? 'Edit Project' : 'Delete Project'}
                    </h3>
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                        {modalType === 'edit' && (
                            <>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        defaultValue={project?.name}
                                        className="border-2 border-gray-300 rounded-md p-2 w-full"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                                        Description
                                    </label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        rows={4}
                                        defaultValue={project?.description}
                                        className="border-2 border-gray-300 rounded-md p-2 w-full"
                                    />
                                </div>
                                <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
                                    Save Changes
                                </button>
                            </>
                        )}
                        {modalType === 'delete' && (
                            <>
                                <p className="text-gray-700">
                                    Are you sure you want to delete "{project?.name}"? This action cannot be undone.
                                </p>
                                <div className="flex gap-3 mt-4">
                                    <button 
                                        type="button" 
                                        onClick={handleModalClose} 
                                        className="flex-1 bg-gray-200 p-2 rounded-md hover:bg-gray-300"
                                    >
                                        Cancel
                                    </button>
                                    <button 
                                        type="submit" 
                                        className="flex-1 bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </>
                        )}
                    </form>
                </Modal>
            )}

                <ProjectDetailCard project={project} handleModalOpen={handleModalOpen} />
        </>
    );
};

export default ProjectDetail;