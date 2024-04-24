
//problem 1, problem 3, problem 6 
fetch("employees.json")
    .then(function(response){
        return response.json();
    
    })
    
    .then(function(data){
        console.log(data);
    });

//problem 1, problem 3, problem 6
fetch("company.json")
    .then(function(response){
        return response.json();
    
    })
    
    .then(function(data){
        console.log(data);
    });
