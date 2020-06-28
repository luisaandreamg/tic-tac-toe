import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Row = styled.div`
  display: flex;
`
export const Block = styled.div`
  border: solid 1px black;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  transition: 0.3s;
  width: 50px;

  &:hover {
    background-color: lightgray;
  }
`
export const Button = styled.button`
  width: 156px;
`
