import React from "react";
import style from "./CustomSection.module.css"

interface CustomSectionProps {
    children : React.ReactNode[];
}

export const CustomSection = (props : CustomSectionProps) => {

    return (
        <section className={style["filtro-container"]}>
            {...props.children}
        </section>
    )
}