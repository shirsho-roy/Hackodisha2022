import React from 'react'
import styled from 'styled-components'
const Button = styled.a`

.btn{
    width:max-content;
    display: inline-block;
    color: #FFFFFF;
    padding: 1rem 2.5rem;
    cursor:pointer;
    border: 2px solid #FFFFFF;
    border-radius: 60px;
    text-decoration: none;
    z-index: 1;
  }
@media screen and (max-width: 479px)
.button {
    width: 100%;
    max-width: 250px;
}
`

function Buttons({children,id}) {
  return (
    <Button>
    <a id={id&&id} className='btn button button-space w-button'>{children}</a>
    </Button>
  )
}

export default Buttons