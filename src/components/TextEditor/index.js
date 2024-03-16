import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  BgContainer,
  TextEditorCard,
  TextEditorImgContainer,
  TextEditorHeading,
  TextEditorImg,
  TextEditorContainer,
  ButtonsList,
  ListItem,
  StylingButton,
  HorizontalLine,
  TextInput,
} from './styledComponents'

class TextEditor extends Component {
  state = {isBoldActive: false, isItalicActive: false, isUnderlineActive: false}

  onToggleBold = () => {
    this.setState(prevState => ({
      isBoldActive: !prevState.isBoldActive,
    }))
  }

  onToggleItalic = () => {
    this.setState(prevState => ({
      isItalicActive: !prevState.isItalicActive,
    }))
  }

  onToggleUnderline = () => {
    this.setState(prevState => ({
      isUnderlineActive: !prevState.isUnderlineActive,
    }))
  }

  render() {
    const {isBoldActive, isItalicActive, isUnderlineActive} = this.state
    return (
      <BgContainer>
        <TextEditorCard>
          <TextEditorImgContainer>
            <TextEditorHeading>Text Editor</TextEditorHeading>
            <TextEditorImg
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </TextEditorImgContainer>
          <TextEditorContainer>
            <ButtonsList>
              <ListItem>
                <StylingButton
                  type="button"
                  isActive={isBoldActive}
                  onClick={this.onToggleBold}
                  data-testid="bold"
                >
                  <VscBold size={25} />
                </StylingButton>
              </ListItem>
              <ListItem>
                <StylingButton
                  type="button"
                  isActive={isItalicActive}
                  onClick={this.onToggleItalic}
                  data-testid="italic"
                >
                  <GoItalic size={25} />
                </StylingButton>
              </ListItem>
              <ListItem>
                <StylingButton
                  type="button"
                  isActive={isUnderlineActive}
                  onClick={this.onToggleUnderline}
                  data-testid="underline"
                >
                  <AiOutlineUnderline size={25} />
                </StylingButton>
              </ListItem>
            </ButtonsList>
            <HorizontalLine />
            <TextInput
              bold={isBoldActive}
              italic={isItalicActive}
              underline={isUnderlineActive}
            />
          </TextEditorContainer>
        </TextEditorCard>
      </BgContainer>
    )
  }
}

export default TextEditor
