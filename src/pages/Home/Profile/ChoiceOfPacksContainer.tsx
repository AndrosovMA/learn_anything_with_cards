import React from 'react';
import {Button} from "@mui/material";
import {setQueryParams} from "../../../store/reducers/cards-packs-reducer";
import {useAppDispatch, useAppSelector} from "../../../store/store";
import {ButtonStyledComponent} from '../../../components/ButtonStyledComponent';


function ChoiceOfPacksContainer() {

    const dispatch = useAppDispatch()

    const userId = useAppSelector(state => state.loginReducer.userData._id)

    const handleClickMyPacks = () => {
        if (userId) {
            dispatch(setQueryParams({user_id: userId}))
        }
    }

    const handleClickAllPacks = () => {
        if (userId) {
            dispatch(setQueryParams({user_id: ""}))
        }
    }

    return (
        <div style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "18px",
            width: "70%",
            padding: "3px",
        }}>
            <ButtonStyledComponent
                border={"10px"}
                styleClose
                width={"100px"}
                onClick={() => handleClickMyPacks()}
                style={{marginLeft: "7px !important"}}>My
            </ButtonStyledComponent>
            <ButtonStyledComponent
                border={"10px"}
                width={"100px"}
                onClick={() => handleClickAllPacks()}
            >All</ButtonStyledComponent>
        </div>
    );
}

export default ChoiceOfPacksContainer;
