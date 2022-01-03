const usernames = [
    'Aaran',
    'Aaren',
    'Aarez',
    'Aarman',
    'Aaron',
    'Aaron-James',
    'Aarron',
    'Aaryan',
    'Aaryn',
    'Aayan',
    'Aazaan',
    'Abaan',
    'Abbas',
    'Abdallah',
    'Abdalroof',
    'Abdihakim',
    'Abdirahman',
    'Abdisalam',
    'Abdul',
    'Abdul-Aziz',
    'Abdulbasir',
    'Abdulkadir',
    'Abdulkarem',
    'Smith',
    'Jones',
    'Coollastname',
    'enter_name_here',
    'Ze',
    'Zechariah',
    'Zeek',
    'Zeeshan',
    'Zeid',
    'Zein',
    'Zen',
    'Zendel',
    'Zenith',
    'Zennon',
    'Zeph',
    'Zerah',
    'Zhen',
    'Zhi',
    'Zhong',
    'Zhuo',
    'Zi',
    'Zidane',
    'Zijie',
    'Zinedine',
    'Zion',
    'Zishan',
    'Ziya',
    'Ziyaan',
    'Zohaib',
    'Zohair',
    'Zoubaeir',
    'Zubair',
    'Zubayr',
    'Zuriel',
    'Xander',
    'Jared',
    'Courtney',
    'Gillian',
    'Clark',
    'Jared',
    'Grace',
    'Kelsey',
    'Tamar',
    'Alex',
    'Mark',
    'Tamar',
    'Farish',
    'Sarah',
    'Nathaniel',
    'Parker',
];

const emails = [
    '@gmail.com',
    '@hotmail.com',
    '@outlook.com',
    '@me.com',
    '@apple.com',
    '@microsoft.com',
    '@google.com'
];

const thoughtTextDescriptions = [
    'In this article, we are going to make an Image Slider also known as carousel with a clean UI. It can slide the images with awesome animation and it will track the current image which you can see via dots on the bottom. First, Let',
    'It’s now ten years later, and Atwood’s statement is truer than ever. JavaScript is continuing to gain more and more adoption. The “next generation” of Javascript is something known as ES6. ES6 is so far the best and biggest update javascript has ever received.',
    `How cool would it be if you could just call a mint function, give the token's metadata as an argument, and it mints an NFT for you? All without writing a single line of Solidity code. Let's see if that's possible.`,
    `The first thing you need to learn about is the concept of projects and modules. In short, projects are smart contracts that act as containers for your modules. On the other hand, modules are packages that contain smart contracts and other functionalities. Head over to this link to learn more about them.`,
    `I don't know if I'll keep doing this every year, but I did one of these in 2020, and that post got some good signal, so I renamed it to Frontend Developer Resources 2020, which brings us to Frontend Developer Resources 2022. Oops, I missed 2021. Technically we're still in 2021, but humour me. I also added sprinkles of shameless plugs.`,
    `If you have an educational stipend at work, use it. Also, many public libraries give you access for free to paid resources like LinkedIn Learning. Check out your local library before purchasing certain content. Also, just a massive shoutout to public libraries. 😎`,
    `I work with Preact daily, and I also work with React. There are other libraries and frameworks out there, but I will veer away from all that in this post. The browser extensions section is the only place where I'll mention frameworks and libraries.`,
    `If you're new to this whole full-stack development thing and get confused by some of the words people use when talking about full-stack development, then stick around because in this 3 part series, I'll be compiling the most common words and phrases related to full-stack development. Of course, it will take much more time to learn the details of each of the things I'll be mentioning in these articles. These articles are just summarizers to give you an idea of what these words and phrases mean so that you can understand what people are referencing with them when talking about certain areas of full-stack development.`,
    `You've probably heard a ton about React on dev.to, but what exactly is ReactJS? React is currently the most popular javascript front-end framework. Developed by Facebook in 2013, React is used to build interactive user interfaces.`,
    `A component-based framework for building scalable web applications A collection of well-integrated libraries that cover a wide variety of features, including routing, forms management, client-server communication, and more A suite of developer tools to help you develop, build, test, and update your code`,
    `With Angular, you're taking advantage of a platform that can scale from single-developer projects to enterprise-level applications. Angular is designed to make updating as straightforward as possible, so take advantage of the latest developments with a minimum of effort.`,
    `Docker is a software platform that allows you to build, test, and deploy applications quickly. Docker packages software into standardized units called containers that have everything the software needs to run including libraries, system tools, code, and runtime. Using Docker, you can quickly deploy and scale applications into any environment and know your code will run.`,
    `The name Kubernetes originates from Greek, meaning helmsman or pilot. K8s as an abbreviation results from counting the eight letters between the "K" and the "s". Google open-sourced the Kubernetes project in 2014. Kubernetes combines over 15 years of Google's experience running production workloads at scale with best-of-breed ideas and practices from the community.`,
    `Rust is a statically-typed programming language designed for performance and safety, especially safe concurrency and memory management.`,
    `TensorFlow is an end-to-end open source platform for machine learning. It has a comprehensive, flexible ecosystem of tools, libraries and community resources that lets researchers push the state-of-the-art in ML and developers easily build and deploy ML powered applications.`,
    `Solidity is a statically-typed curly-braces programming language designed for developing smart contracts that run on Ethereum.`,
    `Laravel is a PHP framework with expressive, elegant syntax. It is the most popular PHP framework.`,
    `Go language is a programming language initially developed at Google in the year 2007 by Robert Griesemer, Rob Pike, and Ken Thompson. It is a statically-typed language having syntax similar to that of C. It provides garbage collection, type safety, dynamic-typing capability, many advanced built-in types such as variable length arrays and key-value maps. It also provides a rich standard library. The Go programming language was launched in November 2009 and is used in some of Google's production systems.`,
    `jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and AJAX much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.`,
    `Ajax stands for Asynchronous Javascript And XML. Ajax is just a means of loading data from the server and selectively updating parts of a web page without reloading the whole page.`
  ];

  const possibleReactions = [
    'I disagree!',
    'I tried your algorithm, here were the results',
    'This was awesome',
    'Thank you for the great content',
    'Please check out my video response',
    'Like and subscribe to my channel please',
    'Reply: The side effects of in app purchases on digital marketplaces',
    'yes I love this!',
    'Booyahh!!',
    'bow chikka wow wow',
    'A+ my man',
    'you high?',
    'high on potenuse?',
    'something like that',
    '😋',
    'wow my guy, you need to reevaluate everything',
    '1/5',
    '2/5',
    '3/5',
    '4/5',
    '5/5',
    'YOU CANNOT BE SERIOUS?',
    'CMON MAN!!?!?!',
    'There is absolutely no way this is correct',
    'I could not agree more, wow, twins?'
  ];

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomUsername = () =>
`${getRandomArrItem(usernames)}${getRandomArrItem(usernames)}`;

const getRandomEmail = () =>
`${getRandomArrItem(emails)}`;

const getRandomNumber = () => Math.floor((Math.random() * 1000) + 1);

const getRandomThoughts = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        thoughtText: getRandomArrItem(thoughtTextDescriptions),
        username: getRandomUsername(),
        reactions: [...getReactions(3)],
      });
    }
    return results;
}

const getReactions = (int) => {
    if (int === 1) {
      return getRandomArrItem(possibleReactions);
    }
    let results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        responseBody: getRandomArrItem(possibleReactions),
        username: getRandomUsername(),
      });
    }
    return results;
  };

module.exports = { getRandomUsername, getRandomEmail, getRandomNumber, getRandomThoughts };
