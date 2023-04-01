import type {ReactNode} from "react";
import Hero from "@santosch/components/Hero/Hero";
import styles from "./layout.module.scss"

export default function Layout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <>
      <Hero/>
      <section className={styles.section}>
          {children}
      </section>
    </>
  )
}
