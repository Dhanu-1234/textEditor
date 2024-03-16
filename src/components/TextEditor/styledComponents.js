import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #25262c;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const TextEditorCard = styled.div`
  background-color: #1b1c22;
  height: 80%;
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`

export const TextEditorImgContainer = styled.div`
  background-color: transparent;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const TextEditorHeading = styled.h2`
  color: #f8fafc;
  font-family: 'Roboto';
  font-weight: 500;
  margin: 10px;
`

export const TextEditorImg = styled.img`
  height: 400px;
  width: 300px;
`

export const TextEditorContainer = styled.div`
  background-color: #25262c;
  height: 90%;
  width: 45%;
  border-style: solid;
  border-width: 1px;
  border-color: #334155;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const ButtonsList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10px;
  list-style: none;
`

export const ListItem = styled.li`
  margin: 5px;
`

export const StylingButton = styled.button`
  background-color: transparent;
  color: ${props => (props.isActive === true ? '#faff00' : '#f1f5f9')};
  border-width: 0px;
  padding: 0px;
  margin: 0px;
  cursor: pointer;
`

export const HorizontalLine = styled.hr`
  width: 100%;
  border-style: solid;
  border-width: 1px;
  border-color: #334155;
  margin-top: 0px;
`

export const TextInput = styled.textarea`
  background-color: transparent;
  height: 100%;
  width: 100%;
  color: #f1f5f9;
  border-width: 0px;
  padding: 15px;
  outline: none;
  font-family: 'Roboto';
  font-size: 18px;
  font-style: ${props => (props.italic === true ? 'italic' : 'normal')};
  font-weight: ${props => (props.bold === true ? 'bold' : 'normal')};
  text-decoration: ${props =>
    props.underline === true ? 'underline' : 'normal'};
`
