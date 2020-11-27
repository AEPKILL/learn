interface IA {
  name: string;
  age: number;
}

type K<T> = keyof T;


type X = K<IA>;
