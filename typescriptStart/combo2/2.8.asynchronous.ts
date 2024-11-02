{
    // Promise
    
    type Todo = {
        id: number;
        userId: number;
        title: string;
        completed: boolean; // corrected to boolean
    };

    // Fetch API with proper error handling
    const getTodo = async (): Promise<Todo> => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            if (!response.ok) {
                throw new Error('Failed to fetch Todo data');
            }
            const data: Todo = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.error('Error fetching Todo:', error);
            throw error; // rethrow error to handle it where necessary
        }
    };

    getTodo();

    // Simulating a custom promise
    type Something = { Something: string };

    const createPromise = (): Promise<Something> => {
        return new Promise((resolve, reject) => {
            const data: Something = { Something: 'Something' };
            if (data) {
                resolve(data);
            } else {
                reject('Failed to load data');
            }
        });
    };

    // Calling the custom promise function with error handling
    const showData = async (): Promise<Something> => {
        try {
            const data: Something = await createPromise();
            console.log(data);
            return data;
        } catch (error) {
            console.error('Error:', error);
            throw error; // propagate the error upwards
        }
    };

    showData();
}
