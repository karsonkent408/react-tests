import React, { useState, Suspense } from 'react';
import { Modal } from '../components/modal';
import { type Project } from '../features/projects/types';
import { useProjectMutations } from '../features/projects/handlers/index';
import { ProjectListSkeleton } from '../features/projects/components/projectListSkeleton';

const delayRender = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const ProjectList = React.lazy(() => delayRender(3000).then(() => import('../features/projects/components/projectList')));


const Projects = () => {
    const { createProject, editProject, deleteProject } = useProjectMutations();

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [modalType, setModalType] = useState<'create' | 'edit' | 'delete'>('create')
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)

    const handleModalOpen = (project: Project | null, type: 'create' | 'edit' | 'delete') => {
        setSelectedProject(project)
        setModalType(type)
        setIsModalOpen(true)
    }

    const handleModalClose = () => {
        setIsModalOpen(false)
        setSelectedProject(null)
        setModalType('create')
    }


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get('name') as string;
        const description = formData.get('description') as string;
    
        switch (modalType) {
            case 'create':
                createProject.mutate({ name, description });
                break;
            case 'edit':
                if (selectedProject) {
                    editProject.mutate({ id: selectedProject._id, name, description });
                }
                break;
            case 'delete':
                if (selectedProject) {
                    deleteProject.mutate(selectedProject._id);
                }
                break;
        }
        handleModalClose();
    }

    return (
        <>
        { isModalOpen && (
            <Modal setIsOpen={handleModalClose}>
                <p>{modalType === 'create' ? 'Create Project' : modalType === 'edit' ? 'Edit Project' : 'Delete Project'}</p>
                <form className='flex flex-col gap-2 space-y-2 pt-4' onSubmit={handleSubmit}>
                    {(modalType === 'create' || modalType === 'edit') && (
                        <>
                            <input className='border-2 border-gray-300 rounded-md p-2' name='name' type="text" placeholder='Name' defaultValue={selectedProject?.name} />
                            <input className='border-2 border-gray-300 rounded-md p-2' name='description' type="text" placeholder='Description' defaultValue={selectedProject?.description} />
                            <button className='bg-blue-500 p-2 w-full h-10 rounded-md hover:cursor-pointer'>{modalType === 'create' ? 'Create' : 'Edit'}</button>
                        </>
                    )}
                    {modalType === 'delete' && (
                        <>
                            <p>Are you sure you want to delete this project?</p>
                            <button className='bg-blue-500 p-2 w-full h-10 rounded-md hover:cursor-pointer'>Delete</button>
                        </>
                    )}
                </form>
            </Modal>
        )}
        <div className="flex flex-col w-full justify-center items-center">
            <h1 className="text-2xl font-bold pb-8">Projects</h1>
            <div className="flex flex-col w-full justify-center items-center">
                <div className="flex flex-row w-full justify-end items-end">
                    <button className="bg-blue-400 p-2 w-10 h-10 rounded-md hover:cursor-pointer hover:bg-blue-500" onClick={() => handleModalOpen(null, 'create')}>+</button>
                </div>
                <Suspense fallback={<ProjectListSkeleton />}>
                    <ProjectList handleModalOpen={handleModalOpen} />
                </Suspense>
            </div>
        </div>


        </>
    );
  };
  
  export default Projects;