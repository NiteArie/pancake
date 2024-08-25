const NOTES = [
  {
    id: 1,
    content:
      "Our first trip in Vung Tau, we enjoyed going to the light tower up on the mountain, you were complaining so much about sitting through the 3 hours drive-through to Vung Tau. The accomodation that we stayed in was really beautiful but the elevator was a bit slow.",
  },
  {
    id: 2,
    content:
      "Da Lat, the mysterious city that is plateaued upon the mountainous area of Lam Dong, that vest which you wore, you looked way cooler than I am. We ventured into the woods, explored the hidden flower valley, seeking more and more expirenece and photographs. Would go back to Da Lat again soon.",
  },
  {
    id: 3,
    content:
      "Still Da Lat, we went to the huge spacious plaza that I have never been to before that trip. Explored the supermarket there and ate some rice cakes",
  },
  {
    id: 4,
    content:
      "Well, so many trips to Da Lat, the famous Tuyen Lam lake, I really adored you wearing trench coat, fashionable you, mind me, hoodie all the ways",
  },
  {
    id: 5,
    content:
      "A non-stop series of Da Lat trips, here we are at the coffee shop, which procures chocolates. There was also a trainstation there, that we could ride on. We got ourselves a lot of photographs from the place, that trip.",
  },
  {
    id: 6,
    content:
      "My first trip to Singapore, which changes my mind forever maybe my future also. Words can't describe how this journey has impacted me. Thank you for standing by my side, helping me grow as a person",
  },
  {
    id: 7,
    content:
      "I don't really remember where we took this photograph from, but you are always so lovely",
  },
  {
    id: 8,
    content:
      "Our first Tet together, there you introduced me to your brothers, sisters, ... of which I can't appreciate enough. This picture was taken inside the post office grand hall.",
  },
  {
    id: 9,
    content:
      "Outside of the post office grand hall, we had lovely sunshine which produces such a great photograph",
  },
  {
    id: 10,
    content:
      "Heh, our first month anniversary was also at this coffee shop. Then we were here again, as captured in the photograph. Lovely drinks, lovely places, lovely girlfriend.",
  },
  {
    id: 11,
    content:
      "Ah the pastry shop that we went to, good pastry tho. Unfortunately the air conditioner is out of use that day so it was a bit hot.",
  },
  {
    id: 12,
    content:
      "Your first trip to another region, which lasted 3 weeks. You don't know how much I missed you hah",
  },
  {
    id: 13,
    content:
      "Vung Tau with the gang from your company, which led me to meet such interesting people. Always graceful for connection",
  },
];

const APPLICATION = (() => {
  const IMAGE_COUNT = 13;
  const START_DAY = new Date(2023, 7, 24);

  const gallery = document.querySelector(".gallery");
  const dateCounter = document.querySelector(".meta__counter");

  const initGallery = () => {
    for (let i = 1; i <= IMAGE_COUNT; i++) {
      const container = document.createElement("div");
      const image = document.createElement("img");
      const note = document.createElement("div");

      container.classList.add("gallery__image");

      image.classList.add("image");
      image.src = `assets/${i}.jpg`;
      image.alt = "";

      container.addEventListener("mouseover", () => {
        note.classList.add("image__note--show");
      });

      container.addEventListener("mouseout", () => {
        note.classList.remove("image__note--show");
      });

      note.classList.add("image__note");
      note.textContent =
        NOTES.find((note) => note.id == i)?.content ??
        "No content. But graceful for the cool picture hehe.";

      container.append(image, note);
      gallery.appendChild(container);
    }
  };

  const initDayTogether = () => {
    const currentDate = new Date();
    console.log(
      new Date(currentDate.getTime() - START_DAY.getTime()).getTime()
    );
    const dayTogether = Math.floor(
      new Date(currentDate.getTime() - START_DAY.getTime()).getTime() /
        86400 /
        1000
    );

    dateCounter.textContent = dayTogether;
  };

  return {
    initGallery,
    initDayTogether,
  };
})();

APPLICATION.initGallery();
APPLICATION.initDayTogether();
