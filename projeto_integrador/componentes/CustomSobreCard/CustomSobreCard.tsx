import { ReactNode, useEffect, useRef, useState } from "react";
import { CustomButton } from "../CustomButton/CustomButton";
import style from "../CustomSobreCard/CustomSobreCard.module.css";

interface CustomSobreCardProps {
  titulo?: string;
  imagem?: string;
  alt?: string;
  descricao?: ReactNode;
  onClick?: () => void;
}

export const CustomSobreCard = ({
    titulo,
    imagem,
    alt,
    descricao,
    onClick,
}: CustomSobreCardProps) => {

    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            setIsVisible(true);
            if (cardRef.current) observer.unobserve(cardRef.current);
            }
        },
        { threshold: 0.3 } // Dispara quando 30% do card estiver visível
        );

        if (cardRef.current) {
        observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <article
            ref={cardRef}
            className={`${style.sobre} ${isVisible ? style.appear : ""}`}
            >
            <h1 className={style.sobreContentH1}>{titulo}</h1>
            <br />

            {/* 1ª Camada: Cuida do deslize no Scroll */}
            <div className={style.imageScrollContainer}>
                {/* 2ª Camada: Cuida da flutuação infinita */}
                <div className={style.imageFloatContainer}>
                {/* Elemento final: Cuida do Hover */}
                <img
                    src={imagem}
                    alt={alt}
                    className={`${style.blob} ${style.sobreContentImg}`}
                />
                </div>
            </div>
            <br />

            <div className={style.sobreContentP}>
                {descricao}

                {/* Camada que flutua o botão separadamente */}
                <div className={style.btnFloatContainer}>
                <CustomButton
                    label="Conhecer os animais"
                    className={style.btnConhecer}
                    onClick={onClick}
                />
                </div>
            </div>
    </article>
    );

};
