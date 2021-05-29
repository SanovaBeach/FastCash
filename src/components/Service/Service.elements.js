import styled from 'styled-components'

export const CardColumn = styled.div`
  padding: 4rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
`

export const ShortCard = styled.div`
  padding: 2rem 0;
  margin: 2rem 0;
  height: 34rem;
  width: 38rem;
  background: #eeeeee;
  border-radius: 1rem;
  padding-bottom: 8rem;
  text-align: center;

`

export const Img = styled.img`
  width: 7rem;
  height: 10rem;
  margin-bottom: 2rem;
`

export const Headline = styled.h1`
  color: #212121;
  margin-bottom: 2rem;
  font-weight: 100;
`

export const Desc = styled.p`
  color: #757575;
  font-size: 1.8rem;
  padding: 0 2rem;
`