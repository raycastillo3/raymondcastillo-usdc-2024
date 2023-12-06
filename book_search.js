/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for.
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */
 function findSearchTermInBooks(searchTerm, scannedTextObj) {
    var result = {
        "SearchTerm": searchTerm,
        "Results": []
    };
    // edge case:
    if (searchTerm === "") {
        let message =  'Insert a valid search term';
        return message;
    }

    for (let i = 0; i < scannedTextObj.length; i++ ) {
        const scannedText = scannedTextObj[i];
        for (let j = 0; j < scannedText.Content.length; j++){
            const content = scannedText.Content[j]; 
            if (content.Text.includes(searchTerm)) {
                result.Results.push({'ISBN': scannedTextObj[i].ISBN, 'Page': content.Page, 'Line': content.Line})
            }
        }
    }
    return result;
}

/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            }
        ]
    }
]

/** Example output object */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

/** Example input object: The search term does not appear in any lines */
const donQuixoteIn = [
    {
        "Title": "Don Quijote of la Mancha",
        "ISBN": "9788408061052",
        "Content": [
            {
                "Page": 20,
                "Line": 5,
                "Text": "“I've always heard the old folks say that if you don't"
            },
            {
                "Page": 20,
                "Line": 6,
                "Text": "know how to enjoy good luck when it comes, you shouldn't\'s"
            },
            {
                "Page": 20,
                "Line": 9,
                "Text": "complain if it passes you by."
            }
        ]
    }
]

/**Example output object */
const donQuixoteOut = {
    "SearchTerm": "Quixote",
    "Results": []
}

/** Example of input object */
const georgeOrwellIn = [
        {
            "Title": "George Orwell 1984",
            "ISBN": "9780151660346",
            "Content": [
                {
                    "Page": 199,
                    "Line": 5,
                    "Text": "Perhaps one did not want to be loved so much as to be understood."
                },
                {
                    "Page": 240,
                    "Line": 6,
                    "Text": "If you loved someone, you loved him, and when you had nothing else to give, you still gave him love."
                },
                {
                    "Page": 301,
                    "Line": 9,
                    "Text": "If you loved someone, you loved him, and when you had nothing else to give, you still gave him love."
                }
            ]
        }
]

/** Example ouput object */
const georgeOrwellOut = {
    SearchTerm: 'loved',
    Results: [
      {"ISBN": '9780151660346', "Page": 199, "Line": 5 },
      { "ISBN": '9780151660346', "Page": 240, "Line": 6 },
      { "ISBN": '9780151660346', "Page": 301, "Line": 9 }
    ]
  }

/** Example input object */
const theAlchemistIn = [
    {
        "Title": "The Alchemist",
        "ISBN": "9788408052944",
        "Content": [
            {
                "Page": 10,
                "Line": 1,
                "Text": "Remember that wherever your heart is, there you will find your treasure."
            },
            {
                "Page": 12,
                "Line": 5,
                "Text": "You will never be able to escape from your heart. So it's better to listen to what it has to say"
            },
            {
                "Page": 16,
                "Line": 9,
                "Text": "Every blessing ignored becomes a curse."
            }
        ]
    }
]

/** Example output object */
const theAlchemistOut = {
    'SearchTerm': 'boy',
    'Results': []
}

/**Example input object */
const harryPotterIn = [
    {
        "Title": "Harry Potter and the Sorcerer's Stone",
        "ISBN": "9788869183157",
        "Content": [
            {
                "Page": 400,
                "Line": 50,
                "Text": "I hope you're pleased with yourselves. We could all have been killed—"
            },
            {
                "Page": 400,
                "Line": 51,
                "Text": "or worse, expelled. Now if you don't mind, I'm going to bed"
            }
        ]
    }
]

/** Example output object */
const harryPotterOut = {
    'SearchTerm': 'you',
    'Results': [
      { 'ISBN': '9788869183157', 'Page': 400, 'Line': 50 },
      { 'ISBN': '9788869183157', 'Page': 400, 'Line': 51 }
    ]
}

/**Example input object */
const frankensteinIn = [
    {
        "Title": "Frankenstein (longman classics, stage 3)",
        "ISBN": "9780582541542",
        "Content": [
            {
                "Page": 50,
                "Line": 12,
                "Text": "I was benevolent and good; misery made me a fiend. Make me happy, and I shall again be virtuous."
            },
        ]
    }
]

/** Example output object */
const frankensteinOut = {
    'SearchTerm': 'make', 'Results': []
}

