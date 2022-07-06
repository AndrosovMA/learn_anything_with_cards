import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {NavLink, Route, Routes} from "react-router-dom";
import {Register} from "./pages/Register/Register";
import {Login} from "./pages/Login/Login";
import styled from "styled-components";
import { ForgotPassword } from "./pages/RecoveryPassword/ForgotPassword";
import {CheckEmail} from "./pages/CheckEmail/CheckEmail";
import {CreatePassword} from "./pages/RecoveryPassword/CreatePassword";
import {Home} from "./pages/Home/Home";
import {useAppDispatch, useAppSelector} from "./store/store";
import {Box, CircularProgress} from "@mui/material";
import {ErrorSnackbar} from "./components/ErrorSnackbar";
import {useEffect} from "react";
import {initializeAppTC} from "./store/reducers/app-reducer";

function App() {
    const dispatch = useAppDispatch()

    const status = useAppSelector(state => state.appReducer.status)
    const isInitialized = useAppSelector(state => state.appReducer.isInitialized)

    useEffect(() => {
       dispatch(initializeAppTC())
    }, [])

    if (!isInitialized || status === "loading") {
        return <Box
            sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <CircularProgress color={"primary"} size={80} thickness={3.6} />
        </Box>
    }

    return (
        <Header>
            <ErrorSnackbar />
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        <Navigation>
                            <NavLink to="/login">Login</NavLink>
                            <NavLink to="/register">Register</NavLink>
                            <NavLink to="/password">ForgotPassword</NavLink>
                            <NavLink to="/set-new-password">CreatePassword</NavLink>
                            <NavLink to="/checkEmail">CheckEmail</NavLink>
                            <NavLink to="/home">Home</NavLink>
                        </Navigation>
                    </Typography>
                </Toolbar>

            </AppBar>

            <WrapContainer>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='home' element={<Home/>}/>
                    <Route path='login' element={<Login/>}/>
                    <Route path='register' element={<Register/>}/>
                    <Route path='password' element={<ForgotPassword/>}/>
                    <Route path='set-new-password/:token' element={<CreatePassword/>}/>
                    <Route path='checkEmail' element={<CheckEmail/>}/>
                    <Route path='/404' element={<h1>404 PAGE NOT FOUND</h1>}/>
                </Routes>
            </WrapContainer>

        </Header>
    );
}

export default App;

const Header = styled.div`
`
const WrapContainer = styled.div`
  height: 100vh;
  background: linear-gradient(180deg, #E6D4DE 0%, #9890C7 100%);
`
const Navigation = styled.nav`
  a {
    text-decoration: none;
    color: white;

    :not(:first-child) {
      margin-left: 50px;
    }
  }
`
