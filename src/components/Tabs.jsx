export default function Tabs({ children, buttons, ButtonsContainer }) {
  // bisa juga dengan diinisialisasi terlebih dahulu kedalam variabel
  //   const ButtonsContainer = buttonsContainer;

  return (
    <>
      {/* components types dinamycally */}
      <ButtonsContainer>
        {/* jsx slots */}
        {buttons}
      </ButtonsContainer>
      {children}
    </>
  );
}
