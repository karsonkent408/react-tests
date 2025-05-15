import { useSuspenseQuery } from "@tanstack/react-query";
import { getProject } from "../services";
import { Link } from "react-router-dom";
import {type Project } from "../types";

interface ProjectDetailCardProps {
    project: Project;
    handleModalOpen: (type: 'edit' | 'delete') => void;
}

const ProjectDetailCard = ({ project, handleModalOpen }: ProjectDetailCardProps) => {




    
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center gap-4">
                        <Link to="/projects" className="text-blue-500 hover:underline">
                            ← Back to Projects
                        </Link>
                        <h1 className="text-2xl font-bold">{project.name}</h1>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={() => handleModalOpen('edit')}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => handleModalOpen('delete')}
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                        >
                            Delete
                        </button>
                    </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <h2 className="text-lg font-semibold mb-2">Description</h2>
                    <p className="text-gray-700 whitespace-pre-line">{project.description}</p>
                </div>
                
                {/* Additional project details can go here */}
                <div className="border-t border-gray-200 pt-6 mt-6">
                    <h2 className="text-lg font-semibold mb-4">Project Details</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <span className="text-gray-500">ID:</span>
                            <p className="font-mono text-sm">{project._id}</p>
                        </div>
                        <div>
                            <span className="text-gray-500">Created:</span>
                            <p>{new Date().toLocaleDateString()}</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ProjectDetailCard;