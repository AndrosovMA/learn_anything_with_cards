import styled from "styled-components";
import {AiFillEye} from "react-icons/ai";
import InputField from "../../UI/InputField";
import {ChangeEvent, useState} from "react";
import {ButtonField} from "../../UI/Button";


export const CreatePassword = () => {

    const [valuePass, setValuePass] = useState("")
    const [isVisible, setIsVisible] = useState<boolean>(true)

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValuePass(e.currentTarget.value)
    }


    const toggleShow = () => {
        console.log(isVisible)
        setIsVisible(!isVisible);
    }


    return <>
        <Wrap>
            <div className="form__wrapper">
                <div className="form__text">
                    <span className="contents">It-incubator</span>
                    <span className="sign">Forgot your password?</span>
                </div>
                <div className="form__control">
                    <Form>
                        <span className="form__control__span">Password</span>
                        <InputField
                            value={valuePass}
                            onChange={(e: any) => handlePasswordChange(e)}
                            isVisible={isVisible}
                        />
                        <div className="form__control__icon">
                            <AiFillEye
                                onClick={toggleShow}
                                style={{cursor: "pointer"}}/>
                        </div>
                        <span className='form__group__description'>Create new password and we will send you further
                            instructions to email</span>
                        <ButtonField>Create new password</ButtonField>
                    </Form>
                </div>
            </div>
        </Wrap>
    </>
}

// types

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;


  .header {
    background: linear-gradient(180deg, #E6D4DE 0%, #9890C7 100%);
    background: gray;
  }

  .form__wrapper {
    min-height: 600px;
    max-width: 413px;
    background: #F9F9FE;
    border-radius: 8px;
    margin-top: 5%;

  }

  .form__control {
    display: flex;
    align-items: center;
    margin-top: 38px;
    justify-content: center;
  }

  .form__text {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 25px;
  }

  .contents {
    text-align: center;
    font-weight: 600;
    font-size: 26px;
    line-height: 39px;
    color: #2D2E46;
  }

  .sign {
    text-align: center;
    font-weight: 600;
    font-size: 22px;
    line-height: 33px;
    color: #2D2E46;
    margin-top: 32px;
  }

`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 83%;
  

  .form__control__span {
    text-align: inherit;
    font-weight: 400;
    font-size: 13px;
    line-height: 20px;
    color: #24254A;
    opacity: 0.5;
    display: inline-block;
    width: 100%;
    margin-top: 56px;
  }
  
  .form__group__description {
    width: 100%;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #2D2E46;
    opacity: 0.5;
    margin-top: 30px;
  }
  
  .form__control__icon {
    position: absolute;
    top: 75px;
    left: 320px;
  }

  svg {
    width: 24px;
    height: 24px;
  }

`


