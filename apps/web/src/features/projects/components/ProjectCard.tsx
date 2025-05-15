import type { Project } from "../types"

interface ProjectCardProps {
    project: Project
    handleModalOpen: (project: Project, type: 'edit' | 'delete') => void
}

const ProjectCard = ({ project, handleModalOpen }: ProjectCardProps) => {
    return (
        <div className="flex flex-row w-full justify-between items-center border-2 border-gray-300 rounded-md p-4">
                                <div className="flex flex-col">
                                    <a href={`/projects/${project._id}`} className="text-lg font-bold hover:cursor-pointer hover:underline">{project.name}</a>
                                    <p className="text-sm text-gray-500">{project.description}</p>
                                </div>
                                <div className="flex flex-row justify-between items-center gap-2 pl-8">
                                    <button className="bg-gray-300 p-2 w-full h-10 rounded-md hover:cursor-pointer hover:bg-gray-400" onClick={() => handleModalOpen(project, 'edit')}>Edit</button>
                                    <button className="bg-red-400 p-2 w-full h-10 rounded-md hover:cursor-pointer hover:bg-red-500" onClick={() => handleModalOpen(project, 'delete')}>Delete</button>
                                </div>
                            </div>
    )
}

export default ProjectCard