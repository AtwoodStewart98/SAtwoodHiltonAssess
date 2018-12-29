import React from "react";

const Room4 = props => (
  <section>
    <div className="flex">
      <input
        type="checkbox"
        onChange={() => props.handleRoom4Check()}
        checked={props.check ? "checked" : ""}
      />
      <header>
        <h3 style={{ fontWeight: props.check ? null : 400 }}>Room 4</h3>
      </header>
    </div>
    <div
      className="inner-flex"
      style={{ backgroundColor: props.check ? "#fff" : null }}
    >
      <div>
        <p>Adults 18+</p>
        <select
          disabled={props.check ? null : "disabled"}
          onChange={e => props.nums("adult4", e.target.value)}
        >
          <option>1</option>
          {props.check ? <option>2</option> : null}
        </select>
      </div>
      <div>
        <p>Children (0-17)</p>
        <select
          disabled={props.check ? null : "disabled"}
          onChange={e => props.nums("child4", e.target.value)}
        >
          <option>0</option>
          {props.check ? <option>1</option> : null}
          {props.check ? <option>2</option> : null}
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
      .flex {
        display: flex;
      }
      .inner-flex {
        display: flex;
        justify-content: space-evenly;
        padding: 10px;
      }
    `}</style>
  </section>
);

export default Room4;
