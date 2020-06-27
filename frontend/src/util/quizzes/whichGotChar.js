import Answer from './Answer';

export default {
    collegeDropout: {
        jon:      3,
        cersei:   1,
        tyrion:   2,
        jaime:    2,
        sansa:    1,
        arya:     1,
        ned:      5,
        ramsay:   1,
        daenerys: 3,
        joffrey:  1
    },
    lateRegistration: {
        jon:      5,
        cersei:   1,
        tyrion:   5,
        jaime:    2,
        sansa:    1,
        arya:     2,
        ned:      5,
        ramsay:   1,
        daenerys: 2,
        joffrey:  1
    },
    graduation: {
        jon:      2,
        cersei:   2,
        tyrion:   2,
        jaime:    4,
        sansa:    2,
        arya:     5,
        ned:      1,
        ramsay:   2,
        daenerys: 5,
        joffrey:  2
    }, 
    "808s": {
        jon:      3,
        cersei:   2,
        tyrion:   2,
        jaime:    3,
        sansa:    5,
        arya:     3,
        ned:      3,
        ramsay:   1,
        daenerys: 3,
        joffrey:  1
    },
    mbdtf: {
        jon:      1,
        cersei:   5,
        tyrion:   2,
        jaime:    3,
        sansa:    1,
        arya:     1,
        ned:      1,
        ramsay:   4,
        daenerys: 4,
        joffrey:  4
    },
    yeezus: {
        jon:      1,
        cersei:   3,
        tyrion:   1,
        jaime:    1,
        sansa:    1,
        arya:     1,
        ned:      1,
        ramsay:   5,
        daenerys: 1,
        joffrey:  5
    },
    tlop: {
        jon:      1,
        cersei:   1,
        tyrion:   5,
        jaime:    5,
        sansa:    4,
        arya:     3,
        ned:      1,
        ramsay:   1,
        daenerys: 2,
        joffrey:  1
    },
    ye: {
        jon:      1,
        cersei:   2,
        tyrion:   4,
        jaime:    5,
        sansa:    4,
        arya:     2,
        ned:      1,
        ramsay:   1,
        daenerys: 3,
        joffrey:  1
    },
    jesusIsKing: {
        jon:      5,
        cersei:   1,
        tyrion:   2,
        jaime:    1,
        sansa:    2,
        arya:     2,
        ned:      5,
        ramsay:   1,
        daenerys: 4,
        joffrey:  1
    },
    metadata: {
        name: "Which Game of Thrones Character Are You?"
    },
    answers: {
        jon: new Answer("Jon Snow", "", "You are the leader of the Night's Watch."),
        cersei: new Answer("Cersei Lannister", "", "You are the queen of all Westeros"),
        jaime: new Answer("Jaime Lannister", "", "You are the queen's brother, and lover."),
        tyrion: new Answer("Tyrion Lannister", "", "You are the hand to Daenerys Targaryen, disowned son, and murderer of Tywin Lannister"),
        sansa: new Answer("Sansa Stark", "", "You are the queen in the North, eldest living child to Ned Stark"),
        arya: new Answer("Arya Stark", "", "Warrior child of Ned Stark, and soldier for the Many Faced God"),
        ned: new Answer("Ned Stark", "", "You are the purest of heart, hand to Robert Baratheon, and King in the North"),
        ramsay: new Answer("Ramsay Bolton", "", "You are the temporary Warden in the north, and rotten bastard to Roose Bolton"),
        daenerys: new Answer("Daenerys Targaryen", "", "You are the last living Targaryen, and the true heir to the iron throne"),
        joffrey: new Answer("Joffrey Baratheon", "", "You are the spoiled bastard of Jaime, and Cersei Lannister and king of westeros")
    }
}