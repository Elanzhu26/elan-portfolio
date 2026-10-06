/*
  EDITING GUIDE
  1. Put your images in /assets/photos/.
  2. Replace a slot's empty src with: src: "assets/photos/your-file.webp"
  3. Keep alt text short and specific.
  4. Add or remove slots freely. Layout values: wide, tall, square, landscape.
*/
window.ELAN_SITE = {
  chapters: [
    {
      id: "music",
      number: "01",
      title: "Music",
      subtitle: "The Whirling Audio Studio of Passion, Fear, and Effort",
      intro: "I have been immersed in music for as long as I can remember. Choirs taught me how to listen; difficult rooms taught me why I still wanted to sing.",
      accent: "#b65f67",
      hero: { src: "assets/photos/music/singing-from-the-start.webp", alt: "A childhood moment singing into a microphone", caption: "I have always loved to sing." },
      scenes: [
        {
          id: "childhood", eyebrow: "01 / childhood chorus", title: "Learning to sing together",
          note: "From five to twelve, rehearsals, recording rooms, and stages filled my childhood. We travelled, met new audiences, and learned to watch every movement of the conductor.",
          aside: "2016–2018 · Shanghai · Bali",
          media: [
            { key: "music-child-01", layout: "wide", label: "Golden Hall · 2016", src: "assets/photos/music/childhood-2016-golden-hall.webp", alt: "Children's choir performing in the Golden Hall in 2016" },
            { key: "music-child-03", layout: "landscape", label: "Spring Festival · 2017", src: "assets/photos/music/lunar-2017.webp", alt: "Children's choir performing at a Spring Festival show in 2017" },
            { key: "music-child-04", layout: "portrait", label: "a closer look · 2017", src: "assets/photos/music/lunar-2017-close.webp", alt: "Close view of a young singer performing in 2017" },
            { key: "music-child-05", layout: "landscape", label: "Minhang · 2017", src: "assets/photos/music/childhood-2017-minhang.webp", alt: "Children's choir performing at a community event in 2017" },
            { key: "music-child-06", layout: "landscape", label: "Spring Festival · 2018", src: "assets/photos/music/lunar-2018.webp", alt: "Choir performing at a Spring Festival concert in 2018" },
            { key: "music-child-07", layout: "wide", label: "Shanghai International Puppet Festival", src: "assets/photos/music/childhood-2018-puppet.webp", alt: "Choir opening the Shanghai International Puppet Festival" },
            { key: "music-child-08", layout: "landscape", label: "classic animation OST · live", src: "assets/photos/music/cartoon-ost-live.webp", alt: "Choir singing classic animation music on a large stage" },
            { key: "music-child-09", layout: "wide feature", label: "Bali International Choir Festival · 2018", src: "assets/photos/music/childhood-2018-bali.webp", alt: "Choir standing on stage at the Bali International Choir Festival" },
            { key: "music-child-film", layout: "wide", label: "the summer we won in Bali", kind: "video", src: "assets/photos/music/bali-award-2018.m4v", poster: "assets/photos/music/bali-award-2018-poster.webp" }
          ]
        },
        {
          id: "studio", eyebrow: "02 / the turning point", title: "The studio that changed everything",
          note: "At seven, the recording studio felt like a place of pride. By twelve, the unreasonable pressure placed on us as young children had turned it into a place of fear, and I was hurt by the harsh commands we received during rehearsals. In the winter of 2020, I left the choir—but I did not leave music.",
          aside: "EP.1 · tears, absurdity, and courage",
          media: [
            { key: "music-child-02", layout: "wide", label: "the recording room", src: "assets/photos/music/studio-before-2017.webp", alt: "Children's choir together in a recording studio before 2017" },
            { key: "music-studio-01", layout: "landscape", label: "when the studio still felt magical", src: "assets/photos/music/studio-choir.webp", alt: "A children's choir recording together in a professional studio" },
            { key: "music-studio-02", layout: "wide", label: "During this recording, our director kicked me out of the studio and put too much pressure on me. So, I left the choir, which I had been in for my entire childhood.", src: "assets/photos/music/studio-2020-turning-point.webp", alt: "Choir recording a song during the early COVID period in 2020" }
          ]
        },
        {
          id: "solo", eyebrow: "03 / finding my own voice", title: "But, I kept singing...",
          note: "Without the old choir and its familiar stages, I began finding rooms of my own—at school, at public events, and on commercial stages across Shanghai.",
          aside: "2019–2023 · one microphone at a time",
          media: [
            { key: "music-solo-01", layout: "landscape", label: "solo · 2019", src: "assets/photos/music/solo-2019.webp", alt: "Solo performance on a community stage in 2019" },
            { key: "music-solo-02", layout: "landscape", label: "school performance · 2020", src: "assets/photos/music/solo-2020.webp", alt: "Singing solo during a school performance in 2020" },
            { key: "music-solo-03", layout: "wide", label: "The Singer · 2023", src: "assets/photos/music/solo-2023-1.webp", alt: "Singing solo on The Singer stage in 2023" },
            { key: "music-solo-04", layout: "landscape", label: "", src: "assets/photos/music/solo-2023-2.webp", alt: "Solo performance in a red costume in 2023" },
            { key: "music-solo-05", layout: "landscape", label: "", src: "assets/photos/music/solo-2023-3.webp", alt: "Solo singer performing under blue stage lights" },
            { key: "music-solo-06", layout: "wide", label: "still singing", src: "assets/photos/music/solo-2023-4.webp", alt: "Solo singer holding a microphone on stage" },
            { key: "music-lesmis-00", layout: "portrait", label: "the beginning · 2024", src: "assets/photos/music/musical-2024.webp", alt: "A musical theatre performance in 2024" }
          ]
        },
        {
          id: "lesmis", eyebrow: "04 / musical theatre", title: "Les Misérables",
          note: "Role: Cast of Cosette · Date: 2025.5.29 · Seats sold: 389 · Revenue: ¥50K+ CNY",
          aside: "",
          media: [
            { key: "music-lesmis-film", layout: "wide feature-video", label: "Watch the full performance", kind: "external", href: "https://www.youtube.com/watch?v=utAxKuVob9c", src: "assets/photos/music/lesmis-stage-2.webp", alt: "Les Misérables full performance video" },
            { key: "music-lesmis-01", layout: "compact", label: "rehearsal", src: "assets/photos/music/lesmis-rehearsal.webp", alt: "Two performers rehearsing Les Misérables" },
            { key: "music-lesmis-02", layout: "compact", label: "on stage", src: "assets/photos/music/lesmis-stage-1.webp", alt: "Singer performing in costume during Les Misérables" },
            { key: "music-lesmis-new-01", layout: "compact", label: "Cosette", src: "assets/photos/music/lesmis-cosette-closeup.webp", alt: "Close portrait of Cosette singing on stage" },
            { key: "music-lesmis-new-02", layout: "compact", label: "the final scene", src: "assets/photos/music/lesmis-cosette-scene.webp", alt: "Cosette and the cast during the final scene" },
            { key: "music-lesmis-03", layout: "compact", label: "the whole scene", src: "assets/photos/music/lesmis-stage-3.webp", alt: "Full stage view of the Les Misérables production" },
            { key: "music-lesmis-04", layout: "compact", label: "ensemble", src: "assets/photos/music/lesmis-stage-4.webp", alt: "Ensemble singing during Les Misérables" },
            { key: "music-lesmis-05", layout: "compact feature-still", label: "the end", src: "assets/photos/music/lesmis-curtain.webp", alt: "Les Misérables cast at the curtain call" },
            { key: "music-lesmis-06", layout: "compact feature-still", label: "taking a bow", src: "assets/photos/music/lesmis-bows.webp", alt: "Performers taking their bows after Les Misérables" },
            { key: "music-lesmis-new-03", layout: "compact", label: "at intermission", src: "assets/photos/music/lesmis-autograph-intermission.jpg", alt: "Signing an autograph for an audience member during intermission" },
            { key: "music-lesmis-07", layout: "compact", label: "after the show", src: "assets/photos/music/lesmis-cast.webp", alt: "Large cast photograph after the Les Misérables performance" }
          ]
        },
        {
          id: "charity", eyebrow: "05 / now", title: "Now… I still love to sing",
          note: "No matter whether it is pop music, musical theatre, or R&B.",
          aside: "“This is the Rainie Love that gives me courage.”",
          media: [
            { key: "music-charity-01", layout: "portrait", label: "before the first note", src: "assets/photos/music/charity-2026-1.webp", alt: "Singing in a white dress at a 2026 charity concert" },
            { key: "music-charity-02", layout: "landscape", label: "in the lights", src: "assets/photos/music/charity-2026-2.webp", alt: "Singer performing on stage at the 2026 charity concert" },
            { key: "music-charity-03", layout: "landscape", label: "rain and love", src: "assets/photos/music/charity-2026-3.webp", alt: "Charity concert performance with a Rain and Love stage backdrop" }
          ]
        }
      ]
    },
    {
      id: "rowing",
      number: "02",
      title: "Crew Girl",
      subtitle: "the seasons we rowed through",
      intro: "A friend took me to try out for the rowing team. Then the water became part of my days.",
      accent: "#345b83",
      scenes: [
        {
          id: "crew", eyebrow: "01 / the beginning", title: "Meeting my crew",
          note: "A friend took me to try out for the rowing team. Somewhere along the way, I found my crew.",
          media: [
            { key: "crew-01", layout: "wide", label: "our first winter race", src: "assets/photos/rowing/photo-38.webp", alt: "Five teammates together after our first winter race" },
            { key: "crew-02", layout: "portrait", display: "contain", label: "with my crew", src: "assets/photos/rowing/with-my-crew.jpg", alt: "A sunny selfie with rowing teammates after practice" }
          ]
        },
        {
          id: "winter", eyebrow: "02 / four seasons", title: "Winter",
          note: "Our first game together — cold air, warm memories.",
          aside: "First game · winter",
          media: [
            { key: "winter-01", layout: "wide", label: "the first game", src: "assets/photos/rowing/photo-09.webp", alt: "The team bringing medals home from our first winter game" }
          ]
        },
        {
          id: "spring", eyebrow: "03 / four seasons", title: "Spring",
          note: "New races, longer days, and a little more confidence with every stroke.",
          aside: "Nanjing Open · 2025   /   Shanghai · spring 2026",
          media: [
            { key: "spring-video", layout: "wide feature-video", label: "Watch our stunning comeback!", kind: "video", src: "assets/photos/rowing/clip-01-hd.m4v", poster: "assets/photos/rowing/clip-01-poster.jpg" },
            { key: "spring-nanjing-01", layout: "wide", display: "half", label: "Nanjing · spring 2025", src: "assets/photos/rowing/photo-06.webp", alt: "Our four crossing the course at the Nanjing spring regatta" },
            { key: "spring-nanjing-03", layout: "wide", display: "half", label: "afterwards · Nanjing 2025", src: "assets/photos/rowing/photo-36.webp", alt: "Rowing crews on the course after the Nanjing regatta" },
            { key: "spring-nanjing-02", layout: "wide", label: "Rose Regatta · Nanjing 2025", src: "assets/photos/rowing/photo-37.webp", alt: "Team photograph at the 2025 Nanjing Rose Regatta" },
            { key: "spring-city-01", layout: "landscape", label: "double sculls · City Elite Regatta 2026", src: "assets/photos/rowing/photo-23.webp", alt: "Two rowers racing a double scull at the 2026 City Elite Regatta" },
            { key: "spring-city-02", layout: "landscape", label: "finding the rhythm · City Regatta 2026", src: "assets/photos/rowing/photo-24.webp", alt: "Two rowers moving together at the 2026 City Regatta" },
            { key: "spring-city-03", layout: "wide", label: "Shanghai City Regatta 2026", src: "assets/photos/rowing/photo-25.webp", alt: "Many crews lined up at the 2026 Shanghai City Regatta" },
            { key: "spring-city-04", layout: "landscape", display: "stage-pair", label: "the stage", src: "assets/photos/rowing/photo-14.webp", alt: "Two teammates on the 2026 Shanghai City Elite Regatta stage" },
            { key: "spring-city-gold", layout: "portrait", display: "contain stage-pair", label: "city elite gold · 2026", src: "assets/photos/rowing/city-elite-gold-2026-fixed.jpg", alt: "Two gold medals and athlete passes from the 2026 Shanghai City Elite Regatta" },
            { key: "spring-city-06", layout: "wide", label: "our school crew", src: "assets/photos/rowing/photo-35.webp", alt: "School rowing team standing together at the regatta" }
          ]
        },
        {
          id: "summer", eyebrow: "04 / four seasons", title: "Long summer, long practice season",
          note: "",
          media: [
            { key: "summer-01", layout: "wide", label: "blue-sky practice", src: "assets/photos/rowing/photo-10.webp", alt: "Rowing shell on a canal beneath a blue summer sky" },
            { key: "summer-02", layout: "landscape", label: "ready to push", src: "assets/photos/rowing/photo-11.webp", alt: "Four rowers preparing to move from the dock" },
            { key: "summer-03", layout: "landscape", label: "", src: "assets/photos/rowing/photo-13.webp", alt: "Two rowers passing under a bridge" },
            { key: "summer-07", layout: "portrait", label: "boats at sunset", src: "assets/photos/rowing/photo-28.webp", alt: "Carrying a rowing shell as the sun sets" },
            { key: "summer-video", layout: "wide feature-video", label: "one more training lap", kind: "video", src: "assets/photos/rowing/clip-03.m4v", poster: "assets/photos/rowing/clip-03-poster.jpg" },
            { key: "summer-hkrc", layout: "wide", label: "last practice before HKRC", src: "assets/photos/rowing/photo-31.webp", alt: "Four rowers during their last practice before HKRC" }
          ]
        },
        {
          id: "autumn", eyebrow: "05 / four seasons", title: "Autumn",
          note: "Sha Tin in autumn: new water, a full course, and the team beside me.",
          aside: "Sha Tin · Hong Kong · autumn 2025",
          media: [
            { key: "autumn-01", layout: "portrait", label: "Sha Tin docks", src: "assets/photos/rowing/photo-16.webp", alt: "Sitting beside a rowing shell at the Sha Tin dock" },
            { key: "autumn-02", layout: "portrait", display: "contain", label: "arriving at Sha Tin", src: "assets/photos/rowing/photo-04.webp", alt: "Outside the Hong Kong Sha Tin Rowing Centre" },
            { key: "autumn-03", layout: "portrait", label: "before the race", src: "assets/photos/rowing/photo-02.webp", alt: "Portrait beside the water at Sha Tin" },
            { key: "autumn-04", layout: "landscape", label: "across the course", src: "assets/photos/rowing/photo-03.webp", alt: "A rowing crew crossing the Sha Tin race course" },
            { key: "autumn-06", layout: "landscape", label: "morning final practice", src: "assets/photos/rowing/photo-07.webp", alt: "The crew during their final morning practice at Sha Tin" },
            { key: "autumn-08", layout: "portrait", label: "the boathouse", src: "assets/photos/rowing/photo-17.webp", alt: "Boathouse and boats in late afternoon light" },
            { key: "autumn-11", layout: "wide", display: "collage", label: "from above", src: "assets/photos/rowing/photo-01.webp", alt: "Four rowers seen from above on dark blue water" },
            { key: "autumn-12", layout: "landscape", display: "collage", label: "four in sync", src: "assets/photos/rowing/photo-39.webp", alt: "Four rowers viewed from above in a racing shell" },
            { key: "autumn-13", layout: "landscape", display: "collage", label: "the home stretch", src: "assets/photos/rowing/photo-40.webp", alt: "Four rowers driving toward the finish" }
          ]
        },
        {
          id: "clips", eyebrow: "06 / little films", title: "More training clips...",
          note: "The ordinary days deserve a place here, too.",
          media: [
            { key: "clip-pov", layout: "wide", label: "first-person view", kind: "video", src: "assets/photos/rowing/clip-first-pov.m4v", poster: "assets/photos/rowing/clip-first-pov-poster.jpg" },
            { key: "clip-02", layout: "landscape", label: "erg room", kind: "video", src: "assets/photos/rowing/clip-02.m4v", poster: "assets/photos/rowing/clip-02-poster.jpg" },
            { key: "clip-04", layout: "landscape", label: "coming to the dock", kind: "video", src: "assets/photos/rowing/clip-04.m4v", poster: "assets/photos/rowing/clip-04-poster.jpg" },
            { key: "clip-05", layout: "landscape", label: "before we launch", kind: "video", src: "assets/photos/rowing/clip-05.m4v", poster: "assets/photos/rowing/clip-05-poster.jpg" },
            { key: "clip-06", layout: "landscape", label: "one ordinary practice", kind: "video", src: "assets/photos/rowing/clip-06.m4v", poster: "assets/photos/rowing/clip-06-poster.jpg" }
          ]
        }
      ]
    },
    {
      id: "travel",
      number: "03",
      title: "Travel",
      subtitle: "My favorite food is pizza...",
      intro: "Somehow, my footprints around the world look like the shape of a heart. Similarly, my travels have always been guided by my heart.",
      accent: "#d58a58",
      map: { src: "assets/photos/travel/footprints-map.png", alt: "A world map tracing Elan's travels in the shape of a heart" },
      scenes: [
        {
          id: "italy", number: "01", title: "Italy",
          anecdote: "I traveled to Italy because of my favorite food, Margherita pizza. I ate pizza in every city I visited in Italy. In Venice, I even took a picture with the waiter at a pizza shop I went to three days in a row.",
          media: [1, 2, 3, 7, 5, 6, 4, 8, 9, 10, 11, 12].map((photoNumber) => ({ src: `assets/photos/travel/italy/italy-${String(photoNumber).padStart(2, "0")}.jpg`, alt: `A memory from Italy ${photoNumber}` }))
        },
        {
          id: "switzerland", number: "02", title: "Switzerland", places: "The Alps · Interlaken",
          media: Array.from({ length: 3 }, (_, index) => ({ src: `assets/photos/travel/switzerland/switzerland-${String(index + 1).padStart(2, "0")}.jpg`, alt: `A memory from Switzerland ${index + 1}` }))
        },
        {
          id: "france", number: "03", title: "France", places: "Paris",
          anecdote: "I tripped and fell at the Opéra Garnier in Paris, scraping my knee and drawing blood. A kind foreign lady noticed my injury and gave me a band-aid. I was deeply touched.",
          media: [
            { src: "assets/photos/travel/france/france-01.jpg", alt: "A memory from France" },
            { src: "assets/photos/travel/france/france-02.jpg", alt: "Recreating a pose from a painting", label: "Me trying to recreate the pose in the painting." },
            { src: "assets/photos/travel/france/france-03.jpg", alt: "A scraped knee in Paris", label: "Bruise on my knees" },
            { src: "assets/photos/travel/france/france-04.jpg", alt: "A memory from Paris" },
            { src: "assets/photos/travel/france/france-05.jpg", alt: "A memory from France" },
            { src: "assets/photos/travel/france/france-06.jpg", alt: "Seeing the Mona Lisa", label: "Waited so long to see the Mona Lisa" }
          ]
        },
        {
          id: "vienna", number: "04", title: "Vienna", places: "Vienna · Golden Hall",
          anecdote: "This was my first “business trip.” I travelled with the Little Star Choir to perform at the Golden Hall. I enjoyed great moments with my friends.",
          media: Array.from({ length: 6 }, (_, index) => ({ src: `assets/photos/travel/vienna/vienna-${String(index + 1).padStart(2, "0")}.jpg`, alt: `A memory from Vienna ${index + 1}` }))
        },
        {
          id: "denmark", number: "05", title: "Denmark", places: "Copenhagen · Egeskov · Legoland", pageSize: 6,
          media: [
            { src: "assets/photos/travel/denmark/denmark-01.jpg", alt: "Elan at Legoland", label: "Elan at Lego Park" },
            { src: "assets/photos/travel/denmark/denmark-02.jpg", alt: "A family moment in Denmark", label: "A bee stinged my mom!" },
            { src: "assets/photos/travel/denmark/denmark-03.jpg", alt: "A memory from Denmark" },
            { src: "assets/photos/travel/denmark/denmark-04.jpg", alt: "Egeskov Castle", label: "Egeskov Castle" },
            { src: "assets/photos/travel/denmark/denmark-05.jpg", alt: "A memory from Denmark" },
            { src: "assets/photos/travel/denmark/denmark-06.jpg", alt: "Sleeping beneath an old portrait in a castle", label: "It is creepy sleeping in an old castel with a weird old lady above" },
            { src: "assets/photos/travel/denmark/denmark-07.jpg", alt: "A favourite place at Egeskov Castle", label: "My fav spot — Egeskov Castle" },
            { src: "assets/photos/travel/denmark/denmark-08.jpg", alt: "A memory from Denmark" },
            { src: "assets/photos/travel/denmark/denmark-09.jpg", alt: "A smiling hay sculpture", label: "funny smiley hay" },
            { src: "assets/photos/travel/denmark/denmark-10.jpg", alt: "A memory from Denmark" },
            { src: "assets/photos/travel/denmark/denmark-11.jpg", alt: "Children at Legoland", label: "legoland kids" },
            { src: "assets/photos/travel/denmark/denmark-12.jpg", alt: "Reading in bright sunshine", label: "reading but the sun is so strong" }
          ]
        },
        {
          id: "finland", number: "06", title: "Finland", places: "Rovaniemi · Helsinki", pageSize: 15,
          anecdote: "Our primary school hosted this trip to Finland. I homestayed in Rovaniemi with my classmates and friends. It was like a field trip pro max—with a frozen wilderness, extraordinary creatures, and jaw-dropping science.",
          media: [
            { src: "assets/photos/travel/finland/finland-02.jpg", alt: "A memory from Finland" },
            { src: "assets/photos/travel/finland/finland-03.jpg", alt: "Learning to ski in Finland", label: "learning to ski" },
            { src: "assets/photos/travel/finland/finland-04.jpg", alt: "A memory from Finland" },
            { src: "assets/photos/travel/finland/finland-05.jpg", alt: "Travelling from Rovaniemi to Helsinki", label: "from Rovaniemi to Helsinki" },
            { src: "assets/photos/travel/finland/finland-01.jpg", alt: "Inside the train in Finland", label: "Inside the train" },
            { src: "assets/photos/travel/finland/finland-06.jpg", alt: "Inside an icebreaker", label: "inside icebreaker" },
            { src: "assets/photos/travel/finland/finland-07.jpg", alt: "Our host family in Finland", label: "Our host family" },
            { src: "assets/photos/travel/finland/finland-08.jpg", alt: "Food with the host family", label: "food in the host family" },
            { src: "assets/photos/travel/finland/finland-09.jpg", alt: "A Eurasian lynx", label: "Amazing animal — Eurasian Lynx" },
            { src: "assets/photos/travel/finland/finland-10.jpg", alt: "A memory from Finland" },
            { src: "assets/photos/travel/finland/finland-11.jpg", alt: "A popular Finnish drink", label: "my host sister said it was the most popular drink in Finland?" },
            { src: "assets/photos/travel/finland/finland-12.jpg", alt: "A caribou", label: "Amazing animal — caribou" },
            { src: "assets/photos/travel/finland/finland-13.jpg", alt: "An icebreaker in Finland", label: "icebreaker" },
            { src: "assets/photos/travel/finland/finland-14.jpg", alt: "A memory from Finland" },
            { src: "assets/photos/travel/finland/finland-15.jpg", alt: "School in Rovaniemi", label: "We had school in Rovaniemi" }
          ]
        },
        {
          id: "australia", number: "07", title: "Australia", places: "World Science Fair · Brisbane · 2019", pageSize: 3,
          anecdote: "One week in March 2019, we skipped school and went to Brisbane for the World Science Fair. I presented ideas for an automatic garbage classification system. I also homestayed in Brisbane. The boy in the host family was surprised that we had ten pages of math homework that week—but we kind of skipped our work and played music and video games with him. We went to school in Brisbane for a week. I had a great time with my shadow student and did fun activities like building egg parachutes.",
          media: Array.from({ length: 5 }, (_, index) => ({ src: `assets/photos/travel/australia/australia-${String(index + 1).padStart(2, "0")}.jpg`, alt: `A memory from the World Science Fair in Brisbane ${index + 1}` }))
        },
        {
          id: "ireland", number: "08", title: "Skipping ahead to Ireland", places: "Dingle · Ireland",
          anecdote: "My fav spot is Dingle, a small, small town. We wanted to go seafaring, but the weather that day was a bit extreme. We found the only travel agency that still offered seafaring. You can see how the boat is pitching. My dad was terrified, but my mother and I were okay. I actually enjoyed this unknown risk.<br><br>Later, I chatted with the local guide, a twenty-ish young man. He said that in travel seasons, he worked as a guide. But in winter, he would go on vacation in Italy with his brother. Wow, I want to have a vacation in Italy too.",
          media: [
            { src: "assets/photos/travel/ireland/ireland-01.jpg?v=2", alt: "A beautiful sunny day on the Irish coast", label: "beautiful sunny day" },
            { src: "assets/photos/travel/ireland/ireland-02.jpg?v=2", alt: "The windy, wild nature of Ireland", label: "The windy, wild nature" },
            { src: "assets/photos/travel/ireland/ireland-03.jpg?v=2", alt: "A solemn and desolate Irish landscape", label: "It evokes a sense of solemn desolation." },
            { src: "assets/photos/travel/ireland/ireland-04.jpg?v=2", alt: "A memory from Dingle, Ireland" },
            { kind: "video", src: "assets/photos/travel/ireland/ireland-seafaring.mp4", poster: "assets/photos/travel/ireland/ireland-04.jpg?v=2", alt: "A boat pitching on rough water near Dingle", label: "Seafaring in Dingle" }
          ]
        }
      ]
    },
    {
      id: "ssbs-tv",
      number: "04",
      title: "SSBS TV",
      subtitle: "From the edit desk to directing the newsroom",
      accent: "#3169a8",
      hero: {
        src: "assets/photos/ssbs/camera-portrait.jpg",
        alt: "Elan holding a camera for SSBS TV",
        caption: "Behind the camera—and eventually, leading the room."
      },
      rolePath: ["Video Editor", "News Writer", "Director of the News Department", "Director"],
      facts: [
        { label: "Favorite activity to cover", value: "Musical & theater performances!" },
        { label: "Hardest activity to cover", value: "Sports events" },
        { label: "Favorite project", value: "An interdisciplinary documentary on the Golden Mirror Experiment", note: "Three months in the making!" }
      ],
      stories: [
        {
          number: "01",
          eyebrow: "Getting in",
          title: "If you are interested in TV station...",
          subheading: "How to get in?",
          paragraphs: [
            "Around 60 students were competing for roughly 25 spots that year. I wanted to get in so badly that I basically used my words to move the interviewer. Considering that I knew little about editing at first, I suppose it was my motivation that helped me get in.",
            "My motivation to be a video editor was to bring unique perspectives to the way we present our school. Editing is the step that can sway people’s emotions and opinions—it is about deciding what people notice, what they feel, and how they see our school.",
            "Somehow, that worked. AND... I got in!"
          ],
          media: { src: "assets/photos/ssbs/g11-leadership.jpg", alt: "Elan introducing the Grade 11 SSBS TV leaders", label: "Introducing the Grade 11 leadership team" }
        },
        {
          number: "02",
          eyebrow: "Writing the news",
          title: "If you don’t know how to write your first news...",
          subheading: "A guideline made by the News Department",
          paragraphs: [
            "Luckily, our Director of News—which was me—prepared a guideline on how to organize and report news.",
            "I went from struggling to draft news articles to writing them easily with a clear structure. I wanted to pass that experience on so new members could write news more confidently. I invited two pros from the News Department to compile our insights, then turned our experience into this website."
          ],
          link: { href: "https://ssbstvnews.com/", label: "Open the news-writing guide" }
        },
        {
          number: "03",
          eyebrow: "Three years in action",
          title: "If you don’t know what to do...",
          subheading: "Here is how I spent my three years",
          activities: ["Photography", "Attending / hosting workshops", "Technical Director (TD) at music events"],
          project: {
            eyebrow: "A project I initiated",
            title: "Mini-film Competition “Seeing a Different Summer”",
            paragraphs: [
              "As students, we are often trapped in our own narratives and seldom look into other people’s lives. After realizing that, I began observing how people from different backgrounds experience the world. I initiated this mini-film competition so students could bring what they noticed during the summer holiday back to school. I prepared a video about transportation for disabled people in New York City.",
              "The entries brought many enlightening perspectives. One of the most memorable was an experimental film told from the perspective of a domestic worker. The filmmaker explained how the domestic worker—or Ayi—had become part of his household: she cooked, cleaned, and accompanied him. Yet she could not fully be present in her own home. She could not eat dinner with her family and had little time to play with her own children.",
              "That was when I knew the competition had succeeded. It gave my peers a platform to broaden our view and see how other people explore this world."
            ],
            link: { href: "https://www.ssbs.sh.cn/siteEnIndex.action?method=list&ccid=10406", label: "Visit “Seeing a Different Summer”" },
            media: [
              { src: "assets/photos/ssbs/mini-film-prizes.jpg", alt: "Prizes prepared for the mini-film competition", label: "Prizes I prepared for the competition" }
            ]
          }
        },
        {
          number: "04",
          eyebrow: "Favorite project",
          title: "The Golden Mirror Experiment",
          subheading: "An interdisciplinary documentary",
          paragraphs: ["Three months in the making!"],
          media: { src: "assets/photos/ssbs/golden-mirror-documentary.jpg", alt: "The interdisciplinary Golden Mirror Experiment documentary team", label: "The Golden Mirror Experiment documentary team" }
        }
      ],
      gallery: [
        { src: "assets/photos/ssbs/workshop.jpg", alt: "Elan hosting an SSBS TV workshop", label: "Hosting an SSBS TV workshop" },
        { src: "assets/photos/ssbs/camera-setup.jpg", alt: "Students setting up a camera", label: "Setting up the camera" },
        { src: "assets/photos/ssbs/lighting-setup.jpg", alt: "Testing the lighting for a shoot", label: "Testing the lighting" },
        { src: "assets/photos/ssbs/charity-concert.jpg", alt: "The SSBS TV crew at a charity concert", label: "Technical crew at a charity concert" },
        { src: "assets/photos/ssbs/in-discussion.jpg", alt: "Students discussing a shoot", label: "In discussion" },
        { src: "assets/photos/ssbs/crew-group.jpg", alt: "The SSBS TV crew together", label: "The crew" },
        { src: "assets/photos/ssbs/crew-certificates.jpg", alt: "SSBS TV members holding certificates", label: "Workshop certificates" }
      ]
    }
  ]
};
