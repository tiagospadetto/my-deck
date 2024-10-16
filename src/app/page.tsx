'use client';

import Head from 'next/head';
import { useState } from 'react';
import deck from '@/deck';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface CardProps {
  name: string;
  description: string;
  usage: string;
  image: string;
  type?: string;
}

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCard, setSelectedCard] = useState<CardProps | null>(null);

  const filteredDeck = deck.filter((card: CardProps) =>
      card.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const groupByType = (deck: CardProps[]) => {
    return deck.reduce((groups: { [key: string]: CardProps[] }, card: CardProps) => {
      const type = card.type || 'Outro';
      if (!groups[type]) {
        groups[type] = [];
      }
      groups[type].push(card);
      return groups;
    }, {});
  };

  const groupedDeck = groupByType(filteredDeck);

  return (

      <div className="container mx-auto">
        <Head>
          <title>MTG Deck</title>
          <meta name="description" content="Deck de Magic The Gathering"/>
        </Head>
        <div className="p-4">
          <input
              type="text"
              placeholder="Buscar por nome da carta..."
              className="border p-2 w-full mb-4"
              onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {Object.keys(groupedDeck).map((type, index) => (
            <div key={index} className="mb-8 justify-center items-center flex-col">
              <h2 className="text-2xl font-bold mb-4 text-center font-sans">{type}</h2>
              <Swiper
                  spaceBetween={20}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    1024: {
                      slidesPerView: 3,
                    },
                    1280: {
                      slidesPerView: 4,
                    },
                  }}
              >
                {groupedDeck[type].map((card, index) => (
                    <SwiperSlide key={index}>
                      <div
                          className="relative cursor-pointer flex flex-col justify-center items-center"
                          onClick={() => setSelectedCard(card)}
                      >
                        <img
                            src={card.image}
                            alt={card.name}
                            className="w-[80%] h-auto"
                        />
                      </div>
                    </SwiperSlide>
                ))}
              </Swiper>

              {selectedCard && (
                  <div
                      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                      onClick={() => setSelectedCard(null)}
                  >
                    <div
                        className="bg-white p-6 rounded-lg max-w-lg w-[80%] relative sm:w-full h-[80%] overflow-auto "
                        onClick={(e) => e.stopPropagation()}
                    >
                      <button
                          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                          onClick={() => setSelectedCard(null)}
                      >
                        &times;
                      </button>
                      <h3 className="text-xl font-bold mb-4">{selectedCard.name}</h3>
                      <p className="text-gray-700">
                        <strong>Descrição:</strong>{selectedCard.description}
                      </p>
                      <p className="text-gray-700 mt-2">
                      <strong>Como usar:</strong> {selectedCard.usage}
                      </p>
                    </div>
                  </div>
              )}
            </div>
        ))}
      </div>
  );
}
