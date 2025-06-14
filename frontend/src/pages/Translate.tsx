import { useState } from 'react';

const stanzas = [
  "Bonjour, comment ça va ?",
  "Je t'attendais depuis longtemps.",
];

const Translate = () => {
  const [translations, setTranslations] = useState<string[]>(Array(stanzas.length).fill(""));

  const handleChange = (index: number, value: string) => {
    const updated = [...translations];
    updated[index] = value;
    setTranslations(updated);
  };

  const handleSubmit = async () => {
    const response = await fetch("/api/compare", {
      method: "POST",
      body: JSON.stringify({ stanzas, translations }),
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    console.log("Scores:", result);
  };

  return (
    <div>
      <h2>Translate the Lyrics</h2>
      {stanzas.map((stanza, i) => (
        <div key={i}>
          <p><b>Original:</b> {stanza}</p>
          <textarea
            value={translations[i]}
            onChange={(e) => handleChange(i, e.target.value)}
          />
        </div>
      ))}
      <button onClick={handleSubmit}>Submit Translations</button>
    </div>
  );
};

export default Translate;