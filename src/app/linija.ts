export interface Linija {
  broj: number;
  name: string;
  od: string;
  do: string;
  dolzina: number;
  vremetraenje: number;
  br_stanici: number;
  stanici: Stanica[];
  favorite: boolean;
}

export interface Stanica {
  naziv: string;
  longitude: number;
  langitude: number;
}
