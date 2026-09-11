// ============================================
// 📚 courses-data.js - সমস্ত কোর্সের ডেটা
// ============================================

const IMAGE_BASE = 'https://raw.githubusercontent.com/Princetirtho/study-room-images/main/';

const coursesData = [
    // ==========================================
    // 📂 ACS 27 - ফিজিক্স (C1-C6 + Combo)
    // Instructor: অপূর্ব + মাশরুর
    // ==========================================
    {
        id: 1,
        name: 'ACS 27 - ফিজিক্স C1',
        category: 'acs27',
        subCategory: 'physics',
        price: '৭০ টাকা',
        duration: '৪ মাস',
        instructor: 'অপূর্ব ও মাশরুর',
        cycle: 'C1',
        type: 'free',
        telegramLink: 'https://t.me/studyroom_acs27_physics_c1',
        shortDesc: 'ACS 27 ফিজিক্স C1 - ফ্রি ক্লাস',
        fullDesc: 'ACS 27 ফিজিক্সের C1 অধ্যায়। অপূর্ব ও মাশরুর সারের ক্লাস। সম্পূর্ণ ফ্রি।',
        image: `${IMAGE_BASE}acs27phyc1.jpg`
    },
    {
        id: 2,
        name: 'ACS 27 - ফিজিক্স C2',
        category: 'acs27',
        subCategory: 'physics',
        price: '৭০ টাকা',
        duration: '৪ মাস',
        instructor: 'অপূর্ব ও মাশরুর',
        cycle: 'C2',
        type: 'paid',
        telegramLink: null,
        shortDesc: 'ACS 27 ফিজিক্স C2',
        fullDesc: 'ACS 27 ফিজিক্সের C2 অধ্যায়। অপূর্ব ও মাশরুর সারের ক্লাস।',
        image: `${IMAGE_BASE}acs27phyc2.jpg`
    },
    {
        id: 3,
        name: 'ACS 27 - ফিজিক্স C3',
        category: 'acs27',
        subCategory: 'physics',
        price: '৭০ টাকা',
        duration: '৪ মাস',
        instructor: 'অপূর্ব ও মাশরুর',
        cycle: 'C3',
        type: 'paid',
        telegramLink: null,
        shortDesc: 'ACS 27 ফিজিক্স C3',
        fullDesc: 'ACS 27 ফিজিক্সের C3 অধ্যায়। অপূর্ব ও মাশরুর সারের ক্লাস।',
        image: `${IMAGE_BASE}acs27phyc3.jpg`
    },
    {
        id: 4,
        name: 'ACS 27 - ফিজিক্স C4',
        category: 'acs27',
        subCategory: 'physics',
        price: '৭০ টাকা',
        duration: '৪ মাস',
        instructor: 'অপূর্ব ও মাশরুর',
        cycle: 'C4',
        type: 'paid',
        telegramLink: null,
        shortDesc: 'ACS 27 ফিজিক্স C4',
        fullDesc: 'ACS 27 ফিজিক্সের C4 অধ্যায়। অপূর্ব ও মাশরুর সারের ক্লাস।',
        image: `${IMAGE_BASE}acs27phyc4.jpg`
    },
    {
        id: 5,
        name: 'ACS 27 - ফিজিক্স C5',
        category: 'acs27',
        subCategory: 'physics',
        price: '৭০ টাকা',
        duration: '৪ মাস',
        instructor: 'অপূর্ব ও মাশরুর',
        cycle: 'C5',
        type: 'paid',
        telegramLink: null,
        shortDesc: 'ACS 27 ফিজিক্স C5',
        fullDesc: 'ACS 27 ফিজিক্সের C5 অধ্যায়। অপূর্ব ও মাশরুর সারের ক্লাস।',
        image: `${IMAGE_BASE}acs27phyc5.jpg`
    },
    {
        id: 6,
        name: 'ACS 27 - ফিজিক্স C6',
        category: 'acs27',
        subCategory: 'physics',
        price: '৭০ টাকা',
        duration: '৪ মাস',
        instructor: 'অপূর্ব ও মাশরুর',
        cycle: 'C6',
        type: 'paid',
        telegramLink: null,
        shortDesc: 'ACS 27 ফিজিক্স C6',
        fullDesc: 'ACS 27 ফিজিক্সের C6 অধ্যায়। অপূর্ব ও মাশরুর সারের ক্লাস।',
        image: `${IMAGE_BASE}acs27phyc6.jpg`
    },
    {
        id: 7,
        name: 'ACS 27 - ফিজিক্স কম্বো (C1-C6)',
        category: 'acs27',
        subCategory: 'physics',
        price: '৩০০ টাকা',
        duration: '৪ মাস',
        instructor: 'অপূর্ব ও মাশরুর',
        cycle: 'Combo',
        type: 'paid',
        telegramLink: null,
        shortDesc: 'ACS 27 ফিজিক্স কম্বো (C1-C6)',
        fullDesc: 'ACS 27 ফিজিক্সের C1 থেকে C6 পর্যন্ত সব অধ্যায় একসাথে। অপূর্ব ও মাশরুর সারের ক্লাস। সাশ্রয়ী মূল্যে সম্পূর্ণ কোর্স।',
        image: `${IMAGE_BASE}acs27phycombo.jpg`
    },

    // ==========================================
    // 📂 ACS 27 - জীববিজ্ঞান (C1-C6 + Combo)
    // Instructor: হাসনাত
    // ==========================================
    {
        id: 8,
        name: 'ACS 27 - জীববিজ্ঞান C1',
        category: 'acs27',
        subCategory: 'biology',
        price: '৭০ টাকা',
        duration: '৪ মাস',
        instructor: 'হাসনাত',
        cycle: 'C1',
        type: 'free',
        telegramLink: 'https://t.me/studyroom_acs27_biology_c1',
        shortDesc: 'ACS 27 জীববিজ্ঞান C1 - ফ্রি ক্লাস',
        fullDesc: 'ACS 27 জীববিজ্ঞানের C1 অধ্যায়। হাসনাত সারের ক্লাস। সম্পূর্ণ ফ্রি।',
        image: `${IMAGE_BASE}acs27bioc1.jpg`
    },
    {
        id: 9,
        name: 'ACS 27 - জীববিজ্ঞান C2',
        category: 'acs27',
        subCategory: 'biology',
        price: '৭০ টাকা',
        duration: '৪ মাস',
        instructor: 'হাসনাত',
        cycle: 'C2',
        type: 'paid',
        telegramLink: null,
        shortDesc: 'ACS 27 জীববিজ্ঞান C2',
        fullDesc: 'ACS 27 জীববিজ্ঞানের C2 অধ্যায়। হাসনাত সারের ক্লাস।',
        image: `${IMAGE_BASE}acs27bioc2.jpg`
    },
    {
        id: 10,
        name: 'ACS 27 - জীববিজ্ঞান C3',
        category: 'acs27',
        subCategory: 'biology',
        price: '৭০ টাকা',
        duration: '৪ মাস',
        instructor: 'হাসনাত',
        cycle: 'C3',
        type: 'paid',
        telegramLink: null,
        shortDesc: 'ACS 27 জীববিজ্ঞান C3',
        fullDesc: 'ACS 27 জীববিজ্ঞানের C3 অধ্যায়। হাসনাত সারের ক্লাস।',
        image: `${IMAGE_BASE}acs27bioc3.jpg`
    },
    {
        id: 11,
        name: 'ACS 27 - জীববিজ্ঞান C4',
        category: 'acs27',
        subCategory: 'biology',
        price: '৭০ টাকা',
        duration: '৪ মাস',
        instructor: 'হাসনাত',
        cycle: 'C4',
        type: 'paid',
        telegramLink: null,
        shortDesc: 'ACS 27 জীববিজ্ঞান C4',
        fullDesc: 'ACS 27 জীববিজ্ঞানের C4 অধ্যায়। হাসনাত সারের ক্লাস।',
        image: `${IMAGE_BASE}acs27bioc4.jpg`
    },
    {
        id: 12,
        name: 'ACS 27 - জীববিজ্ঞান C5',
        category: 'acs27',
        subCategory: 'biology',
        price: '৭০ টাকা',
        duration: '৪ মাস',
        instructor: 'হাসনাত',
        cycle: 'C5',
        type: 'paid',
        telegramLink: null,
        shortDesc: 'ACS 27 জীববিজ্ঞান C5',
        fullDesc: 'ACS 27 জীববিজ্ঞানের C5 অধ্যায়। হাসনাত সারের ক্লাস।',
        image: `${IMAGE_BASE}acs27bioc5.jpg`
    },
    {
        id: 13,
        name: 'ACS 27 - জীববিজ্ঞান C6',
        category: 'acs27',
        subCategory: 'biology',
        price: '৭০ টাকা',
        duration: '৪ মাস',
        instructor: 'হাসনাত',
        cycle: 'C6',
        type: 'paid',
        telegramLink: null,
        shortDesc: 'ACS 27 জীববিজ্ঞান C6',
        fullDesc: 'ACS 27 জীববিজ্ঞানের C6 অধ্যায়। হাসনাত সারের ক্লাস।',
        image: `${IMAGE_BASE}acs27bioc6.jpg`
    },
    {
        id: 14,
        name: 'ACS 27 - জীববিজ্ঞান কম্বো (C1-C6)',
        category: 'acs27',
        subCategory: 'biology',
        price: '৩০০ টাকা',
        duration: '৪ মাস',
        instructor: 'হাসনাত',
        cycle: 'Combo',
        type: 'paid',
        telegramLink: null,
        shortDesc: 'ACS 27 জীববিজ্ঞান কম্বো (C1-C6)',
        fullDesc: 'ACS 27 জীববিজ্ঞানের C1 থেকে C6 পর্যন্ত সব অধ্যায় একসাথে। হাসনাত সারের ক্লাস। সাশ্রয়ী মূল্যে সম্পূর্ণ কোর্স।',
        image: `${IMAGE_BASE}acs27biocombo.jpg`
    },

    // ==========================================
    // 📂 ACS 27 - গণিত (C1-C6 + Combo)
    // Instructor: আভি + রাকিব
    // ==========================================
    {
        id: 15,
        name: 'ACS 27 - গণিত C1',
        category: 'acs27',
        subCategory: 'math',
        price: '৭০ টাকা',
        duration: '৪ মাস',
        instructor: 'আভি ও রাকিব',
        cycle: 'C1',
        type: 'free',
        telegramLink: 'https://t.me/studyroom_acs27_math_c1',
        shortDesc: 'ACS 27 গণিত C1 - ফ্রি ক্লাস',
        fullDesc: 'ACS 27 গণিতের C1 অধ্যায়। আভি ও রাকিব সারের ক্লাস। সম্পূর্ণ ফ্রি।',
        image: `${IMAGE_BASE}acs27mathc1.jpg`
    },
    {
        id: 16,
        name: 'ACS 27 - গণিত C2',
        category: 'acs27',
        subCategory: 'math',
        price: '৭০ টাকা',
        duration: '৪ মাস',
        instructor: 'আভি ও রাকিব',
        cycle: 'C2',
        type: 'paid',
        telegramLink: null,
        shortDesc: 'ACS 27 গণিত C2',
        fullDesc: 'ACS 27 গণিতের C2 অধ্যায়। আভি ও রাকিব সারের ক্লাস।',
        image: `${IMAGE_BASE}acs27mathc2.jpg`
    },
    {
        id: 17,
        name: 'ACS 27 - গণিত C3',
        category: 'acs27',
        subCategory: 'math',
        price: '৭০ টাকা',
        duration: '৪ মাস',
        instructor: 'আভি ও রাকিব',
        cycle: 'C3',
        type: 'paid',
        telegramLink: null,
        shortDesc: 'ACS 27 গণিত C3',
        fullDesc: 'ACS 27 গণিতের C3 অধ্যায়। আভি ও রাকিব সারের ক্লাস।',
        image: `${IMAGE_BASE}acs27mathc3.jpg`
    },
    {
        id: 18,
        name: 'ACS 27 - গণিত C4',
        category: 'acs27',
        subCategory: 'math',
        price: '৭০ টাকা',
        duration: '৪ মাস',
        instructor: 'আভি ও রাকিব',
        cycle: 'C4',
        type: 'paid',
        telegramLink: null,
        shortDesc: 'ACS 27 গণিত C4',
        fullDesc: 'ACS 27 গণিতের C4 অধ্যায়। আভি ও রাকিব সারের ক্লাস।',
        image: `${IMAGE_BASE}acs27mathc4.jpg`
    },
    {
        id: 19,
        name: 'ACS 27 - গণিত C5',
        category: 'acs27',
        subCategory: 'math',
        price: '৭০ টাকা',
        duration: '৪ মাস',
        instructor: 'আভি ও রাকিব',
        cycle: 'C5',
        type: 'paid',
        telegramLink: null,
        shortDesc: 'ACS 27 গণিত C5',
        fullDesc: 'ACS 27 গণিতের C5 অধ্যায়। আভি ও রাকিব সারের ক্লাস।',
        image: `${IMAGE_BASE}acs27mathc5.jpg`
    },
    {
        id: 20,
        name: 'ACS 27 - গণিত C6',
        category: 'acs27',
        subCategory: 'math',
        price: '৭০ টাকা',
        duration: '৪ মাস',
        instructor: 'আভি ও রাকিব',
        cycle: 'C6',
        type: 'paid',
        telegramLink: null,
        shortDesc: 'ACS 27 গণিত C6',
        fullDesc: 'ACS 27 গণিতের C6 অধ্যায়। আভি ও রাকিব সারের ক্লাস।',
        image: `${IMAGE_BASE}acs27mathc6.jpg`
    },
    {
        id: 21,
        name: 'ACS 27 - গণিত কম্বো (C1-C6)',
        category: 'acs27',
        subCategory: 'math',
        price: '৩০০ টাকা',
        duration: '৪ মাস',
        instructor: 'আভি ও রাকিব',
        cycle: 'Combo',
        type: 'paid',
        telegramLink: null,
        shortDesc: 'ACS 27 গণিত কম্বো (C1-C6)',
        fullDesc: 'ACS 27 গণিতের C1 থেকে C6 পর্যন্ত সব অধ্যায় একসাথে। আভি ও রাকিব সারের ক্লাস। সাশ্রয়ী মূল্যে সম্পূর্ণ কোর্স।',
        image: `${IMAGE_BASE}acs27mathcombo.jpg`
    },

    // ==========================================
    // 📂 ACS 27 - কেমিস্ট্রি (C1-C5 + Combo)
    // Instructor: মোত্তাসিন + হেমেল
    // ==========================================
    {
        id: 22,
        name: 'ACS 27 - কেমিস্ট্রি C1',
        category: 'acs27',
        subCategory: 'chemistry',
        price: '৭০ টাকা',
        duration: '৪ মাস',
        instructor: 'মোত্তাসিন ও হেমেল',
        cycle: 'C1',
        type: 'free',
        telegramLink: 'https://t.me/studyroom_acs27_chemistry_c1',
        shortDesc: 'ACS 27 কেমিস্ট্রি C1 - ফ্রি ক্লাস',
        fullDesc: 'ACS 27 কেমিস্ট্রির C1 অধ্যায়। মোত্তাসিন ও হেমেল সারের ক্লাস। সম্পূর্ণ ফ্রি।',
        image: `${IMAGE_BASE}acs27chec1.jpg`
    },
    {
        id: 23,
        name: 'ACS 27 - কেমিস্ট্রি C2',
        category: 'acs27',
        subCategory: 'chemistry',
        price: '৭০ টাকা',
        duration: '৪ মাস',
        instructor: 'মোত্তাসিন ও হেমেল',
        cycle: 'C2',
        type: 'paid',
        telegramLink: null,
        shortDesc: 'ACS 27 কেমিস্ট্রি C2',
        fullDesc: 'ACS 27 কেমিস্ট্রির C2 অধ্যায়। মোত্তাসিন ও হেমেল সারের ক্লাস।',
        image: `${IMAGE_BASE}acs27chec2.jpg`
    },
    {
        id: 24,
        name: 'ACS 27 - কেমিস্ট্রি C3',
        category: 'acs27',
        subCategory: 'chemistry',
        price: '৭০ টাকা',
        duration: '৪ মাস',
        instructor: 'মোত্তাসিন ও হেমেল',
        cycle: 'C3',
        type: 'paid',
        telegramLink: null,
        shortDesc: 'ACS 27 কেমিস্ট্রি C3',
        fullDesc: 'ACS 27 কেমিস্ট্রির C3 অধ্যায়। মোত্তাসিন ও হেমেল সারের ক্লাস।',
        image: `${IMAGE_BASE}acs27chec3.jpg`
    },
    {
        id: 25,
        name: 'ACS 27 - কেমিস্ট্রি C4',
        category: 'acs27',
        subCategory: 'chemistry',
        price: '৭০ টাকা',
        duration: '৪ মাস',
        instructor: 'মোত্তাসিন ও হেমেল',
        cycle: 'C4',
        type: 'paid',
        telegramLink: null,
        shortDesc: 'ACS 27 কেমিস্ট্রি C4',
        fullDesc: 'ACS 27 কেমিস্ট্রির C4 অধ্যায়। মোত্তাসিন ও হেমেল সারের ক্লাস।',
        image: `${IMAGE_BASE}acs27chec4.jpg`
    },
    {
        id: 26,
        name: 'ACS 27 - কেমিস্ট্রি C5',
        category: 'acs27',
        subCategory: 'chemistry',
        price: '৭০ টাকা',
        duration: '৪ মাস',
        instructor: 'মোত্তাসিন ও হেমেল',
        cycle: 'C5',
        type: 'paid',
        telegramLink: null,
        shortDesc: 'ACS 27 কেমিস্ট্রি C5',
        fullDesc: 'ACS 27 কেমিস্ট্রির C5 অধ্যায়। মোত্তাসিন ও হেমেল সারের ক্লাস।',
        image: `${IMAGE_BASE}acs27chec5.jpg`
    },
    {
        id: 27,
        name: 'ACS 27 - কেমিস্ট্রি কম্বো (C1-C5)',
        category: 'acs27',
        subCategory: 'chemistry',
        price: '৩০০ টাকা',
        duration: '৪ মাস',
        instructor: 'মোত্তাসিন ও হেমেল',
        cycle: 'Combo',
        type: 'paid',
        telegramLink: null,
        shortDesc: 'ACS 27 কেমিস্ট্রি কম্বো (C1-C5)',
        fullDesc: 'ACS 27 কেমিস্ট্রির C1 থেকে C5 পর্যন্ত সব অধ্যায় একসাথে। মোত্তাসিন ও হেমেল সারের ক্লাস। সাশ্রয়ী মূল্যে সম্পূর্ণ কোর্স।',
        image: `${IMAGE_BASE}acs27checombo.jpg`
    },

    // ==========================================
    // 📂 ACS 27 - ICT
    // Instructor: আভি + রাকিব
    // ==========================================
    {
        id: 28,
        name: 'ACS 27 - ICT',
        category: 'acs27',
        subCategory: 'ict',
        price: '৭০ টাকা',
        duration: '৪ মাস',
        instructor: 'আভি ও রাকিব',
        cycle: 'C1',
        type: 'paid',
        telegramLink: null,
        shortDesc: 'ACS 27 ICT কোর্স',
        fullDesc: 'ACS 27 ICT সম্পূর্ণ কোর্স। আভি ও রাকিব সারের ক্লাস।',
        image: `${IMAGE_BASE}acs27ict.jpg`
    },

    // ==========================================
    // 📂 ACS 28 - ফিজিক্স (C1-C6 + Combo)
    // Instructor: অপূর্ব + মাশরুর
    // ==========================================
    {
        id: 29,
        name: 'ACS 28 - ফিজিক্স C1',
        category: 'acs28',
        subCategory: 'physics',
        price: '১০০ টাকা',
        duration: '৪ মাস',
        instructor: 'অপূর্ব ও মাশরুর',
        cycle: 'C1',
        type: 'free',
        telegramLink: 'https://t.me/studyroom_acs28_physics_c1',
        shortDesc: 'ACS 28 ফিজিক্স C1 - ফ্রি ক্লাস',
        fullDesc: 'ACS 28 ফিজিক্সের C1 অধ্যায়। অপূর্ব ও মাশরুর সারের ক্লাস। সম্পূর্ণ ফ্রি।',
        image: `${IMAGE_BASE}acs28phyc1.jpg`
    },
    {
        id: 30,
        name: 'ACS 28 - ফিজিক্স C2',
        category: 'acs28',
        subCategory: 'physics',
        price: '১০০ টাকা',
        duration: '৪ মাস',
        instructor: 'অপূর্ব ও মাশরুর',
        cycle: 'C2',
        type: 'paid',
        telegramLink: null,
        shortDesc: 'ACS 28 ফিজিক্স C2',
        fullDesc: 'ACS 28 ফিজিক্সের C2 অধ্যায়। অপূর্ব ও মাশরুর সারের ক্লাস।',
        image: `${IMAGE_BASE}acs28phyc2.jpg`
    },
    {
        id: 31,
        name: 'ACS 28 - ফিজিক্স C3',
        category: 'acs28',
        subCategory: 'physics',
        price: '১০০ টাকা',
        duration: '৪ মাস',
        instructor: 'অপূর্ব ও মাশরুর',
        cycle: 'C3',
        type: 'paid',
        telegramLink: null,
        shortDesc: 'ACS 28 ফিজিক্স C3',
        fullDesc: 'ACS 28 ফিজিক্সের C3 অধ্যায়। অপূর্ব ও মাশরুর সারের ক্লাস।',
        image: `${IMAGE_BASE}acs28phyc3.jpg`
    },
    {
        id: 32,
        name: 'ACS 28 - ফিজিক্স C4',
        category: 'acs28',
        subCategory: 'physics',
        price: '১০০ টাকা',
        duration: '৪ মাস',
        instructor: 'অপূর্ব ও মাশরুর',
        cycle: 'C4',
        type: 'paid',
        telegramLink: null,
        shortDesc: 'ACS 28 ফিজিক্স C4',
        fullDesc: 'ACS 28 ফিজিক্সের C4 অধ্যায়। অপূর্ব ও মাশরুর সারের ক্লাস।',
        image: `${IMAGE_BASE}acs28phyc4.jpg`
    },
    {
        id: 33,
        name: 'ACS 28 - ফিজিক্স C5',
        category: 'acs28',
        subCategory: 'physics',
        price: '১০০ টাকা',
        duration: '৪ মাস',
        instructor: 'অপূর্ব ও মাশরুর',
        cycle: 'C5',
        type: 'paid',
        telegramLink: null,
        shortDesc: 'ACS 28 ফিজিক্স C5',
        fullDesc: 'ACS 28 ফিজিক্সের C5 অধ্যায়। অপূর্ব ও মাশরুর সারের ক্লাস।',
        image: `${IMAGE_BASE}acs28phyc5.jpg`
    },
    {
        id: 34,
        name: 'ACS 28 - ফিজিক্স C6',
        category: 'acs28',
        subCategory: 'physics',
        price: '১০০ টাকা',
        duration: '৪ মাস',
        instructor: 'অপূর্ব ও মাশরুর',
        cycle: 'C6',
        type: 'paid',
        telegramLink: null,
        shortDesc: 'ACS 28 ফিজিক্স C6',
        fullDesc: 'ACS 28 ফিজিক্সের C6 অধ্যায়। অপূর্ব ও মাশরুর সারের ক্লাস।',
        image: `${IMAGE_BASE}acs28phyc6.jpg`
    },
    {
        id: 35,
        name: 'ACS 28 - ফিজিক্স কম্বো (C1-C6)',
        category: 'acs28',
        subCategory: 'physics',
        price: '৪০০ টাকা',
        duration: '৪ মাস',
        instructor: 'অপূর্ব ও মাশরুর',
        cycle: 'Combo',
        type: 'paid',
        telegramLink: null,
        shortDesc: 'ACS 28 ফিজিক্স কম্বো (C1-C6)',
        fullDesc: 'ACS 28 ফিজিক্সের C1 থেকে C6 পর্যন্ত সব অধ্যায় একসাথে। অপূর্ব ও মাশরুর সারের ক্লাস। সাশ্রয়ী মূল্যে সম্পূর্ণ কোর্স।',
        image: `${IMAGE_BASE}acs28phycombo.jpg`
    },

    // ==========================================
    // 📂 ACS 28 - জীববিজ্ঞান (C1-C6 + Combo)
    // Instructor: হাসনাত
    // ==========================================
    {
        id: 36,
        name: 'ACS 28 - জীববিজ্ঞান C1',
        category: 'acs28',
        subCategory: 'biology',
        price: '১০০ টাকা',
        duration: '৪ মাস',
        instructor: 'হাসনাত',
        cycle: 'C1',
        type: 'free',
        telegramLink: 'https://t.me/studyroom_acs28_biology_c1',
        shortDesc: 'ACS 28 জীববিজ্ঞান C1 - ফ্রি ক্লাস',
        fullDesc: 'ACS 28 জীববিজ্ঞানের C1 অধ্যায়। হাসনাত সারের ক্লাস। সম্পূর্ণ ফ্রি।',
        image: `${IMAGE_BASE}acs28bioc1.jpg`
    },
    {
        id: 37,
        name: 'ACS 28 - জীববিজ্ঞান C2',
        category: 'acs28',
        subCategory: 'biology',
        price: '১০০ টাকা',
        duration: '৪ মাস',
        instructor: 'হাসনাত',
        cycle: 'C2',
        type: 'paid',
        telegramLink: null,
        shortDesc: 'ACS 28 জীববিজ্ঞান C2',
        fullDesc: 'ACS 28 জীববিজ্ঞানের C2 অধ্যায়। হাসনাত সারের ক্লাস।',
        image: `${IMAGE_BASE}acs28bioc2.jpg`
    },
    {
        id: 38,
        name: 'ACS 28 - জীববিজ্ঞান C3',
        category: 'acs28',
        subCategory: 'biology',
        price: '১০০ টাকা',
        duration: '৪ মাস',
        instructor: 'হাসনাত',
        cycle: 'C3',
        type: 'paid',
        telegramLink: null,
        shortDesc: 'ACS 28 জীববিজ্ঞান C3',
        fullDesc: 'ACS 28 জীববিজ্ঞানের C3 অধ্যায়। হাসনাত সারের ক্লাস।',
        image: `${IMAGE_BASE}acs28bioc3.jpg`
    },
    {
        id: 39,
        name: 'ACS 28 - জীববিজ্ঞান C4',
        category: 'acs28',
        subCategory: 'biology',
        price: '১০০ টাকা',
        duration: '৪ মাস',
        instructor: 'হাসনাত',
        cycle: 'C4',
        type: 'paid',
        telegramLink: null,
        shortDesc: 'ACS 28 জীববিজ্ঞান C4',
        fullDesc: 'ACS 28 জীববিজ্ঞানের C4 অধ্যায়। হাসনাত সারের ক্লাস।',
        image: `${IMAGE_BASE}acs28bioc4.jpg`
    },
    {
        id: 40,
        name: 'ACS 28 - জীববিজ্ঞান C5',
        category: 'acs28',
        subCategory: 'biology',
        price: '১০০ টাকা',
        duration: '৪ মাস',
        instructor: 'হাসনাত',
        cycle: 'C5',
        type: 'paid',
        telegramLink: null,
        shortDesc: 'ACS 28 জীববিজ্ঞান C5',
        fullDesc: 'ACS 28 জীববিজ্ঞানের C5 অধ্যায়। হাসনাত সারের ক্লাস।',
        image: `${IMAGE_BASE}acs28bioc5.jpg`
    },
    {
        id: 41,
        name: 'ACS 28 - জীববিজ্ঞান C6',
        category: 'acs28',
        subCategory: 'biology',
        price: '১০০ টাকা',
        duration: '৪ মাস',
        instructor: 'হাসনাত',
        cycle: 'C6',
        type: 'paid',
        telegramLink: null,
        shortDesc: 'ACS 28 জীববিজ্ঞান C6',
        fullDesc: 'ACS 28 জীববিজ্ঞানের C6 অধ্যায়। হাসনাত সারের ক্লাস।',
        image: `${IMAGE_BASE}acs28bioc6.jpg`
    },
    {
        id: 42,
        name: 'ACS 28 - জীববিজ্ঞান কম্বো (C1-C6)',
        category: 'acs28',
        subCategory: 'biology',
        price: '৪০০ টাকা',
        duration: '৪ মাস',
        instructor: 'হাসনাত',
        cycle: 'Combo',
        type: 'paid',
        telegramLink: null,
        shortDesc: 'ACS 28 জীববিজ্ঞান কম্বো (C1-C6)',
        fullDesc: 'ACS 28 জীববিজ্ঞানের C1 থেকে C6 পর্যন্ত সব অধ্যায় একসাথে। হাসনাত সারের ক্লাস। সাশ্রয়ী মূল্যে সম্পূর্ণ কোর্স।',
        image: `${IMAGE_BASE}acs28biocombo.jpg`
    },

    // ==========================================
    // 📂 ACS 28 - গণিত (C1-C6 + Combo)
    // Instructor: আভি + রাকিব
    // ==========================================
    {
        id: 43,
        name: 'ACS 28 - গণিত C1',
        category: 'acs28',
        subCategory: 'math',
        price: '১০০ টাকা',
        duration: '৪ মাস',
        instructor: 'আভি ও রাকিব',
        cycle: 'C1',
        type: 'free',
        telegramLink: 'https://t.me/studyroom_acs28_math_c1',
        shortDesc: 'ACS 28 গণিত C1 - ফ্রি ক্লাস',
        fullDesc: 'ACS 28 গণিতের C1 অধ্যায়। আভি ও রাকিব সারের ক্লাস। সম্পূর্ণ ফ্রি।',
        image: `${IMAGE_BASE}acs28mathc1.jpg`
    },
    {
        id: 44,
        name: 'ACS 28 - গণিত C2',
        category: 'acs28',
        subCategory: 'math',
        price: '১০০ টাকা',
        duration: '৪ মাস',
        instructor: 'আভি ও রাকিব',
        cycle: 'C2',
        type: 'paid',
        telegramLink: null,
        shortDesc: 'ACS 28 গণিত C2',
        fullDesc: 'ACS 28 গণিতের C2 অধ্যায়। আভি ও রাকিব সারের ক্লাস।',
        image: `${IMAGE_BASE}acs28mathc2.jpg`
    },
    {
        id: 45,
        name: 'ACS 28 - গণিত C3',
        category: 'acs28',
        subCategory: 'math',
        price: '১০০ টাকা',
        duration: '৪ মাস',
        instructor: 'আভি ও রাকিব',
        cycle: 'C3',
        type: 'paid',
        telegramLink: null,
        shortDesc: 'ACS 28 গণিত C3',
        fullDesc: 'ACS 28 গণিতের C3 অধ্যায়। আভি ও রাকিব সারের ক্লাস।',
        image: `${IMAGE_BASE}acs28mathc3.jpg`
    },
    {
        id: 46,
        name: 'ACS 28 - গণিত C4',
        category: 'acs28',
        subCategory: 'math',
        price: '১০০ টাকা',
        duration: '৪ মাস',
        instructor: 'আভি ও রাকিব',
        cycle: 'C4',
        type: 'paid',
        telegramLink: null,
        shortDesc: 'ACS 28 গণিত C4',
        fullDesc: 'ACS 28 গণিতের C4 অধ্যায়। আভি ও রাকিব সারের ক্লাস।',
        image: `${IMAGE_BASE}acs28mathc4.jpg`
    },
    {
        id: 47,
        name: 'ACS 28 - গণিত C5',
        category: 'acs28',
        subCategory: 'math',
        price: '১০০ টাকা',
        duration: '৪ মাস',
        instructor: 'আভি ও রাকিব',
        cycle: 'C5',
        type: 'paid',
        telegramLink: null,
        shortDesc: 'ACS 28 গণিত C5',
        fullDesc: 'ACS 28 গণিতের C5 অধ্যায়। আভি ও রাকিব সারের ক্লাস।',
        image: `${IMAGE_BASE}acs28mathc5.jpg`
    },
    {
        id: 48,
        name: 'ACS 28 - গণিত C6',
        category: 'acs28',
        subCategory: 'math',
        price: '১০০ টাকা',
        duration: '৪ মাস',
        instructor: 'আভি ও রাকিব',
        cycle: 'C6',
        type: 'paid',
        telegramLink: null,
        shortDesc: 'ACS 28 গণিত C6',
        fullDesc: 'ACS 28 গণিতের C6 অধ্যায়। আভি ও রাকিব সারের ক্লাস।',
        image: `${IMAGE_BASE}acs28mathc6.jpg`
    },
    {
        id: 49,
        name: 'ACS 28 - গণিত কম্বো (C1-C6)',
        category: 'acs28',
        subCategory: 'math',
        price: '৪০০ টাকা',
        duration: '৪ মাস',
        instructor: 'আভি ও রাকিব',
        cycle: 'Combo',
        type: 'paid',
        telegramLink: null,
        shortDesc: 'ACS 28 গণিত কম্বো (C1-C6)',
        fullDesc: 'ACS 28 গণিতের C1 থেকে C6 পর্যন্ত সব অধ্যায় একসাথে। আভি ও রাকিব সারের ক্লাস। সাশ্রয়ী মূল্যে সম্পূর্ণ কোর্স।',
        image: `${IMAGE_BASE}acs28mathcombo.jpg`
    },

    // ==========================================
    // 📂 ACS 28 - কেমিস্ট্রি (C1-C5 + Combo)
    // Instructor: মোত্তাসিন + হেমেল
    // ==========================================
    {
        id: 50,
        name: 'ACS 28 - কেমিস্ট্রি C1',
        category: 'acs28',
        subCategory: 'chemistry',
        price: '১০০ টাকা',
        duration: '৪ মাস',
        instructor: 'মোত্তাসিন ও হেমেল',
        cycle: 'C1',
        type: 'free',
        telegramLink: 'https://t.me/studyroom_acs28_chemistry_c1',
        shortDesc: 'ACS 28 কেমিস্ট্রি C1 - ফ্রি ক্লাস',
        fullDesc: 'ACS 28 কেমিস্ট্রির C1 অধ্যায়। মোত্তাসিন ও হেমেল সারের ক্লাস। সম্পূর্ণ ফ্রি।',
        image: `${IMAGE_BASE}acs28chec1.jpg`
    },
    {
        id: 51,
        name: 'ACS 28 - কেমিস্ট্রি C2',
        category: 'acs28',
        subCategory: 'chemistry',
        price: '১০০ টাকা',
        duration: '৪ মাস',
        instructor: 'মোত্তাসিন ও হেমেল',
        cycle: 'C2',
        type: 'paid',
        telegramLink: null,
        shortDesc: 'ACS 28 কেমিস্ট্রি C2',
        fullDesc: 'ACS 28 কেমিস্ট্রির C2 অধ্যায়। মোত্তাসিন ও হেমেল সারের ক্লাস।',
        image: `${IMAGE_BASE}acs28chec2.jpg`
    },
    {
        id: 52,
        name: 'ACS 28 - কেমিস্ট্রি C3',
        category: 'acs28',
        subCategory: 'chemistry',
        price: '১০০ টাকা',
        duration: '৪ মাস',
        instructor: 'মোত্তাসিন ও হেমেল',
        cycle: 'C3',
        type: 'paid',
        telegramLink: null,
        shortDesc: 'ACS 28 কেমিস্ট্রি C3',
        fullDesc: 'ACS 28 কেমিস্ট্রির C3 অধ্যায়। মোত্তাসিন ও হেমেল সারের ক্লাস।',
        image: `${IMAGE_BASE}acs28chec3.jpg`
    },
    {
        id: 53,
        name: 'ACS 28 - কেমিস্ট্রি C4',
        category: 'acs28',
        subCategory: 'chemistry',
        price: '১০০ টাকা',
        duration: '৪ মাস',
        instructor: 'মোত্তাসিন ও হেমেল',
        cycle: 'C4',
        type: 'paid',
        telegramLink: null,
        shortDesc: 'ACS 28 কেমিস্ট্রি C4',
        fullDesc: 'ACS 28 কেমিস্ট্রির C4 অধ্যায়। মোত্তাসিন ও হেমেল সারের ক্লাস।',
        image: `${IMAGE_BASE}acs28chec4.jpg`
    },
    {
        id: 54,
        name: 'ACS 28 - কেমিস্ট্রি C5',
        category: 'acs28',
        subCategory: 'chemistry',
        price: '১০০ টাকা',
        duration: '৪ মাস',
        instructor: 'মোত্তাসিন ও হেমেল',
        cycle: 'C5',
        type: 'paid',
        telegramLink: null,
        shortDesc: 'ACS 28 কেমিস্ট্রি C5',
        fullDesc: 'ACS 28 কেমিস্ট্রির C5 অধ্যায়। মোত্তাসিন ও হেমেল সারের ক্লাস।',
        image: `${IMAGE_BASE}acs28chec5.jpg`
    },
    {
        id: 55,
        name: 'ACS 28 - কেমিস্ট্রি কম্বো (C1-C5)',
        category: 'acs28',
        subCategory: 'chemistry',
        price: '৪০০ টাকা',
        duration: '৪ মাস',
        instructor: 'মোত্তাসিন ও হেমেল',
        cycle: 'Combo',
        type: 'paid',
        telegramLink: null,
        shortDesc: 'ACS 28 কেমিস্ট্রি কম্বো (C1-C5)',
        fullDesc: 'ACS 28 কেমিস্ট্রির C1 থেকে C5 পর্যন্ত সব অধ্যায় একসাথে। মোত্তাসিন ও হেমেল সারের ক্লাস। সাশ্রয়ী মূল্যে সম্পূর্ণ কোর্স।',
        image: `${IMAGE_BASE}acs28checombo.jpg`
    },

    // ==========================================
    // 📂 ACS 28 - ICT
    // Instructor: আভি + রাকিব
    // ==========================================
    {
        id: 56,
        name: 'ACS 28 - ICT',
        category: 'acs28',
        subCategory: 'ict',
        price: '১০০ টাকা',
        duration: '৪ মাস',
        instructor: 'আভি ও রাকিব',
        cycle: 'C1',
        type: 'paid',
        telegramLink: null,
        shortDesc: 'ACS 28 ICT কোর্স',
        fullDesc: 'ACS 28 ICT সম্পূর্ণ কোর্স। আভি ও রাকিব সারের ক্লাস।',
        image: `${IMAGE_BASE}acs28ict.jpg`
    },

    // ==========================================
    // 📂 ACS 26 - এডমিশন
    // Instructor: বিভিন্ন
    // ==========================================
    {
        id: 57,
        name: 'ACS 26 - এডমিশন ফিজিক্স',
        category: 'admission',
        subCategory: 'physics',
        price: '১৫০ টাকা',
        duration: '৪ মাস',
        instructor: 'অপূর্ব ও মাশরুর',
        cycle: null,
        type: 'paid',
        telegramLink: null,
        shortDesc: 'ACS 26 এডমিশন ফিজিক্স কোর্স',
        fullDesc: 'ACS 26 এডমিশন পরীক্ষার জন্য ফিজিক্সের সম্পূর্ণ প্রস্তুতি। অপূর্ব ও মাশরুর সারের ক্লাস।',
        image: `${IMAGE_BASE}acs26phy.jpg`
    },
    {
        id: 58,
        name: 'ACS 26 - এডমিশন কেমিস্ট্রি',
        category: 'admission',
        subCategory: 'chemistry',
        price: '১৫০ টাকা',
        duration: '৪ মাস',
        instructor: 'মোত্তাসিন ও হেমেল',
        cycle: null,
        type: 'paid',
        telegramLink: null,
        shortDesc: 'ACS 26 এডমিশন কেমিস্ট্রি কোর্স',
        fullDesc: 'ACS 26 এডমিশন পরীক্ষার জন্য কেমিস্ট্রির সম্পূর্ণ প্রস্তুতি। মোত্তাসিন ও হেমেল সারের ক্লাস।',
        image: `${IMAGE_BASE}acs26che.jpg`
    },
    {
        id: 59,
        name: 'ACS 26 - এডমিশন জীববিজ্ঞান',
        category: 'admission',
        subCategory: 'biology',
        price: '১৫০ টাকা',
        duration: '৪ মাস',
        instructor: 'হাসনাত',
        cycle: null,
        type: 'paid',
        telegramLink: null,
        shortDesc: 'ACS 26 এডমিশন জীববিজ্ঞান কোর্স',
        fullDesc: 'ACS 26 এডমিশন পরীক্ষার জন্য জীববিজ্ঞানের সম্পূর্ণ প্রস্তুতি। হাসনাত সারের ক্লাস।',
        image: `${IMAGE_BASE}acs26bio.jpg`
    },
    {
        id: 60,
        name: 'ACS 26 - এডমিশন গণিত',
        category: 'admission',
        subCategory: 'math',
        price: '১৫০ টাকা',
        duration: '৪ মাস',
        instructor: 'আভি ও রাকিব',
        cycle: null,
        type: 'paid',
        telegramLink: null,
        shortDesc: 'ACS 26 এডমিশন গণিত কোর্স',
        fullDesc: 'ACS 26 এডমিশন পরীক্ষার জন্য গণিতের সম্পূর্ণ প্রস্তুতি। আভি ও রাকিব সারের ক্লাস।',
        image: `${IMAGE_BASE}acs26math.jpg`
    },

    // ==========================================
    // 📂 ইঞ্জিনিয়ারিং - এডমিশন
    // ==========================================
    {
        id: 61,
        name: 'ইঞ্জিনিয়ারিং - ফিজিক্স',
        category: 'engineering',
        subCategory: 'physics',
        price: '১৫০ টাকা',
        duration: '৪ মাস',
        instructor: 'অপূর্ব ও মাশরুর',
        cycle: null,
        type: 'paid',
        telegramLink: null,
        shortDesc: 'ইঞ্জিনিয়ারিং ভর্তি ফিজিক্স কোর্স',
        fullDesc: 'ইঞ্জিনিয়ারিং ভর্তি পরীক্ষার জন্য ফিজিক্সের সম্পূর্ণ প্রস্তুতি। অপূর্ব ও মাশরুর সারের ক্লাস।',
        image: `${IMAGE_BASE}engphy.jpg`
    },
    {
        id: 62,
        name: 'ইঞ্জিনিয়ারিং - গণিত',
        category: 'engineering',
        subCategory: 'math',
        price: '১৫০ টাকা',
        duration: '৪ মাস',
        instructor: 'আভি ও রাকিব',
        cycle: null,
        type: 'paid',
        telegramLink: null,
        shortDesc: 'ইঞ্জিনিয়ারিং ভর্তি গণিত কোর্স',
        fullDesc: 'ইঞ্জিনিয়ারিং ভর্তি পরীক্ষার জন্য গণিতের সম্পূর্ণ প্রস্তুতি। আভি ও রাকিব সারের ক্লাস।',
        image: `${IMAGE_BASE}engmath.jpg`
    },
    {
        id: 63,
        name: 'ইঞ্জিনিয়ারিং - কেমিস্ট্রি',
        category: 'engineering',
        subCategory: 'chemistry',
        price: '১৫০ টাকা',
        duration: '৪ মাস',
        instructor: 'মোত্তাসিন ও হেমেল',
        cycle: null,
        type: 'paid',
        telegramLink: null,
        shortDesc: 'ইঞ্জিনিয়ারিং ভর্তি কেমিস্ট্রি কোর্স',
        fullDesc: 'ইঞ্জিনিয়ারিং ভর্তি পরীক্ষার জন্য কেমিস্ট্রির সম্পূর্ণ প্রস্তুতি। মোত্তাসিন ও হেমেল সারের ক্লাস।',
        image: `${IMAGE_BASE}engche.jpg`
    },

    // ==========================================
    // 📂 মেডিকেল - এডমিশন
    // ==========================================
    {
        id: 64,
        name: 'মেডিকেল - জীববিজ্ঞান',
        category: 'medical',
        subCategory: 'biology',
        price: '১৫০ টাকা',
        duration: '৪ মাস',
        instructor: 'হাসনাত',
        cycle: null,
        type: 'paid',
        telegramLink: null,
        shortDesc: 'মেডিকেল ভর্তি জীববিজ্ঞান কোর্স',
        fullDesc: 'মেডিকেল ভর্তি পরীক্ষার জন্য জীববিজ্ঞানের সম্পূর্ণ প্রস্তুতি। হাসনাত সারের ক্লাস।',
        image: `${IMAGE_BASE}medbio.jpg`
    },
    {
        id: 65,
        name: 'মেডিকেল - কেমিস্ট্রি',
        category: 'medical',
        subCategory: 'chemistry',
        price: '১৫০ টাকা',
        duration: '৪ মাস',
        instructor: 'মোত্তাসিন ও হেমেল',
        cycle: null,
        type: 'paid',
        telegramLink: null,
        shortDesc: 'মেডিকেল ভর্তি কেমিস্ট্রি কোর্স',
        fullDesc: 'মেডিকেল ভর্তি পরীক্ষার জন্য কেমিস্ট্রির সম্পূর্ণ প্রস্তুতি। মোত্তাসিন ও হেমেল সারের ক্লাস।',
        image: `${IMAGE_BASE}medche.jpg`
    },
    {
        id: 66,
        name: 'মেডিকেল - ফিজিক্স',
        category: 'medical',
        subCategory: 'physics',
        price: '১৫০ টাকা',
        duration: '৪ মাস',
        instructor: 'অপূর্ব ও মাশরুর',
        cycle: null,
        type: 'paid',
        telegramLink: null,
        shortDesc: 'মেডিকেল ভর্তি ফিজিক্স কোর্স',
        fullDesc: 'মেডিকেল ভর্তি পরীক্ষার জন্য ফিজিক্সের সম্পূর্ণ প্রস্তুতি। অপূর্ব ও মাশরুর সারের ক্লাস।',
        image: `${IMAGE_BASE}medphy.jpg`
    },

    // ==========================================
    // 📂 ভার্সিটি - এডমিশন
    // ==========================================
    {
        id: 67,
        name: 'ভার্সিটি - ফিজিক্স',
        category: 'varsity',
        subCategory: 'physics',
        price: '১৫০ টাকা',
        duration: '৪ মাস',
        instructor: 'অপূর্ব ও মাশরুর',
        cycle: null,
        type: 'paid',
        telegramLink: null,
        shortDesc: 'ভার্সিটি ভর্তি ফিজিক্স কোর্স',
        fullDesc: 'ভার্সিটি ভর্তি পরীক্ষার জন্য ফিজিক্সের সম্পূর্ণ প্রস্তুতি। অপূর্ব ও মাশরুর সারের ক্লাস।',
        image: `${IMAGE_BASE}varsityphy.jpg`
    },
    {
        id: 68,
        name: 'ভার্সিটি - গণিত',
        category: 'varsity',
        subCategory: 'math',
        price: '১৫০ টাকা',
        duration: '৪ মাস',
        instructor: 'আভি ও রাকিব',
        cycle: null,
        type: 'paid',
        telegramLink: null,
        shortDesc: 'ভার্সিটি ভর্তি গণিত কোর্স',
        fullDesc: 'ভার্সিটি ভর্তি পরীক্ষার জন্য গণিতের সম্পূর্ণ প্রস্তুতি। আভি ও রাকিব সারের ক্লাস।',
        image: `${IMAGE_BASE}varsitymath.jpg`
    },
    {
        id: 69,
        name: 'ভার্সিটি - কেমিস্ট্রি',
        category: 'varsity',
        subCategory: 'chemistry',
        price: '১৫০ টাকা',
        duration: '৪ মাস',
        instructor: 'মোত্তাসিন ও হেমেল',
        cycle: null,
        type: 'paid',
        telegramLink: null,
        shortDesc: 'ভার্সিটি ভর্তি কেমিস্ট্রি কোর্স',
        fullDesc: 'ভার্সিটি ভর্তি পরীক্ষার জন্য কেমিস্ট্রির সম্পূর্ণ প্রস্তুতি। মোত্তাসিন ও হেমেল সারের ক্লাস।',
        image: `${IMAGE_BASE}varsityche.jpg`
    },
    {
        id: 70,
        name: 'ভার্সিটি - জীববিজ্ঞান',
        category: 'varsity',
        subCategory: 'biology',
        price: '১৫০ টাকা',
        duration: '৪ মাস',
        instructor: 'হাসনাত',
        cycle: null,
        type: 'paid',
        telegramLink: null,
        shortDesc: 'ভার্সিটি ভর্তি জীববিজ্ঞান কোর্স',
        fullDesc: 'ভার্সিটি ভর্তি পরীক্ষার জন্য জীববিজ্ঞানের সম্পূর্ণ প্রস্তুতি। হাসনাত সারের ক্লাস।',
        image: `${IMAGE_BASE}varsitybio.jpg`
    }
];












