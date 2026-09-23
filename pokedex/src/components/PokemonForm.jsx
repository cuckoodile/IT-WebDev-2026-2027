import { useState, useEffect, useRef } from 'react';

const emptyForm = { name: '', type: '', level: '', image: '' };

export default function PokemonForm({ editingPokemon, onSave, onCancelEdit }) {
  const [form, setForm] = useState(emptyForm);
  const nameInputRef = useRef(null);

  // When the user clicks "Edit" on a card, load that Pokémon into the form
  useEffect(() => {
    setForm(editingPokemon ?? emptyForm);
    nameInputRef.current?.focus();
  }, [editingPokemon]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.type || !form.level) return;

    onSave({ ...form, level: Number(form.level) });
    setForm(emptyForm);
    nameInputRef.current?.focus();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-10 grid gap-4 rounded-xl bg-white p-6 shadow sm:grid-cols-2">
      <input
        ref={nameInputRef}
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
        className="rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
      />
      <input
        name="type"
        value={form.type}
        onChange={handleChange}
        placeholder="Type (e.g. Fire)"
        className="rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
      />
      <input
        name="level"
        type="number"
        min="1"
        value={form.level}
        onChange={handleChange}
        placeholder="Level"
        className="rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
      />
      <input
        name="image"
        value={form.image}
        onChange={handleChange}
        placeholder="Image URL"
        className="rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
      />

      <div className="flex gap-3 sm:col-span-2">
        <button type="submit" className="rounded-lg bg-red-600 px-5 py-2 text-white hover:bg-red-700">
          {editingPokemon ? 'Update Pokémon' : 'Add Pokémon'}
        </button>
        {editingPokemon && (
          <button
            type="button"
            onClick={onCancelEdit}
            className="rounded-lg border px-5 py-2 hover:bg-slate-50"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}