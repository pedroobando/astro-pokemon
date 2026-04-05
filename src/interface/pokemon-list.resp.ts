export interface PokemonListResponse {
  count: number;
  next: string;
  previous: null;
  results: ItemList[];
}

export interface ItemList {
  name: string;
  url: string;
}
