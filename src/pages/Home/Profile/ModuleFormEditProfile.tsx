import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import UseAnimations from "react-useanimations";
import settings from "react-useanimations/lib/settings";
import {Logout} from "@mui/icons-material";
import {logoutTC, updateMeTC} from "../../../store/reducers/login-reducer";
import {AppStateType, useAppDispatch} from "../../../store/store";
import styled from "styled-components";
import DialogContentText from "@mui/material/DialogContentText";
import {ChangeEvent, useState} from "react";
import {useSelector} from "react-redux";
import {MdAddAPhoto} from "react-icons/md";
import {ButtonStyledComponent} from "../../../components/ButtonStyledComponent";

export default function ModuleFormEditProfile() {
    const avatar = useSelector<AppStateType, string | undefined>(state => state.loginReducer.userAvaName.avatar)
    const name = useSelector<AppStateType, string | undefined>(state => state.loginReducer.userAvaName.name)

    const [open, setOpen] = React.useState(false);
    const [editAvatar, setEditAvatar] = useState(false);
    const [editName, setEditName] = useState(false);
    const [newAvatarURL, setNewAvatarURL] = useState('')
    const [newName, setNewName] = useState('')

    const dispatch = useAppDispatch()

    const handleClickLogout = () => {
        dispatch(logoutTC())
    }
    const handleClose = (status: boolean) => {
        setOpen(status);
    };

    const changeStatusEditAvatar = (status: boolean): void => {
        setEditAvatar(status)
    }
    const changeAvatarURL = (e: ChangeEvent<HTMLInputElement>) => {
        setNewAvatarURL(e.currentTarget.value)
    }
    const changeStatusEditName = (status: boolean): void => {
        setEditName(status)
    }
    const changeName = (e: ChangeEvent<HTMLInputElement>) => {
        setNewName(e.currentTarget.value)
    }


    const handleUpdateMeOnClick = (): void => {
        const model = {
            name: newName,
            avatar: newAvatarURL
        }
        dispatch(updateMeTC(model));
        setEditAvatar(false);
    };

    return (
        <Wrap>
            <div className="profile__above_settings_wrap">
                <Button>
                    <UseAnimations
                        onClick={() => {
                            handleClose(true)
                        }}
                        animation={settings}
                        size={32}
                        wrapperStyle={{opacity: 0.6, color: "green"}}/>
                </Button>
                <Button onClick={handleClickLogout}>
                    <Logout/>
                </Button>

            </div>
            <Dialog open={open} onClose={() => {
                handleClose(false)
            }}>
                <DialogTitle>Personal information</DialogTitle>
                <DialogContentText style={{padding: "10px"}}>
                    Make changes to your profile, they can be changed again!
                </DialogContentText>

                <DialogContent>
                    <ImgWrap>
                        <img
                            style={{borderRadius: "50%", objectFit: "cover"}}
                            src={avatar} alt="photo" width='100' height='100'/>
                        <Button
                            className="learningIcons"
                            color={"warning"}>
                            <MdAddAPhoto onClick={() => {
                                changeStatusEditAvatar(true)
                            }}/>
                        </Button></ImgWrap>

                    {
                        editAvatar
                            ? <TextField
                                autoFocus
                                margin="dense"
                                id="avatar"
                                label="new avatar"
                                placeholder="Please insert URL your new avatar "
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={changeAvatarURL}
                            />
                            : null
                    }
                    <EditConfig>
                        <TextField
                            margin="dense"
                            id="name"
                            label="your current name"
                            value={name}
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                        <ButtonStyledComponent
                            width={"100px"}
                            border={"10px"}
                            onClick={() => {
                                changeStatusEditName(true)
                            }}
                        >Edit
                        </ButtonStyledComponent>
                        <br/>
                    </EditConfig>
                    {
                        editName
                            ? <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="new name"
                                placeholder="Please write your new name"
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={changeName}
                            />
                            : null
                    }

                </DialogContent>

                <DialogActions>
                    <div style={{marginBottom: "5px"}}>
                    <ButtonStyledComponent
                        width="168px"
                        styleClose
                        onClick={() => {
                            handleClose(false)
                            changeStatusEditAvatar(false)
                            changeStatusEditName(false)
                        }
                        }>Cancel
                    </ButtonStyledComponent>
                    <ButtonStyledComponent
                        onClick={() => {
                            handleClose(false)
                            changeStatusEditAvatar(false)
                            changeStatusEditName(false)
                            handleUpdateMeOnClick()
                        }}>Save</ButtonStyledComponent>
                    </div>
                </DialogActions>
            </Dialog>
        </Wrap>
    );
}
//
const Wrap = styled.div`
    .btn__wrap {
      margin-bottom: 4px;
    }
    
`
const ImgWrap = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  .learningIcons {
    margin-right: 0;
    margin-top: 70px;
    cursor: pointer;
  }

  svg {
    background: #abaaaa;
    width: 42px;
    height: 42px;
    display: inline-block;
    margin-left: -34px;
    color: #262626;
    border: 2px solid black;
    border-radius: 50%;
    padding: 4px;
  }

`
const EditConfig = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`

