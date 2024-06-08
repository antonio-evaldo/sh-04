type Props = {
  text: string;
};

export function Button({ text }: Props) {
  return (
    <button className="rounded-lg bg-evergreen-light px-7 py-3 text-xl font-semibold text-white shadow">
      {text}
    </button>
  );
}
