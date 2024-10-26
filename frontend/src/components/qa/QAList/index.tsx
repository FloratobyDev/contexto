import { useState } from "react";
import { QAItem } from "../../../types";
import QADisplayList from "./QADisplayList";
import QAHeader from "./QAHeader";

const QAList = () => {
  const [qaItems, setQAItems] = useState<QAItem[]>([
    {
      id: "klasdjfiow",
      questions: [
        "What is the capital of Italy?",
        "Rome is the capital city of Italy, as well as its largest and most populous city.",
        "Historically, Rome was the center of the Roman Empire, one of the most powerful ancient civilizations.",
        "The city is also home to Vatican City, the seat of the Catholic Church.",
      ],
      answer:
        "Rome is known for its vast history, dating back thousands of years. Founded around 753 BC, Rome has remained a crucial hub for art, architecture, and politics through various eras. Famous landmarks like the Colosseum, St. Peter’s Basilica, and the Vatican Museums attract millions of visitors every year. As a center of the Renaissance, it contributed enormously to art and culture, making it one of the world’s most influential cities even today.",
    },
    {
      id: "qwertyuiop",
      questions: [
        "What is the smallest continent in the world?",
        "Australia is considered the smallest continent in terms of land area.",
        "It is a unique continent that is also a country, known for its diverse wildlife and unique ecosystems.",
        "The continent is home to the Great Barrier Reef, the world’s largest coral reef system.",
      ],
      answer:
        "Australia, both a continent and a country, is renowned for its biodiversity and ecosystems found nowhere else. From deserts to rainforests, it encompasses a wide range of landscapes. Notably, the Great Barrier Reef is a UNESCO World Heritage site and an ecological marvel with thousands of marine species. Additionally, the continent has Indigenous cultures with histories spanning over 60,000 years, making it one of the world’s oldest continuous cultures.",
    },
    {
      id: "zxcvbnmasd",
      questions: [
        "What is the Great Wall of China?",
        "The Great Wall of China is an ancient fortification built to protect China from invasions.",
        "Construction began in the 7th century BC and continued for centuries.",
        "It stretches over 13,000 miles and is one of the most recognizable structures in the world.",
      ],
      answer:
        "The Great Wall of China, spanning over 13,000 miles, is an architectural marvel built primarily to defend against invasions from the north. The wall's construction saw contributions from several Chinese dynasties, notably the Ming Dynasty, which built some of the most enduring sections. Today, the wall represents Chinese resilience and is recognized globally as a UNESCO World Heritage site, attracting millions who walk its paths each year.",
    },
    {
      id: "poiuytrewq",
      questions: [
        "What is Mount Everest?",
        "Mount Everest is the tallest mountain in the world, located in the Himalayas on the border between Nepal and China.",
        "Its peak reaches an elevation of 29,031.7 feet above sea level.",
        "It is a popular destination for mountaineers, though climbing it is dangerous and challenging.",
      ],
      answer:
        "Mount Everest stands at 29,031.7 feet, making it the highest peak in the world. It forms part of the Himalayan range and sits on the border of Nepal and Tibet, China. Climbing Everest has become a coveted achievement, though it remains dangerous due to harsh weather, high altitude, and avalanches. The mountain holds significant cultural importance for local populations and is a landmark in mountaineering history, with climbers enduring extreme conditions to reach its summit.",
    },
    {
      id: "mnbvcxzlkj",
      questions: [
        "What is the Amazon Rainforest?",
        "The Amazon Rainforest is the largest tropical rainforest in the world, located primarily in Brazil.",
        "It spans over 5.5 million square kilometers and is home to millions of species of plants and animals.",
        "The forest plays a crucial role in regulating the Earth's climate and is often called the 'lungs of the planet.'",
      ],
      answer:
        "The Amazon Rainforest, covering 5.5 million square kilometers, is the world's largest and most diverse tropical rainforest. Found mostly in Brazil, it hosts a vast array of species, many of which are yet to be studied. The forest acts as a carbon sink, absorbing vast amounts of carbon dioxide, and contributes significantly to global oxygen production. However, it faces threats from deforestation and climate change, which endanger its delicate ecosystems and the indigenous communities who have lived there for centuries.",
    },
    {
      id: "lkjhgfdsaz",
      questions: [
        "What is the Sahara Desert?",
        "The Sahara Desert is the largest hot desert in the world, covering much of North Africa?",
        "It spans approximately 9 million square kilometers, stretching across several countries?",
        "The desert is known for its arid climate, large sand dunes, and sparse vegetation?",
      ],
      answer:
        "The Sahara Desert, spanning about 9 million square kilometers, is the largest hot desert globally, stretching across 11 countries in North Africa. Despite its harsh climate, the Sahara supports unique plant and animal life adapted to extreme conditions. Historically, the desert was once a lush, green area with lakes and rivers, a transformation attributed to shifting climates. Today, it remains one of the most iconic landscapes, featuring endless dunes, rock formations, and oases that support nomadic populations and unique ecosystems.",
    },
  ]);

  return (
    <div className="flex flex-col h-full">
      <QAHeader
        onSubmit={(newItem: QAItem) => {
          setQAItems([...qaItems, newItem]);
        }}
      />
      <QADisplayList setQAItems={setQAItems} qaItems={qaItems} />
    </div>
  );
};

export default QAList;
