import styles from "@/app/page.module.css"
import HomeButton from "@/components/home-button"
import ProjButton from "@/components/project-button"


export default function Projects() {
    return (
        <main className={styles.mainproj}>
            <div className={styles.containerproj}>
                <h1 className={styles.header}>PROJECT: AP CSP WORDLE</h1>
            </div>
            <div className={styles.text}>
                <h1>This is a AP Computer Science Principles project that I created in my 10th grade year. It a wordle game but it is based off of NFL and NBA teams. Users have up to 5 guesses and after that they are unable to type in the terminal.</h1>
                <h1>The project took around two months of things like creating a create task project and planning out what I want the program to do. I then coded it in class and submitted it to collegeboard.</h1>
            </div>
            <HomeButton className={styles.button}/>
            <div>
                <video className={styles.video} autoPlay muted loop>
            <source src="/medias/Presentation1.mp4" type="video/mp4"/>
          </video>
            </div>
            <div className={styles.text}>
                <h1>GIF of program in action</h1>
            </div>
        </main>
    )
}