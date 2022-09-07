import * as React from 'react';
import MediaCard from './MediaCard';


export default function CardList() {
  return (
    <div>
      <MediaCard
        id= "0"
        name= "Untitled"
        />
      <MediaCard
          id= "1"
          name= "The Remains of a Man Who Loved Cats"
        />
      <MediaCard
        id= "2"
        name= "Study for an Apple Tree"
        />
      <MediaCard
        id= "3"
        name= "Portrait of a Forgotten Man"
        />
      <MediaCard
          id= "4"
          name= "The Dancer"
      />
      <MediaCard
        id= "5"
        name= "Portrait of a Man"
      />
      <MediaCard
        id= "6"
        name= "The End of a Family"
      />
      <MediaCard
        id= "7"
        name= "The Animal"
      />
      <MediaCard
        id= "8"
        name= "Study for Obfuscation"
      />
      <MediaCard
        id= "9"
        name= "Study for Obfuscation"
      />
      <MediaCard
        id= "10"
        name= "Untitled"
      />
    </div>
  );
}
