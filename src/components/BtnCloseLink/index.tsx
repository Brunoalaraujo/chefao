import React from "react";
import BtnFechar from "../../assets/images/BtnFechar.svg";
import {CloseBtn} from "./styles"


interface BtnCloseLinkProps{
    redirect: string;
    class?: string;
}

export default function BtnCloseLink(props: BtnCloseLinkProps){
    return (
        <CloseBtn href={`${props.redirect}`} className={"closeBtn"}>
            <img src={BtnFechar} alt="Botão Fechar" />
        </CloseBtn>
    ) 
}

