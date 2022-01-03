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
    'How to disagree with someone',
    'iPhone review',
    'how-to video',
    'video essay on the history of video games',
    'How to make money on the App Store',
    'Learn NextJS in five minutes (Not clickbate)',
    'Movie trailer',
    'Hello world',
    'Another possible solution to the algorithm',
    'Apology video',
    'Submission for startup pitch',
  ];

  const possibleReactions = [
    'I disagree!',
    'I tried your algorithm, here were the results',
    'This was awesome',
    'Thank you for the great content',
    'Please check out my video response',
    'Like and subscribe to my channel please',
    'Reply: The side effects of in app purchases on digital marketplaces',
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
