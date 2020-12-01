export enum Type {
  Text = 1,
  Number
}

export const TypeName = new Map<number, string>([
  [1, 'Text'],
  [2, 'Number']
]);
