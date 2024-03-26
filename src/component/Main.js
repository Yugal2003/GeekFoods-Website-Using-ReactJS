import React from "react";
import './Main.css';

const Main = () =>{
    const data = [
        {
            id : 1,
            quote : "It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding.",
            name : "Adam Scott"
        },
        {   
            id : 2,
            quote : "Eat breakfast like a king, lunch like a prince, and dinner like a pauper.",
            name : "Adelle Davis"
        },
        {
            id : 3,
            quote : "We are indeed much more than what we eat, but what we eat can nevertheless help us to be much more than what we are.",
            name : "Adelle Davis"
        },
        {
            id : 4,
            quote : "Nothing will benefit human health and increase the chances for survival of life on Earth as much as the evolution to a vegetarian diet.",
            name : "Albert Einstein"
        },
        {
            id : 5,
            quote : "Eating is always a decision, nobody forces your hand to pick up food and put it into your mouth.",
            name : "Alice May Brock"
        },
        {
            id : 6,
            quote : "Fat is a barrier, a bellicose statement to others that, to some, justifies hostility in kind. The world says to the fat person, Your fatness is an affront to me, so we have the right to treat you as offensively as you appear Fat is not merely viewed as another type of tissue, but as a diagnostic sign, a personal statement, and a measure of personality. Too little fat and we see you as being antisocial, fearful and sexless. Too much fat and we see you as slothful, stupid, and sexually hung up.",
            name : "Anthelme Brillat-Savarin"
        },
        {
            id : 7,
            quote : "Fat people, it is commonly held, should be punished because they offend our aesthetic sensibilities. They take up too much space on subways, buses, airplanes, and elevators. They consume more than they contribute to society. They become ill and need to be taken care of, or they die early and their families are left unsupported. The only way fat people can gain some acceptance and forgiveness for their crime of overeating is to at least try, or look like they are trying, to lose weight. They must never eat an ice cream cone in public, never be seen eating a normal sized portion of non-diet food!",
            name : "Calvin Trillin"
        },
        {
            id : 8,
            quote : "Tomatoes and oregano make it Italian; wine and tarragon make it French. Sour cream makes it Russian; lemon and cinnamon make it Greek. Soy sauce makes it Chinese; garlic makes it good.",
            name : "Calvin Trillin"
        },
        {
            id : 9,
            quote : "Tell me what you eat, and I will tell you what you are.",
            name : "Cyra McFadden"
        },
        {
            id : 10,
            quote : "Health food makes me sick.",
            name : "Eike von Repkow"
        },
        {
            id : 11,
            quote : "The most remarkable thing about my mother is that for thirty years she served the family nothing but leftovers. The original meal has never been found.",
            name : "Epictetus"
        },
        {
            id : 12,
            quote : "I no longer prepare food or drink with more than one ingredient.",
            name : "Epictetus"
        },
        {
            id : 13,
            quote : "Eating is really one of your indoor sports. You play three times a day, and it's well worth while to make the game as pleasant as possible.",
            name : "Fran Lebowitz"
        },
        {
            id : 14,
            quote : "My ability to tolerate shame, to compartmentalize it, to swallow it, increased right along with my belt size. it came with the territory of being heavy. Obese people have a lifetime of experience with shame.",
            name : "Fran Lebowitz"
        },
        {
            id : 15,
            quote : "The people who can most successfully lose weight and maintain a healthy life style are foodies. When it comes to healthy eating, people who know how to cook and make ingredients taste good have a distinct advantage over those who can't.",
            name : "G. K. Chesterton"
        },
        {
            id : 16,
            quote : "He who comes first, eats first. [Familiar as: First come first served.]",
            name : "Geoffrey Neighor"
        },
        {
            id : 17,
            quote : "Bear in mind that you should conduct yourself in life as at a feast.",
            name : "George Bernard Shaw"
        },
        {
            id : 18,
            quote : "Preach not to others what they should eat, but eat as becomes you, and be silent.",
            name : "George Dennison Prentice"
        },
        {
            id : 19,
            quote : "I have never cared much for fish - it floats in the belly as much as in the pond.",
            name : "Henry Bromel"
        },
        {
            id : 20,
            quote : "If the divine creator has taken pains to give us delicious and exquisite things to eat, the least we can do is prepare them well and serve them with ceremony.",
            name : "J. R. R. Tolkien"
        },
        {
            id : 21,
            quote : "Food is an important part of a balanced diet."
        },
        {
            id : 22,
            quote : "My favourite animal is steak."
        },
        {
            id : 23,
            quote : "Music with dinner is an insult both to the cook and the violinist."
        },
        {
            id : 24,
            quote : "Just as animal research tells us that gluttony and sloth are side effects of a drive to accumulate body fat, it also says that eating in moderation and being physically active (literally, having the energy to exercise) is not evidence of moral rectitude. Rather, they're the metabolic benefits of a body that's programmed to remain lean."
        },
        {
            id : 25,
            quote : "We don't get fat because we overeat; we overeat because we're getting fat."
        },
        {
            id : 26,
            quote : "Good food ends with good talk."
        },
        {
            id : 27,
            quote : "There is no love sincerer than the love of food."
        },
        {
            id : 28,
            quote : "What some call health if purchased by perpetual anxiety about diet, isn't much better than tedious disease."
        },
        {
            id : 29,
            quote : "It's important to begin a search on a full stomach."
        },
        {
            id : 30,
            quote : "If more of us valued food and cheer and song above hoarded gold, it would be a merrier world."
        }
    ]
    return(
        <>
            {
                data.map((curElm) => {
                    return(
                            <div className="div_container" key={curElm.id}>
                                <h1 className="h1">{curElm.quote}</h1>
                                <h5 className="h5">{curElm.name}</h5>
                            </div>
                    )
                })
            }
        </>
    );
}

export default Main;