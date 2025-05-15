// hooks/useProjectMutations.ts
import { useMutation, useQueryClient } from '@tanstack/react-query';
import * as projectService from '../services/index';

export const useProjectMutations = () => {
  const queryClient = useQueryClient();

  const createProject = useMutation({
    mutationFn: (newProject: { name: string; description: string }) =>
      projectService.createProject(newProject.name, newProject.description),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
    },
  });

  const editProject = useMutation({
    mutationFn: (updatedProject: { id: string; name: string; description: string }) =>
      projectService.editProject(updatedProject.id, updatedProject.name, updatedProject.description),
    onSuccess: (_data, variables) => {
        queryClient.invalidateQueries({ queryKey: ['projects'] });
        queryClient.invalidateQueries({ queryKey: ['projects', variables.id] });
    },
  });

  const deleteProject = useMutation({
    mutationFn: (id: string) => projectService.deleteProject(id),
    onSuccess: (_data, id) => {
      queryClient.invalidateQueries({ queryKey: ['projects', id] });
    },
  });

  return { createProject, editProject, deleteProject };
};
