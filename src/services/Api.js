const base_url = "http://apipersonal.test/api/";

// const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBpcGVyc29uYWwudGVzdC9hcGkvbG9naW4iLCJpYXQiOjE2NzU3MzczMTgsImV4cCI6MTY3NTc0MDkxOCwibmJmIjoxNjc1NzM3MzE4LCJqdGkiOiJDU0JBNjNUUlludlM2dkxkIiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.BwOZ_IlCV7LPim8mOGuJJOrxVm3Gd-HpjqZqPZKyTp4";

export const apiLogin = async (data) =>{
    const req = await fetch(base_url+'login',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Accept': 'application/json'
        },
        body:JSON.stringify(data)
    });

    return req;
}


export const verifyToken = async (token) => {

    const req = await fetch(base_url+'validtoken',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer '+token
         
        }
    });

    return req;
}


export const logout = async (token) =>{
    const req = await fetch(base_url+'logout',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer '+token
         
        }
    });

    return req;
}