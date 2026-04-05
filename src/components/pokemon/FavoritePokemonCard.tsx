import type { FavoritePokemon } from '@/interface/favorite-pokemon';
import { createSignal, Show, type Component } from 'solid-js';

interface Props {
  pokemon: FavoritePokemon;
}

export const FavoritePokemonCard: Component<Props> = (Props) => {
  const [isVisible, setIsVisible] = createSignal(true);
  const { pokemon } = Props;

  const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

  const deleteFavorite = (id: string) => {
    const favorites = JSON.parse(localStorage.getItem('favorites') ?? '[]') as FavoritePokemon[];

    const newFavorites = favorites.filter((pokemon) => pokemon.id !== id);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    setIsVisible(false);
  };

  return (
    <Show when={isVisible()}>
      <div class="flex flex-col justify-center items-center my-2">
        <a href={`/pokemons/${pokemon.name}`} class="flex flex-col gap-2 mb-1">
          <img
            class="w-36 h-auto"
            src={imgSrc}
            alt={`#${pokemon.id}-${pokemon.name}`}
            style={`view-transition-name: ${pokemon.name}-image`}
          />
          <p class="text-center">
            #{pokemon.id} {pokemon.name}
          </p>
        </a>
        <button
          onClick={() => deleteFavorite(pokemon.id)}
          class="bg-orange-800 text-slate-400 hover:text-white transition-all rounded shadow-2xl mx-2 px-4 py-1"
        >
          Delete
        </button>
      </div>
    </Show>
  );
};
