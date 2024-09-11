export default function Step({ index, title }) {
  return (
    <li className="flex items-center space-x-2.5 text-white">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-300">
        {index}
      </span>
      <span>
        <h3 className="font-medium leading-tight">{title}</h3>
      </span>
    </li>
  );
}
