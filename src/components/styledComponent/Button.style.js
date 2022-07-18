import styled  from "styled-components";
const Button=styled.div`
    width:125px;
    height:34px;
    display: inline-block;
    border: 2px solid ${({borderColorP})=>borderColorP?borderColorP:borderColorP} ;
    background-color:${({buttonColorP})=>buttonColorP?buttonColorP:"transparent"} ;
    color:${({ColorP})=>ColorP?ColorP:"#FFFFFF"};
    text-align:center;
    border-radius:5px;
    >h5{
        line-height:29px;
        font-size:16px;
        white-space:nowrap;
    }
    >h5 .icons{
        line-height:0px
    }
    &:hover{
        background-color:#FFFFFF ;
        color: #181818;
        cursor:pointer
    }
    @media (max-width:768px) {
        width:100px;
        height:28px;
        border-radius:0px;
        h5{
            line-height:30px;
            font-size:14px;
        }
    }
    @media (max-width:480px) {
        width:92px;
        height:26px;
        border-radius:0px;
        h5{
            line-height:20px;
            font-size:13px;
        }
    }

`

export default Button;