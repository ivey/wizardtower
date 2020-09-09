
function constructTower() {
    var hasFungus = false;
    var hasExperiment = false;
    var floors = ["Entrance"]
    var outside = "";
    var desc = "A Wizard's tower. " + outside + "<ol reversed='reversed'>";

    console.log("tower...");

    var numFloors = Math.max(6, roll(20));

    while (floors.length < numFloors) {
        console.log("floor...");
        var f = "";
        var r = roll(20);

        switch(r) {
            
            case 1:
                var m = roll(floors.length) - 1;
                var s = roll(6) - 1;
                var mods = [
                    "sealed off. There was a breach in reality and a demonic being crawled through. The wizard had to sealed the floor by magical means, but they will only hold for another year.",
                    "locked, and the wizard forgot where the key is. It’s actually in the nearest town, but since the key looks like a fountain, it decorates the town centre. The water will from the fountain will unlock the door.",
                    "locked, and may only be unlocked from the inside. Someone is living in there, and doesn’t wish to come out.",
                    "sealed off. What was previously a door, is now just another brick wall.",
                    "occupied by a next-door wizard, who has sealed it off and made it part of her own tower using teleportation magic.",
                    "undead. Everything in there is obviously undead, or decorated or made of bones and scary stuff."
                ];
                floors[m] += " It is " + mods[s];
                break;


            case 2:
                console.log("    KITCHEN");
                f = "A kitchen. ";
                var s = roll(6) - 1;
                var extras = [
                    "Never used but fully equipped (pots, pans, plates, etc.). Very clean. A large, cursed knife is stuck in one of the walls.",
                    "Filthy; used pots and pans everywhere, stacked on top of each other. Three blue mice have taken residence here.",
                    "Some sort of sentient blob being is cooking food here, constantly. It eats most of it. Give it a name and an allergy.",
                    "Several squirrels are running around here. Kitchen is filled with twigs, nuts and leaves.",
                    "A giant is squeezed in here. It's a good cook but can't move. It doesn't mind. Give it a name, a favourite ingredient and an allergy.",
                    "This kitchen serves both as a crude kitchen and a crude potion lab - it's impossible to tell what's food."
                ];
                f += extras[s];


            case 3:
                console.log("squish");
                var m = roll(floors.length) - 1;
                if (m == 0) {
                    break;
                }
                console.log(m)
                floors[m] += " Is combined with the floor below in all ways possible, thematic and space wise."
                break;


            case 4:
                console.log("    STUDY");
                f = "A study, with ";
                var s = roll(6) - 1;
                var extras = [
                    "books about one-eyed witches, one-eyed frogs, and one-eyed wizards.",
                    "books about famous paintings, and what hidden magic they contain.",
                    "books and scrolls on top of each other, mostly about other wizards (their names crossed out multiple times).",
                    "books about common potions that somehow all requires birds as an ingredient (multiple beaks can be found in here as well)",
                    "one LARGE book, the size of two cows. A children’s tale that works as a teleporter.",
                    "This study is all about mushrooms and their effects."
                ];
                f += extras[s];
                if (s < 5 || hasFungus) {
                    // if it's 5, fall through to the 19 case
                    break;
                }
                console.log("bonus fungus");


            case 19:
                hasFungus = true;
                console.log("    fungus");
                f = "A fungus farm, like a tiny indoor forest. ";
                var s = roll(6) - 1;
                var extras = [
                    "If the tower doesn’t contain an EXPERIMENTS floor yet (#17), add one now. The mushrooms growing here are plucked and used (crucial) for the experiments.",
                    "The mushrooms here are edible, but alive. When they are fully grown, they pluck themselves and start running around, building stuff. Friendly but annoying. Talkative",
                    "The mushrooms here are growing out trough the windows. A settlement of small pixies have taken residence here, carving houses and roads in the mushrooms",
                    "Three skinny trolls are living here. They are living off the mushrooms and can see two days into the future. They are extremely friendly and mellow",
                    "Extremely potent magical mushrooms if prepared properly. Word is going around, and the wizard keeps this floor tightly locked",
                    "A single mushroom is growing here. It takes up the entire floor. It’s sentient and will eat anything. It attracts prey using scent. The wizard doesn’t know how to deal with it, but it’s starting to become a problem"
                ];
                f += extras[s];
                if (s > 0 || hasExperiment) {
                    // if it's 0, fall through to the 17 case
                    break;
                }
                console.log("bonus fungus");


            case 17:
                hasExperiment = true;
                console.log("    experiment");
                f = "Experiments! ";
                var s = roll(6) - 1;
                var extras = [
                    "Man-sized eggs covering the floor. Some cracked, some empty. A desk with notes and seeds in the corner",
                    "Humanoid creations, children sized, built from scrap metal and old furniture. 1 in 6 reacts when approached",
                    "Tomes are flying around the room. The book shelves are rebuilt to resemble trees. They crap tiny scrolls of minor magic",
                    "A squirrel in a wizard hat has built what looks like a replica of the tower itself, including the surrounding area outside. It has constructed a tiny teleporter which goes outside, through which it fetches its materials",
                    "Perpetual motion machines. Some small as an egg, two or three large as a horse. Water flowing, cogs turning, wooden wheels turning… It’s not obvious what they are doing, but 1 in 6 are producing magic melodies as a biproduct",
                    "Devices for countering spells. All clumsy, but always works. One use, and will blow up (causes small damage to the user). Looks like nothing else",
                ];
                f += extras[s];
                break;




            break;
        }

        if (f != "") {
            floors.push(f);
        }
    }

    var f;
    for (f of floors.reverse()) {
        desc += "<li>"+f+"</li>";
    }
    desc += "</ol>"
    document.getElementById('tower').innerHTML = desc;
}

function roll(size) {
    var x = Math.max(1, Math.floor(Math.random() * (size + 1)));
    console.log(x);
    return x;
}
