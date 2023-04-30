function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

function change_dog_pic(action, dog)
{
    switch (action) {
        case "Стоять":
            dog.src = "images/standing.png"
            break;
        case "Лежать":
            dog.src = "images/lying.png"
            break;
        case "Кушать":
            dog.src = "images/eating.png"
            break;
        case "Эх":
            dog.src = "images/eh.png"
            break;
        case "Дай":
            dog.src = "images/paw.png"
            break; 
        case "Сидеть":
            dog.src = "images/sitting.png"
            break;
    }
}

function change_person_pic(action, person)
{
    person.src = "images/neutral.png"
    switch (action) {
        case "Ура":
            person.src = "images/happy.png"
            break;
        case "Не ура":
            person.src = "images/wrong.png"
            break;
    }
}

function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}

function lye()
{
    command = "Лежать";
    listen_to_command(command)
}

function sit()
{
    command = "Сидеть"
    listen_to_command(command)
}

function stand()
{
    command = "Стоять"
    listen_to_command(command)
}
function paw()
{
    command = "Дай"
    listen_to_command(command)
}

async function listen_to_command(command)
{
    person.src = "images/neutral.png"
    person = document.getElementById("person");
    comment = document.getElementById("comment")
    dog = document.getElementById("dog");
    dog_chooses_what_to_do = getRandomItem(["Дай", "Стоять", "Сидеть", "Лежать"]);
    change_dog_pic(dog_chooses_what_to_do, dog);

    while (command != dog_chooses_what_to_do)
    {
        change_person_pic("Не ура", person);
        comment.innerText = "Неправильно!"
        await delay(1000);
        dog_chooses_what_to_do = getRandomItem(["Дай", "Стоять", "Сидеть", "Лежать"]);
        change_dog_pic(dog_chooses_what_to_do, dog);
        console.log(command)
        console.log(dog_chooses_what_to_do)
        
    }
    change_person_pic("Ура", person)
    comment.innerText = "Правильно! Молодец! Кушать!"
    await delay(2000);
    change_dog_pic("Кушать", dog);
}