interface Item {
  row: number;
  col: number;
}

export type Apple = Item;

export type Snake = Item[];

export type Direction = 'left' | 'right' | 'up' | 'down';
