import { useRouter } from "next/navigation";

interface Props {
    backgroundColor: string;
    backgroundColorOnHover: string
    textContent: string
    redirectTo: string
}

export default function Button(props: Props) {

    const router = useRouter();

    return (
        <button onClick={() => { router.push(props.redirectTo)}} className={`bg-${props.backgroundColor} hover:bg-${props.backgroundColorOnHover} text-white font-bold 2xl:w-96 2xl:h-96 w-52 h-44 rounded-3xl shadow-2xl mt-28`}>
            {props.textContent}
        </button>
    )
}