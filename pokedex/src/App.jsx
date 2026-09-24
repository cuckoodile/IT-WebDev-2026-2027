import React, { useState } from 'react';
import PokemonForm from './components/PokemonForm';
import PokemonGallery from './components/PokemonGallery';

export default function App() {
  const [isVisible, setVisible] = React.useState(null)

  function handleVisibility() {
    // useState(Any) str, num, bool, arr, obj, ...
    // Data type: null => boolean
    // let name = "ian"

    setVisible(isVisible ? false : true)
  }

  // All Pokémon data lives in one array of objects
  const [pokemons, setPokemons] = useState([
    { id: 1, name: 'Pikachu', type: 'Electric', level: 5, image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png' },
    { id: 2, name: 'Charmander', type: 'Fire', level: 8, image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' },
    { id: 3, name: 'Squirtle', type: 'Water', level: 6, image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' },
  ]);
  
  // if (condtion) {
  //   ... = useState()
  // }

  // Create useRef to create a ref of ID

  // Which Pokémon (if any) is currently being edited
  // Re-render: The display changes when a state value is changed (When a state changes, the react manipulates dom automatically)
  const [editingPokemon, setEditingPokemon] = useState(null);

  const idCounter = () => {
    // idRef += 1
  }

  const addPokemon = (pokemon) => {
    // JS Spreader Operator
    // Syntax: ...Array
    // Immutable
    setPokemons([...pokemons, { ...pokemon, id: Date.now() }]);
    // setPokemons([...pokemons, { ...pokemon, id: Date.now() }])
  };

  const updatePokemon = (updated) => {
    setPokemons(pokemons.map((p) => (p.id === updated.id ? updated : p)));
    setEditingPokemon(null);
  };

  const deletePokemon = (id) => {
    setPokemons(pokemons.filter((p) => p.id !== id));
    if (editingPokemon?.id === id) setEditingPokemon(null);
  };

  return (
    <div className="min-h-screen bg-slate-700 px-4 py-10">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-center text-4xl font-bold text-red-600">Pokédex</h1>

        <PokemonForm
          editingPokemon={editingPokemon}
          onSave={editingPokemon ? updatePokemon : addPokemon}
          onCancelEdit={() => setEditingPokemon(null)}
        />

        <PokemonGallery
          pokemons={pokemons}
          onEdit={setEditingPokemon}
          onDelete={deletePokemon}
        />
      </div>
    </div>
  );
}