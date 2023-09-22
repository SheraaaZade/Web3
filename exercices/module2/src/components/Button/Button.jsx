const Button = ({ changeCount, text, delta }) => {
    const handleClick = (event) => {
        const delta = parseInt(event.target.dataset.delta)
      changeCount(delta);
    };
  
    return (
      <button onClick={handleClick} data-delta={delta}>
        {text}
      </button>
    );
  };

export default Button