// 🎟️ কুপন কোড লিস্ট
// ============================================

const couponsData = [
    // ===== উদাহরণ ১: নির্দিষ্ট একাধিক কোর্সে % ছাড় =====
    {
        code: 'PHY20',
        discount: 20,                    // ২০% ছাড়
        type: 'percentage',              // 'percentage' বা 'fixed'
        courseIds: [2],   // 👈 এই কোর্স আইডিগুলোতে
        maxUses: 100,
        usedCount: 0,
        expiryDate: '2026-12-31',
        active: true
    },
    
    // ===== উদাহরণ ২: শুধু একটি কোর্সে ১০০% ছাড় =====
  /*  {
        code: 'FREEACS',
        discount: 100,
        type: 'percentage',
        courseIds: [1],                  // 👈 শুধু ID 1
        maxUses: 5,
        usedCount: 0,
        expiryDate: '2026-03-31',
        active: true
    },
    
    // ===== উদাহরণ ৩: নির্দিষ্ট কোর্সে ফিক্সড ছাড় =====
    {
        code: 'SAVE50',
        discount: 50,                    // ৫০ টাকা ছাড়
        type: 'fixed',
        courseIds: [57, 58, 59, 60],     // 👈 শুধু ACS 26 এডমিশন
        maxUses: 50,
        usedCount: 0,
        expiryDate: '2026-06-30',
        active: true
    },
    
    // ===== উদাহরণ ৪: সব কোর্সে =====
    {
        code: 'WELCOME10',
        discount: 10,
        type: 'percentage',
        courseIds: ['all'],              // 👈 সব কোর্সে
        maxUses: 1000,
        usedCount: 0,
        expiryDate: '2026-12-31',
        active: true
    }*/
];





console.log('✅ Total Courses Loaded:', coursesData.length);
