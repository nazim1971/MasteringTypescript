{
    //spread operator
    //rest operator
    //destructuring


    //learn spread operator
    const friends: string[] = ['ashik', 'tommy', 'poline'];
    const friends2: string[] = ['piku1', 'piku2','piku3'];
    friends.push(...friends2)

    const mentors = {
        typeScripts: "Mosh",
        reduX: "Anisul haque",
        dbms: 'Bro code'
    }

    const mentors2 ={
        prisma: 'herry',
        next: 'mosh',
        cloud: 'Harish'
    }

    const mentorList = {
        ...mentors,
        ...mentors2
    }
  
    // learn rest operator

    const myFriends = (...fin: string[])=> {
       // console.log(`Hello ${fin1}, ${fin2}, ${fin3}`);
       fin.forEach((f:string)=>console.log(`Hi ${f}`))
    }
    myFriends('mikel',"leao", 'Trumnp')

 }