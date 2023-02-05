
const Data = [
    {    
        id:1,
        name:'burger',
        recipe:'बन- 2,   खीरा- 1,  बंदगोभी- 5 से 6 पत्ते  टमाटर- 2,  पनीर स्लाइस- 2, टमैटो सॉस हरे धनिये की चटनी चाट मसाला- 1, छोटी चम्मच',
        image:'https://media.istockphoto.com/id/1206323282/photo/juicy-hamburger-on-white-background.jpg?s=612x612&w=0&k=20&c=K0DxyiChLwewXcCy8aLjjOqkc8QXPgQMAW-vwRCzqG4='
    },
    {
        id:2,
        name:'momos',
         recipe:'भरावन के लिए1 कप गाजर, कद्दूकस1 कप पत्तागोभी, कद्दूकस1 टेबल स्पून तेल1/2 कप प्याज़, बारीक कटा हुआ1 टी स्पून लहसुन, टुकड़ों में कटा हुआ1 टी स्पून सोया सॉसनमक¼ टी स्पून सिरका¼ टी स्पून काली मिर्च',
         image:'https://c.ndtvimg.com/2020-01/2brioi88_momos_625x300_21_January_20.jpg'
    },
    {
        id:3,
        name:'fingers',
        recipe:'बड़े आलू(Potato): 1 किलो, मैदा/मक्के का आटा(Corn flour): 2 चम्मचतेल(Oil): छानने के लिए,नमक(Salt): स्वाद अनुशार,काली मिर्च पाउडर(Black paper),चाट मशाला(Chaat masala),धनिया पत्ता(Coriander leaf)',
        image:'https://recipesinhindi.net/wp-content/uploads/2018/03/Recipesinhindi-9.png'
    },
    {
        id:4,
        name:'chowmin',
        recipe:'200 ग्राम फ्रेश नूडल्स5 कप पानी1 टी स्पून नमक2 टेबल स्पून तेल1 टी स्पून अदरक लहसुन पेस्ट1 टी स्पून लाल मिर्च पाउडर1/4 कप प्याज, कटा हुआ1/2 टी स्पून सोया सॉस,वेजिटेबल चाऊमीन की सामग्री200 ग्राम फ्रेश नूडल्स5 कप पानी1 टी स्पून नमक2 टेबल स्पून तेल1 टी स्पून अदरक लहसुन पेस्ट1 टी स्पून लाल मिर्च पाउडर1/4 कप प्याज, कटा हुआ1/2 टी स्पून सोया सॉस1 टी स्पून नमक1/4 कप सेलेरी , टुकड़ों में कटा हुआ1 टी स्पून सिरका1 टी स्पून चिली सॉस1 कप हरी और लाल शिमला मिर्च1 मशरूम1 कप गाजर, गुच्छा1 हरी मिर्च, टुकड़ों में कटा हुआ1 टेबल स्पून टोमैटो सॉस1 टेबल स्पून हरा प्याज़1 टी स्पून लहसुन, टुकड़ों में कटा हुआ1/2 टी स्पून कालीमिर्च पाउडर',
        image:'https://c.ndtvimg.com/2018-09/i9993f38_noodles_625x300_26_September_18.jpg'
    },
    {
        id:5,
        name:'pizza',
        recipe:'ब्रेड पिज़्ज़ा बनाने का तरीका (Bread Pizza Recipe)  मात्रा 4 लोगों के लिए, ब्रेड पिज़्ज़ा बनाने की सामग्री, ब्रेड पिज़्ज़ा बनाने की विधि (Bread Pizza banane ki Vidhi),पिज़्ज़ा बनाने का तरीका (Pizza Base Recipe), मात्रा 4 लोगों के लिएपिज़्ज़ा बनाने की सामग्री, तवे पर पिज़्ज़ा बनाने की विधि ( Tawa per Pizza banane ki vidhi) ,माइक्रोवेव पर पिज़्ज़ा बनाने की विधि (Microvave pizza Recipe ) ,   पिज़्ज़ा पोप्स बनाने की रेसिपी (Pizza pop recipe),   फोल्डिंग पिज़्ज़ा बनाने की सामग्री ,फोल्डेड पीज़ा बनाने की विधि', 
        image:'https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=428&q=80'
    },
    {
        id:6,
        name:'momos',
        recipe:'बन- 2,   खीरा- 1,  बंदगोभी- 5 से 6 पत्ते  टमाटर- 2,  पनीर स्लाइस- 2, टमैटो सॉस हरे धनिये की चटनी चाट मसाला- 1, छोटी चम्मच',
        image:'https://media.istockphoto.com/id/1206323282/photo/juicy-hamburger-on-white-background.jpg?s=612x612&w=0&k=20&c=K0DxyiChLwewXcCy8aLjjOqkc8QXPgQMAW-vwRCzqG4='
    },
    {
        id:7,
        name:'burger',
         recipe:'भरावन के लिए1 कप गाजर, कद्दूकस1 कप पत्तागोभी, कद्दूकस1 टेबल स्पून तेल1/2 कप प्याज़, बारीक कटा हुआ1 टी स्पून लहसुन, टुकड़ों में कटा हुआ1 टी स्पून सोया सॉसनमक¼ टी स्पून सिरका¼ टी स्पून काली मिर्च',
         image:'https://c.ndtvimg.com/2020-01/2brioi88_momos_625x300_21_January_20.jpg'
    },
    {
        id:8,
        name:'momos',
        recipe:'बड़े आलू(Potato): 1 किलो, मैदा/मक्के का आटा(Corn flour): 2 चम्मचतेल(Oil): छानने के लिए,नमक(Salt): स्वाद अनुशार,काली मिर्च पाउडर(Black paper),चाट मशाला(Chaat masala),धनिया पत्ता(Coriander leaf)',
        image:'https://recipesinhindi.net/wp-content/uploads/2018/03/Recipesinhindi-9.png'
    },
    {
        id:9,
        name:'fingers',
        recipe:'200 ग्राम फ्रेश नूडल्स5 कप पानी1 टी स्पून नमक2 टेबल स्पून तेल1 टी स्पून अदरक लहसुन पेस्ट1 टी स्पून लाल मिर्च पाउडर1/4 कप प्याज, कटा हुआ1/2 टी स्पून सोया सॉस,वेजिटेबल चाऊमीन की सामग्री200 ग्राम फ्रेश नूडल्स5 कप पानी1 टी स्पून नमक2 टेबल स्पून तेल1 टी स्पून अदरक लहसुन पेस्ट1 टी स्पून लाल मिर्च पाउडर1/4 कप प्याज, कटा हुआ1/2 टी स्पून सोया सॉस1 टी स्पून नमक1/4 कप सेलेरी , टुकड़ों में कटा हुआ1 टी स्पून सिरका1 टी स्पून चिली सॉस1 कप हरी और लाल शिमला मिर्च1 मशरूम1 कप गाजर, गुच्छा1 हरी मिर्च, टुकड़ों में कटा हुआ1 टेबल स्पून टोमैटो सॉस1 टेबल स्पून हरा प्याज़1 टी स्पून लहसुन, टुकड़ों में कटा हुआ1/2 टी स्पून कालीमिर्च पाउडर',
        image:'https://c.ndtvimg.com/2018-09/i9993f38_noodles_625x300_26_September_18.jpg'
    },
    {
        id:10,
        name:'chowmin',
        recipe:'ब्रेड पिज़्ज़ा बनाने का तरीका (Bread Pizza Recipe)  मात्रा 4 लोगों के लिए, ब्रेड पिज़्ज़ा बनाने की सामग्री, ब्रेड पिज़्ज़ा बनाने की विधि (Bread Pizza banane ki Vidhi),पिज़्ज़ा बनाने का तरीका (Pizza Base Recipe), मात्रा 4 लोगों के लिएपिज़्ज़ा बनाने की सामग्री, तवे पर पिज़्ज़ा बनाने की विधि ( Tawa per Pizza banane ki vidhi) ,माइक्रोवेव पर पिज़्ज़ा बनाने की विधि (Microvave pizza Recipe ) ,   पिज़्ज़ा पोप्स बनाने की रेसिपी (Pizza pop recipe),   फोल्डिंग पिज़्ज़ा बनाने की सामग्री ,फोल्डेड पीज़ा बनाने की विधि', 
        image:'https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=428&q=80'
    },
    {    
        id:11,
        name:'pizza',
        recipe:'बन- 2,   खीरा- 1,  बंदगोभी- 5 से 6 पत्ते  टमाटर- 2,  पनीर स्लाइस- 2, टमैटो सॉस हरे धनिये की चटनी चाट मसाला- 1, छोटी चम्मच',
        image:'https://media.istockphoto.com/id/1206323282/photo/juicy-hamburger-on-white-background.jpg?s=612x612&w=0&k=20&c=K0DxyiChLwewXcCy8aLjjOqkc8QXPgQMAW-vwRCzqG4='
    },
    {
        id:12,
        name:'momos',
         recipe:'भरावन के लिए1 कप गाजर, कद्दूकस1 कप पत्तागोभी, कद्दूकस1 टेबल स्पून तेल1/2 कप प्याज़, बारीक कटा हुआ1 टी स्पून लहसुन, टुकड़ों में कटा हुआ1 टी स्पून सोया सॉसनमक¼ टी स्पून सिरका¼ टी स्पून काली मिर्च',
         image:'https://c.ndtvimg.com/2020-01/2brioi88_momos_625x300_21_January_20.jpg'
    }
]

export default Data