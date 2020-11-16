var d = {
  site: {
    title: 'Art Persona Quiz',
  },
  cities: {
    heading: 'Where art thou?',
    citylist: [
      {
        name: 'bangalore',
        displayname: 'Bangalore',
        img: 'logo.png',
      },
      {
        name: 'delhi',
        displayname: 'Delhi',
        img: 'logo.png',
      },
      {
        name: 'goa',
        displayname: 'Goa',
        img: 'logo.png',
      },
      {
        name: 'jaipur',
        displayname: 'Jaipur',
        img: 'logo.png',
      },
      {
        name: 'kochi',
        displayname: 'Kochi',
        img: 'logo.png',
      },
      {
        name: 'kolkata',
        displayname: 'Kolkata',
        img: 'logo.png',
      },
      {
        name: 'mumbai',
        displayname: 'Mumbai',
        img: 'logo.png',
      },
    ],
  },
  q1: {
    heading: 'Q1: My favourite artwork is: ',
    answerlist: [
      {
        id: 'q1a',
        img: 'q1a.jpg',
        text: 'Bernini: Ecstacy of Saint Teresa'
      },
      {
        id: 'q1b',
        img: 'q1b.jpg',
        text: 'Damien Hirst: Butterfly'
      },
      {
        id: 'q1c',
        img: 'q1c.jpg',
        text: 'G R Iranna: Naavu (We Together)'
      },
    ],
  },
  q2: {
    heading: 'Q2: Take me to see: ',
    answerlist: [
      {
        id: 'q2a',
        img: 'q2a.jpg',
        text: 'C B Hoyo: Van Gogh and Chill (Van hoe)'
      },
      {
        id: 'q2b',
        img: 'q2b.jpg',
        text: 'Hemendranath Mazumdar : Toillete'
      },
      {
        id: 'q2c',
        img: 'q2c.jpg',
        text: 'Hokusai: The Great Wave of Kanagawa'
      },
    ],
  },
  q3: {
    heading: 'Q3: Pick your final favourite artwork:',
    answerlist: [
      {
        id: 'q3a',
        img: 'q3a.jpg',
        text: 'Thomas Cole: The Course of Empire: Consummation (1835–1836)'
      },
      {
        id: 'q3b',
        img: 'q3b.jpg',
        text: 'Dave Chihuly: The Sun'
      },
      {
        id: 'q3c',
        img: 'q3c.jpg',
        text: 'Maurizio Cattelan: America'
      },
    ],
  },
  q4: {
    heading: 'Q4: What does your current spotify playlist look like?',
    answerlist: [
      {
        id: 'q4a',
        img: 'q4a.jpg',
        text: 'Childish Gambino'
      },
      {
        id: 'q4b',
        img: 'q4b.jpg',
        text: 'Red Hot Chilli Peppers'
      },
      {
        id: 'q4c',
        img: 'q4c.jpg',
        text: 'ABBA'
      },
    ],
  },
  q5: {
    heading: 'Q5: What are you in the mood for?',
    answerlist: [
      {
        id: 'q5a',
        img: 'q5a.jpg',
        text: 'The Matrix'
      },
      {
        id: 'q5b',
        img: 'q5b.jpg',
        text: 'Crazy Rich Asians'
      },
      {
        id: 'q5c',
        img: 'q5c.jpg',
        text: 'We\'re the Millers'
      },
    ],
  },
  q6: {
    heading: "Q6: 'I could watch this TV Show on loop.'",
    answerlist: [
      {
        id: 'q6a',
        img: 'q6a.jpg',
        text: 'Friends'
      },
      {
        id: 'q6b',
        img: 'q6b.jpg',
        text: 'Lucifer'
      },
      {
        id: 'q6c',
        img: 'q6c.jpg',
        text: 'The Crown'
      },
    ],
  },
  q7: {
    heading: 'Q7: Looking for a break, which cartoon would you rather watch?',
    answerlist: [
      {
        id: 'q7a',
        img: 'q7a.jpg',
        text: 'Scooby Doo'
      },
      {
        id: 'q7b',
        img: 'q7b.jpg',
        text: 'Bojack Horseman'
      },
      {
        id: 'q7c',
        img: 'q7c.jpg',
        text: 'Big Mouth '
      },
    ],
  },
  emailform: {
    heading: " You're just one step away from finding your Art Persona!",
  },
  outcomes: [
    {
      id: 'T',
      heading: "You're a Traditionalist!",
      paragraph:
        'You’re an old soul grappling with modernity. You’re fascinated by history and skeptical of your phone. We know you’d prefer this quiz to be on paper because you love the smell of old books. Actually, you love all things vintage, especially your parents taste in music since you now borrow all their records. Make sure to carry your 35mm camera to check out your recommendations for the latest exhibitions and discoveries in your city!',
      img: 'traditional.jpg',
      rr: [
        ['q1a'],
        ['q2b', 'q2c'],
        ['q3a', 'q3b', 'q3c'],
        ['q4b', 'q4c'],
        ['q5a', 'q5b', 'q5c'],
        ['q6a', 'q6b', 'q6c'],
        ['q7a', 'q7b', 'q7c'],
      ],
    },
    {
      id: 'C',
      heading: "You're New Age!",
      paragraph:
        'You’re a cutting edge millennial. You’re interested in contemporary art and discovering new age art forms. We hope your hydroponic microgreens are doing well. You’re always on the prowl for something new especially when you want to escape your coworking startup space and explore the world beyond. Pack your avocado toasts and GoPro and head to these exhibits after brunch on Saturday. Check out your recommendations for the latest exhibitions and newest artists!',
      img: 'contemporary.jpg',
      rr: [
        ['q1b', 'q1c'],
        ['q2a'],
        ['q3a', 'q3b', 'q3c'],
        ['q4b'],
        ['q5b'],
        ['q6b'],
        ['q7b'],
      ],
    },
    {
      id: 'M',
      heading: "You're a Mixed Bag!",
      paragraph:
        'You’re an old soul with a millennial heart. You’re fascinated by the convergence of the Digital Age with the Modern, and could never pick between The Beatles and Post Malone. You oscillate between classic suits and Supreme sweats, and shop at both vintage and concept stores. We know you still play road rash but hide it from your fortnite friends. Check out your recommendations for the latest exhibitions in your city!',
      img: 'mixed.jpg',
      rr: [
        ['q1b', 'q1c'],
        ['q2b', 'q2c'],
        ['q3a', 'q3b', 'q3c'],
        ['q4b'],
        ['q5b'],
        ['q6b'],
        ['q7b'],
      ],
    },
  ],
};
