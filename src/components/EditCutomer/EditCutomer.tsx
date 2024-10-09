import React from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {Menu} from "../Menu/Menu";
import * as Styled from "./style"
import {useState} from "react";
import {updateDeal} from "../../store/dealSlice";
import {useAppDispatch} from "../../store/store";


interface ICutomersInfo{
    id: number,
    img: string,
    name: string
    email: string
    source: string
}

export const EditCutomer = () => {
    const location= useLocation()
    const info = location.state as ICutomersInfo
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const [imageSelected, setImageSelected] = useState<File | null>()
    const [preview, setPreview] = useState(info.img)
    const [name, setName] = useState(info.name)
    const [email, setEmail] = useState(info.email)
    const [source, setSource] = useState(info.source)

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImageSelected(file);

            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    }

    const handleUpdateDealInfo = () => {

        dispatch(updateDeal({
            id: info.id,
            name: name,
            email: email,
            source: source,
            img: imageSelected ? URL.createObjectURL(imageSelected): info.img
        }))
    }

    if (!info){
        return  null
    }

    return (
        <div style={{display: "flex", minHeight: "100%"}}>
            <Menu/>
            <Styled.CustomerContainer>
                <Styled.Ttitle>Редактирвование {info.name}</Styled.Ttitle>
                <div>
                    <Styled.EditContainer>
                        <Styled.Input placeholder={"Наименование"} value={name} onChange={e => setName(e.target.value)}/>
                        <Styled.Input placeholder={"Email"} value={email} onChange={e => setEmail(e.target.value)}/>
                        <Styled.Input placeholder={"Откуда пришел ?"} value={source} onChange={e => setSource(e.target.value)}/>
                        <Styled.SelectedProfileImageContainer>
                            <Styled.ProfileImage src={preview}/>
                            <input type={"file"} onChange={handleImageChange} style={{display: "none"}} id={"fileInput"}/>
                            <Styled.SubTitle>Логотип</Styled.SubTitle>
                            <Styled.SelectedProfileButton onClick={() => document.getElementById("fileInput")?.click()}>
                                {imageSelected ? "Изменить изображение" : "Выбрать изображение"}
                            </Styled.SelectedProfileButton>
                        </Styled.SelectedProfileImageContainer>
                    </Styled.EditContainer>
                    <Styled.Button onClick={() => {
                        handleUpdateDealInfo()
                        navigate("/customers")
                    }}>Сохранить</Styled.Button>
                </div>
            </Styled.CustomerContainer>
        </div>
    )
}