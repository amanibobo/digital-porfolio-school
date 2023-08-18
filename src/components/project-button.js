import Link from "next/link";
import styles from "@/app/page.module.css"

export default function ProjButton() {
    return (
        <div>
            <Link href="/project"><button className={styles.button}>PROJECT: AP CSP WORDLE</button></Link>
        </div>
    )
}