/** Example input object */
const moreThanOneBookIn = [
    {
        "Title": "George Orwell 1984",
        "ISBN": "9780151660346",
        "Content": [
            {
                "Page": 240,
                "Line": 6,
                "Text": "If you loved someone, you loved him, and when you had nothing else to give, you still gave him love."
            },
        ],
    },
    {
        "Title": "Don Quijote of la Mancha",
        "ISBN": "9788408061052",
        "Content": [
            {
                "Page": 20,
                "Line": 5,
                "Text": "“I've always heard the old folks say secretWord that if you don't"
            },
            {
                "Page": 20,
                "Line": 6,
                "Text": "know how to enjoy good luck when it comes secretWord, you shouldn't\'s"
            },
        ],
    },
    {
        "Title": "Harry Potter and the Sorcerer's Stone",
        "ISBN": "9788869183157",
        "Content": [
            {
                "Page": 400,
                "Line": 50,
                "Text": "I hope you're pleased with yourselves. We could all have been killed—"
            },
            {
                "Page": 400,
                "Line": 51,
                "Text": "or worse, expelled. Now if you don't mind, I'm going to bed secretWord"
            }
        ]
    }
]

/** Example output object */
const moreThanOneBookOut = {
    'SearchTerm': 'secretWord',
    'Results': [
      { 'ISBN': '9788408061052', 'Page': 20, 'Line': 5 },
      { 'ISBN': '9788408061052', 'Page': 20, 'Line': 6 },
      { 'ISBN': '9788869183157', 'Page': 400, 'Line': 51 }
    ]
  }

/** Example input object */
const emptyStringIn = [
    {
        "Title": "Don Quijote of la Mancha",
        "ISBN": "9788408061052",
        "Content": [
            {
                "Page": 20,
                "Line": 5,
                "Text": "“I've always heard the old folks say that if you don't"
            },
            {
                "Page": 20,
                "Line": 6,
                "Text": "know how to enjoy good luck when it comes, you shouldn't\'s"
            },
            {
                "Page": 20,
                "Line": 9,
                "Text": "complain if it passes you by."
            }
        ]
    }
]

/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___|
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/

 */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn);
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}


/** The searchTerm does not appears in any lines */
const test3result = findSearchTermInBooks("Quixote", donQuixoteIn);
if (JSON.stringify(donQuixoteOut) === JSON.stringify(test3result)) {
    console.log("PASS: Test 3");
} else {
    console.log("FAIL: Test 3");
    console.log("Exptected: ", donQuixoteOut);
    console.log("Received: ", test3result);
}

/** The searchTerm appears in multiple lines */
const test4result = findSearchTermInBooks("loved", georgeOrwellIn);
if (JSON.stringify(georgeOrwellOut) === JSON.stringify(test4result)) {
    console.log("PASS: Test 4");
} else {
    console.log("FAIL: Test 4");
    console.log("Exptected: ", georgeOrwellOut);
    console.log("Received: ", test4result);
}

/** Test that do not return any matches - search word inserted but not found in text*/
const test5result = findSearchTermInBooks("boy", theAlchemistIn);
if (JSON.stringify(theAlchemistOut) === JSON.stringify(test5result)) {
    console.log("PASS: Test 5");
} else {
    console.log("FAIL: Test 5");
    console.log("Expected: ", theAlchemistOut);
    console.log("Received: ", test5result);
}

/** testing that words such as `you` , `you're`, and `yourselves` */
const test6result = findSearchTermInBooks("you", harryPotterIn);
if (JSON.stringify(harryPotterOut) === JSON.stringify(test6result)) {
    console.log("PASS: Test 6");
} else {
    console.log("FAIL: TEST 6");
    console.log("Expected: ", harryPotterOut);
    console.log("Received: ", test6result);
}

/** Case sensitive tests - make not Make  */
const test7result = findSearchTermInBooks("make", frankensteinIn);
if (JSON.stringify(frankensteinOut) === JSON.stringify(test7result)) {
    console.log("PASS: Test 7");
} else {
    console.log("FAIL: Test 7");
    console.log("Expected: ", frankensteinOut)
    console.log("Received: ", test7result);
}

/** The object contains more than one book */
const test8result = findSearchTermInBooks("secretWord", moreThanOneBookIn); 
if (JSON.stringify(moreThanOneBookOut) === JSON.stringify(test8result)) {
    console.log("PASS: Test 8");
} else {
    console.log("FAIL: Test 8");
    console.log("Expected: ", moreThanOneBookOut);
    console.log("Received: ", test8result);
}

/** The searchTerm inserted is an empty string  */
const test9result = findSearchTermInBooks("", emptyStringIn); 
if (test9result === 'Insert a valid search term'){
    console.log("PASS: Test 9");
} else {
    console.log("FAIL: Test 9"); 
    console.log("Expected: Insert a valid search term")
    console.log("Received: ", test9result);
}