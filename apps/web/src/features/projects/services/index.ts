export const listProjects = async (page: number, limit: number) => {
    const response = await fetch('http://localhost:3000/projects/list', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ page, limit })
    });
    const data = await response.json();
    console.log('Fetched data:', data);

    return data;
}

export const getProject = async (id: string) => {
    const response = await fetch(`http://localhost:3000/projects/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    const data = await response.json();
    console.log('Fetched data:', data);

    return data;
}

export const createProject = async (name: string, description: string) => {
    const response = await fetch('http://localhost:3000/projects', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, description })
    })
    return response.json();
}

export const deleteProject = async (id: string) => {
    const response = await fetch(`http://localhost:3000/projects/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    return response.json();
}

export const editProject = async (id: string, name: string, description: string) => {
    try {
        const response = await fetch(`http://localhost:3000/projects/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, description })
        });
        
        if (!response.ok) {
            // Read and log error for debugging
            const errorText = await response.text();
            console.error(`Error response: ${errorText}`);
            throw new Error(`Server error: ${response.status}`);
        }
        
        // Only read the body once
        return response.json();
    } catch (error) {
        console.error('Edit project error:', error);
        throw error;
    }
}