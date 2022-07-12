import React from 'react'
import styled from 'styled-components'
const Button = styled.a`

.btn2{
    width:max-content;
    display: inline-block;
    color: #FFFFFF;
    padding: 1rem 6rem;
    cursor:pointer;
    border: 3px solid #FFFFFF;
    border-radius: 60px;
    text-decoration: none;
    z-index: 1;
    margin-top:50px;
    margin-bottom:2rem;
    font-size:40px;
    font-weight: 400;
    text-align:center;
  }
@media screen and (max-width: 479px)
.button2 {
    width: 100%;
    max-width: 250px;
}
`

function Button2({children,id}) {
  return (
    <Button>
    <a id={id&&id} className='btn2 button2 button-space2 w-button2'>{children}</a>
    </Button>
  )
}

export default Button2