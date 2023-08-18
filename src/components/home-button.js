import Link from "next/link";
import styles from "@/app/page.module.css"

export default function HomeButton() {
    return (
        <div>
            <Link href="/"><button className={styles.button}>HOME PAGE</button></Link>
        </div>
    )
}