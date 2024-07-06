
const ButtonT1 = ({onclick,buttonName,mainBg,hoverBg}) => {
  return (
    <>
       <button
        onClick={onclick}
        className={`mt-3 mb-4 px-6 py-2 bg-${mainBg} text-white rounded-lg shadow-lg hover:bg-${hoverBg}`}
      >
        {buttonName}
      </button>
    </>
  )
}

export default ButtonT1;
