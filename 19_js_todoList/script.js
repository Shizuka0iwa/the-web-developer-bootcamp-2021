let command = prompt("What would you like to do?")
let todo = ["creat a todo list", "laundry"];

while (command !== 'quit') {
    if (command === 'new') {
        task = prompt("What would you want to add the todo list?")
        todo[todo.length] = task //option 1
        // todo.push(task);  //option 2
        console.log(`${task} added to list`);
        //command = prompt("What would you like to do?")
    } else if (command === 'list') {
        console.log("*************");
        for (let i = 0; i < todo.length; i++) {
            console.log(`${i}: ${todo[i]}`);
        }
        console.log("*************");
        //command = prompt("What would you like to do?")
    } else if (command === 'delete') {
        const remove = parseInt(prompt("Enter the index number to delete"))
        if (!Number.isNaN(remove)) {
            console.log(`${todo[remove]} deleted`)
            const removedItem = todo.splice(remove, 1)
        } else {
            console.log("Unknown Index")
        }
        
        //todo = removedItem
        
    }
    else {
        console.log("into else")
        //command = prompt("What would you like to do?") 
    }
    command = prompt("What would you like to do?") 
}

console.log("OK, YOU QUIT THE APP");