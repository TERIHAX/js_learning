class Person {
    constructor (personName, title, quote)
    {
        this.name = personName;
        this.title = title;
        this.quote = quote;
    }
}

let people = [
    new Person("Quandale Dingle", "Average Bozo", "What's up guys! It's Quandale Dingle here! *RUUEHEHEHEHEHEEHE* I have been arrested for multiple crimes *AHHHHHHHHHHHHH* including: Grand theft and Declaring war on the Central Bozo Organization *RUHEHEHEEHEHEHEHEHEHEHE 2x speed*. I will be escaping prison on, FEBRUARY 30TH! After that... I WILL TAKE OVER THE WORLD"),
    new Person("Jayquontavious Cornelius the III", "Famous Prince, Part of the Central Bozo Organization", "Bozo is the way to life, without bozoism, we are not going to be capable to live on Planet Earth, we'd be on Mars."),
    new Person("Queefus Squintillion Pringleton", "High Rank Leader of the Anti-Bozo Goofy Ahh Government", "I HATE BOZOS, JAQUONTAVIOUS CORNELIUS THE III, IM COMING FOR YOU, I'M CATCHING YOU, CORNELIUS."),
    new Person("Juandale Bingleton Jonathan Dingle", "Mexican Brother of Quandale Dingle", "Tipson is my role model, and Quandale Dingle is my favorite brother!"),
    new Person("Da Asian Chingle Tipson Dingle", "*Very* Asian Brother of Quandale Dingle & Juandale Bingleton Jonathan Dingle (Went Missing)", "Last time I got da B+ somefing happen! But dis time I get da D! O no! My asian part of my family coming for me! I need to run!, AAAAAAAAAAAAAAAAAAAAAAAAAA"),
    new Person("Emo Goth Dingle the VI", "The 6th Emo Person in The Legacy of the Dingles (Went Missing)", "THIS IS MY LAST RESORT......... *gkkkk, thump*"),
    new Person("Old Man (Unknown Name)", "Unknown Origin or Title", "Quandale Dingle shall live on my legacy... *thump*")
];

let currentPerson = 0;

//
let nameSpan = document.getElementById("name-span");
let titleSpan = document.getElementById("title-span");
let quoteSpan = document.getElementById("quote-span");
//

document.querySelector("div").addEventListener("click", e => {
    switch (e.target.innerText.toLowerCase())
    {
        case "back":
            if (currentPerson == 0)
            {
                nameSpan.innerText = people[people.length - 1].name;
                titleSpan.innerText = people[people.length - 1].title;
                quoteSpan.innerText = people[people.length - 1].quote;

                currentPerson = people.length - 1;

                break;
            }

            nameSpan.innerText = people[currentPerson - 1].name;
            titleSpan.innerText = people[currentPerson - 1].title;
            quoteSpan.innerText = people[currentPerson - 1].quote;
            
            currentPerson--;
            break;

        case "next":
            if (currentPerson == people.length - 1)
            {
                nameSpan.innerText = people[0].name;
                titleSpan.innerText = people[0].title;
                quoteSpan.innerText = people[0].quote;

                currentPerson = 0;
                break;
            }

            nameSpan.innerText = people[currentPerson + 1].name;
            titleSpan.innerText = people[currentPerson + 1].title;
            quoteSpan.innerText = people[currentPerson + 1].quote;

            currentPerson++;
            break;
    }
});