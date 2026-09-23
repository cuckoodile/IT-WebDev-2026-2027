const typeColors = {
  Fire: 'bg-orange-100 text-orange-700',
  Water: 'bg-blue-100 text-blue-700',
  Electric: 'bg-yellow-100 text-yellow-700',
  Grass: 'bg-green-100 text-green-700',
  Psychic: 'bg-pink-100 text-pink-700',
  Rock: 'bg-stone-200 text-stone-700',
};

export default function PokemonCard({ pokemon, onEdit, onDelete }) {
  const { id, name, type, level, image } = pokemon;
  const badgeColor = typeColors[type] ?? 'bg-slate-100 text-slate-700';

  return (
    <div className="flex flex-col items-center rounded-xl bg-white p-4 text-center shadow">
      <span className="self-start text-xs text-slate-400">#{id}</span>
      <img
        src={image || 'https://via.placeholder.com/96?text=?'}
        alt={name}
        className="mb-3 h-24 w-24 object-contain"
      />
      <h3 className="text-lg font-bold">{name}</h3>
      <span className={`mt-1 rounded-full px-3 py-1 text-sm ${badgeColor}`}>{type}</span>
      <p className="mt-2 text-sm text-slate-500">Lv. {level}</p>

      <div className="mt-4 flex gap-2">
        <button
          onClick={() => onEdit(pokemon)}
          className="rounded-lg border px-3 py-1 text-sm hover:bg-slate-50"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(id)}
          className="rounded-lg border px-3 py-1 text-sm text-red-600 hover:bg-red-50"
        >
          Delete
        </button>
      </div>
    </div>
  );
}