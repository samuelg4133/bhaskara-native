type BhaskaraProps = {
  a: number;
  b: number;
  c: number;
};

export function delta({ a, b, c }: BhaskaraProps) {
  const res = Math.pow(b, 2) - 4 * a * c;

  return res;
}

export function bhaskara({ a, b, c }: BhaskaraProps) {
  const res = delta({ a, b, c });

  if (res < 0 || a === 0) {
    throw new Error("Não há raízes para a equação!");
  }

  const x = (-b + Math.sqrt(res)) / (2 * a);
  const y = (-b - Math.sqrt(res)) / (2 * a);

  return { x, y };
}
