const paragraphs = [
    "As a fighter capable of defeating 10 fighters in a single battle, I am deeply concerned about the state of our younger generation today. Recently, I have seen disturbing cases where kids are being beaten up, but instead of putting up a fight or even shouting for help, they simply stand there, walk away, or suffer in silence.",
    
    "What worries me most is that some of these young men have already given up on life, thinking that even if they scream 'HELP! HELP!', nobody will come to their aid. Perhaps they've tried before, only to be ignored. This is a serious problem.",
    
    "Not only that, but bullies today seem to gang up against one person, a disgrace to the very idea of a 'gang' name. In my time, things were different. Respect mattered. If there was a fight, it was one-on-one, and you stood up for yourself.",
    
    "Back when I was 12, I was a friendly student, always trying to bring some fun to the classroom. My way of doing that? Passing cigarettes and cartons of alcohol to my classmates so that class wouldn’t be so boring. Back then, everyone was shy, no one talked much, and I thought this would help loosen people up.",
    
    "It worked. A small section of my classmates followed me to the toilet, accepting my offer to drink and smoke. The conversations started, friendships were built, and groups were formed.",
    
    "But our short-lived fun ended abruptly. Someone from our class reported us to the teacher. As a result: I got classroom caning. The others were warned and their parents informed. Some of them were severely punished at home—phones confiscated, grounded, scolded.",
    
    "But here’s the thing: None of them blamed me. Instead, they all swore to find the 'bugger' who reported us.",
    
    "After that, suspicions ran wild. The girls suspected another girl—thinking she disliked them and was the one who snitched. Many accusations were thrown around.",
    
    "Eventually, the real bullying started. Those who were falsely accused but did not fight back became the real victims. For the rest of the year, they were bullied non-stop.",
    
    "One victim in particular did exactly what the Montfort Secondary student did—he just kept quiet, took the beatings, and walked away. What shocked us was that he never even reported the bullying to the teacher! That’s when I realized: Maybe he wasn’t the one who snitched on us. Maybe some bullies just hit him for fun. But lucky for him, I stood up and told the others not to beat him. Nobody dared to touch him when I was around.",
    
    "What’s my main concern from this story? Victims today are being taught to ignore, walk away, and avoid bullies. This is wrong. Not fighting back only makes the bullying worse.",
    
    'Donald Trump said this: "You gotta hit back twice as hard."'
];

let currentParagraph = 0;
const storyDiv = document.getElementById("story");
const nextBtn = document.getElementById("next-btn");

function showNextParagraph() {
    if (currentParagraph < paragraphs.length) {
        const newParagraph = document.createElement("p");
        newParagraph.innerHTML = paragraphs[currentParagraph];
        storyDiv.appendChild(newParagraph);

        // Smooth fade-in and slide animation
        setTimeout(() => {
            newParagraph.style.display = "block";
            newParagraph.style.opacity = 1;
            newParagraph.style.transform = "translateY(0)";
        }, 100);

        currentParagraph++;

        if (currentParagraph < paragraphs.length) {
            setTimeout(showNextParagraph, 5000); // Auto-show after 5 sec
        } else {
            nextBtn.style.display = "none"; // Hide button at end
        }
    }
}

// Auto-show first paragraph
showNextParagraph();