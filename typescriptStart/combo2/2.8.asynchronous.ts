{
    // Promise
    
    type Todo = {
        id: number;
        userId : number;
        title: string;
        completed: false;
    }
    const getTodo = async (): Promise<Todo> =>{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log(data);
        return data;
       
    }
    getTodo();

    
    //simulate
    type Something = {Something: string}
    const createPromise = (): Promise<Something> => {
        return new Promise ((resolve, reject) => {
           const data : Something = {Something: "Something"};
           if(data){
            resolve(data)
           } else {
            reject ("Failed to load data")
           }
        })
    }

    //calling create promise function
    const showData = async () : Promise<Something> =>{
        const data : Something = await createPromise();
        console.log(data);
        return data;
    }
    showData();
    //
}