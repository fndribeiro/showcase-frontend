import LoadingIcon from "./loading-icon";

interface Props {
  label: string
}

export default function LoadingButton(props: Props) {
  return (
    <button type="button" className="bg-gray-900 text-white font-bold py-2 px-4 rounded-lg flex items-center" disabled>
      <LoadingIcon/>
      {props.label}
    </button>
  );
}
