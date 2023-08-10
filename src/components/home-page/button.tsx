import { useRouter } from "next/navigation";

interface Props {
    textContent: string
    redirectTo: string
    className: string
}

export default function Button(props: Props) {

    const router = useRouter();

    return (
        <button onClick={() => { router.push(props.redirectTo)}} className={props.className}>
            {props.textContent}
        </button>
    )
}