import * as React from 'react';
import MediaCard from './MediaCard';

export default function CardList() {
  const cards = [
    {
      id: "101",
      name: "Untitled",
      medium: "Digital Art",
      primarycolor: "White",
    },
    {
      id: "103",
      name: "Untitled",
      medium: "Digital Art",
      primarycolor: "White",
    },
    {
      id: "104",
      name: "Untitled",
      medium: "Digital Art",
      primarycolor: "White",
    },
    {
      id: "119",
      name: "Untitled",
      medium: "Acrylic on Wood",
      size: "8''x10''"
    },
    {
      id: "122",
      name: "Portrait of a Forgotten Man",
      medium: "Acrylic on Wood",
      size: "8''x10''"
    },
    {
      id: "123",
      name: "The Dancer",
      medium: "Acrylic on Wood",
      size: "8''x10''"
    },
    {
      id: "129",
      name: "Untitled",
      medium: "Acrylic on Wood",
      size: "8''x10''"
    },
    {
      id: "139",
      name: "Study for an Abstracted Form",
      medium: "Pen and Ink",
      primarycolor: "White",
      
    },
    {
      id: "140",
      name: "Study for a Bull",
      medium: "Acrylic on Canvas",
      size: "30'' x 40''"
    },
    {
      id: "141",
      name: "Many Many Cats",
      medium: "Acrylic on Canvas",
      size: "8'' x 8''"
    },
    {
      id: "142",
      name: "Untitled",
      medium: "Pen and Ink",
      primarycolor: "White",
  
    },
    {
      id: "143",
      name: "Untitled",
      medium: "Digital Art",
      
    },
    {
      id: "144",
      name: "Untitled",
      medium: "Digital Art",
   
    },
    {
      id: "145",
      name: "In the Garden",
      medium: "Digital Art",
   
    },
    {
      id: "146",
      name: "Study for an Abstracted Form",
      medium: "Pen and Ink",
      primarycolor: "White",
     
    },
    {
      id: "147",
      name: "Untitled",
      medium: "Pen and Ink",
      primarycolor: "White",
      
    },
    {
      id: "148",
      name: "Study for Obfuscation",
      medium: "Acrylic on Wood",
      size: "",
    },
    {
      id: "149",
      name: "Dreams of an Old Man",
      medium: "Pen and Ink",
      primarycolor: "White",
      
    },
    {
      id: "150",
      name: "The Lucky Bull",
      medium: "Pen and Ink",
      primarycolor: "White",
     
    }
  ];

  // Sort the cards array by medium
  //cards.sort((a, b) => (a.medium > b.medium) ? 1 : -1);

  // Sort the cards array by primarycolor
cards.sort((a, b) => {
    if (a.primarycolor === "White") {
      return 1;
    } else if (b.primarycolor === "White") {
      return -1;
    } else if (a.primarycolor > b.primarycolor) {
      return 1;
    } else {
      return -1;
    }
  });
  return (
    <div>
      {cards.map((card) => (
        <MediaCard
          key={card.id}
          id={card.id}
          name={card.name}
          medium={card.medium}
          size={card.size}
        />
      ))}
    </div>
  );
}
