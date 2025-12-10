// Import blog images
import box from "../assets/blogs/box.png";
import grounding from "../assets/blogs/grounding.png";
import groundingtech from "../assets/blogs/groundingtech.png";
import pmr from "../assets/blogs/PMR.png";
import safeplace from "../assets/blogs/safeplace.png";
import stop from "../assets/blogs/stop.png";
import thoughts from "../assets/blogs/thoughtlabelling.png";
import threethings from "../assets/blogs/threethings.png";

const blogs = [
    {
        slug: "box-breathing",
        img: box,
        title: "Box Breathing (4-4-4-4)",
        desc: "A slow and intentional breathing technique that calms the mind and restores balance.",
        content: `
Box breathing is a simple but powerful method used by athletes, therapists, and even the military to bring the body back into a state of calm. It helps regulate your breathing when anxiety makes everything feel fast and overwhelming.

Steps:
1. Inhale gently through your nose for 4 seconds.  
2. Hold that breath for 4 seconds without tightening your body.  
3. Exhale slowly through your mouth for 4 seconds.  
4. Pause and hold for 4 seconds before the next inhale.

Repeat this cycle 4 to 6 times. As you breathe, notice how your shoulders drop, your chest loosens, and your heartbeat slows. You may feel a light sense of grounding as your nervous system stabilizes. This technique works beautifully during panic, overwhelm, or before sleep.  
`
    },

    {
        slug: "grounding-with-categories",
        img: grounding,
        title: "Grounding with Categories",
        desc: "A playful and effective way to interrupt anxious spirals using simple mental tasks.",
        content: `
When anxiety pulls you into worry or overthinking, your mind becomes stuck in one direction. Grounding with categories gently breaks that cycle by giving your brain something structured and neutral to focus on.

Choose any category such as fruits, cities, colors, movies, animals, or even childhood memories. Then name as many items from that category as you can for about 30 seconds.

For example:
Mango, apple, banana, kiwi…  
Or  
Paris, Mumbai, Nairobi, Tokyo…

This small mental shift gives your mind a break from emotional intensity and brings you back into the present moment. Even children find this exercise comforting and fun.  
`
    },

    {
        slug: "54321-grounding-technique",
        img: groundingtech,
        title: "5-4-3-2-1 Grounding Technique",
        desc: "A sensory-based exercise to help during anxiety, dissociation, or panic.",
        content: `
The 5-4-3-2-1 technique guides you gently back into your body when your mind feels scattered, frightened, or disconnected. It anchors you through your senses.

Identify:
5 things you can see around you  
4 things you can physically touch  
3 things you can hear, even faint sounds  
2 things you can smell  
1 thing you can taste or imagine tasting  

Move slowly. Notice colors, textures, temperatures, and subtle sounds. This practice signals safety to the brain, reduces panic, and helps you reconnect with your surroundings when everything feels overwhelming.  
`
    },

    {
        slug: "progressive-muscle-relaxation",
        img: pmr,
        title: "Progressive Muscle Relaxation",
        desc: "A gentle body-based method to release tension and promote deep relaxation.",
        content: `
Stress often lives quietly inside the body. Tight shoulders, clenched jaw, restless legs, or a heavy chest can all be signs that your mind has been carrying too much. Progressive Muscle Relaxation helps release this stored tension.

Start by tensing a muscle group for about 5 seconds — your hands, shoulders, face, legs — and then slowly release the tension. As the muscles relax, allow yourself to notice the warmth and softness that follows.

Move through your body patiently, one area at a time. This technique is especially helpful before sleep, during anxious moments, or when you feel disconnected from your body. It teaches your mind and muscles how to rest again.  
`
    },

    {
        slug: "safe-place-visualization",
        img: safeplace,
        title: "Safe Place Visualization",
        desc: "A soothing mental escape that helps reduce emotional overwhelm.",
        content: `
Your mind has the ability to create a space where you feel protected, understood, and deeply safe. Safe Place Visualization allows you to step into that space whenever you need comfort or grounding.

Imagine a place that brings you peace — a beach with warm sunlight, a quiet forest, a cozy room, or even a memory that makes you feel held. Picture the colors, the sounds, the textures, the temperature, and how your body feels in that place.

Stay there mentally for one or two minutes. Let the calmness soak into your breathing. This exercise is especially effective during emotional overload, loneliness, stress, or when you need a moment of inner stability.  
`
    },

    {
        slug: "stop-skill-dbt",
        img: stop,
        title: "The STOP Skill (DBT)",
        desc: "A mindful strategy to pause emotional reactions and avoid acting impulsively.",
        content: `
The STOP skill is a grounding reminder for moments when emotions rise quickly and you feel the urge to react immediately.

S — Stop whatever you are doing.  
T — Take a deep breath.  
O — Observe what you are thinking, feeling, and sensing in your body.  
P — Proceed with awareness, not impulse.

This short pause helps you respond thoughtfully instead of reacting emotionally. It protects your relationships, reduces regret, and supports emotional regulation during stressful situations.  
`
    },

    {
        slug: "thought-labelling",
        img: thoughts,
        title: "Thought Labeling",
        desc: "A compassionate way to create distance from overwhelming thoughts.",
        content: `
Not every thought that appears in your mind is the truth. Many are fears, predictions, memories, or worries disguised as facts. Thought labeling helps you recognise what type of thought you are experiencing so you can step back from it.

You might say to yourself:
“This is a worry thought.”  
“This is a memory.”  
“This is just fear talking.”  
“This is a what-if thought.”  

By naming the thought, you gently separate yourself from it. It becomes something you are observing, not something you must believe. This practice reduces overthinking and supports emotional clarity.  
`
    },

    {
        slug: "three-things-daily",
        img: threethings,
        title: "Name 3 Things You Did Well Today",
        desc: "A daily reflection practice that builds emotional strength and self-worth.",
        content: `
We often remember our mistakes more than our achievements. This exercise helps shift that imbalance by focusing on small wins that usually go unnoticed.

At the end of your day, write down three things you did well. They don’t need to be big. It could be replying to a message, being patient with someone, completing a task, or taking care of yourself in a small way.

Over time, your mind learns to recognise progress instead of only problems. This practice strengthens self-esteem, encourages resilience, and teaches you to appreciate your efforts with kindness.  
`
    }
];

export default blogs;
