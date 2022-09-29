import "./BreakTime.css";

const BreakTime = (props) => {
  const { handleClick } = props;

  return (
    <div>
      <h4 className="title">Break Time</h4>
      <div className="btn-break w-90%">
        <button
          className=" p-1  bg-amber-300"
          onClick={(event) => handleClick(event.target.innerText)}
        >
          10
        </button>
        <button
          className="p-1 bg-amber-300"
          onClick={(event) => handleClick(event.target.innerText)}
        >
          20
        </button>
        <button
          className="p-1  bg-amber-300"
          onClick={(event) => handleClick(event.target.innerText)}
        >
          30
        </button>
        <button
          className="p-1 bg-amber-300"
          onClick={(event) => handleClick(event.target.innerText)}
        >
          40
        </button>
        <button
          className="p-1  bg-amber-300"
          onClick={(event) => handleClick(event.target.innerText)}
        >
          50
        </button>
      </div>
    </div>
  );
};

export default BreakTime;
