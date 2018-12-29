import React from "react";

const Room1 = props => {
  return (
    <section>
      <header>
        <h3>Room 1</h3>
      </header>
      <div className="inner-flex">
        <div>
          <p>Adults 18+</p>
          <select onChange={e => props.nums("adult1", e.target.value)}>
            <option>1</option>
            <option>2</option>
          </select>
        </div>
        <div>
          <p>Children (0-17)</p>
          <select onChange={e => props.nums("child1", e.target.value)}>
            <option>0</option>
            <option>1</option>
            <option>2</option>
          </select>
        </div>
      </div>
      <style jsx>{`
        section {
          margin: 10px;
          padding: 10px;
          width: 250px;
          background-color: #d3d3d3;
          border-radius: 4px;
        }
        .inner-flex {
          display: flex;
          justify-content: space-evenly;
          background-color: #fff;
          padding: 10px;
        }
      `}</style>
    </section>
  );
};

export default Room1;
