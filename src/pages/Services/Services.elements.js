import styled from 'styled-components'


export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 4rem;
`

export const Headline = styled.h1`
  color: #757575;
  cursor: pointer;
  font-size: 2.5rem;
  width: 35rem;
  text-align: center;
  height: 100%;
  padding-bottom: 5px;
  border-bottom: 4px solid ${({active})=> (active ? 'orange' : 'black' )};

  &:hover {
    border-bottom: 4px solid #eeeeee;
  }
`