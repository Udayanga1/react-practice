export default function Tabs({ children, buttons, ButtonsContainer = "menu" }) {
  // const ButtonsContainer = buttonsContainer // Prop should remap to an uppercase variable or it Should start with Uppercase
  return <>
    <ButtonsContainer>{buttons}</ButtonsContainer>
    {children}
  </>
}