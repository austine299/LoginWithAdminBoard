import "./Admin.css";

function Total() {
  return (
    <div className="body-table-container">
      <div className="total-container">
        <span className="fa fa-users total-icon1" />
        <div className="total">
          <span>Total Students</span>
          <strong>400</strong>
        </div>
      </div>
      <div className="total-container">
        <span className="fa fa-user-o total-icon2" />
        <div className="total">
          <span>Total Teachers</span>
          <strong>20</strong>
        </div>
      </div>
      <div className="total-container">
        <span className="fa fa-book total-icon3" />
        <div className="total">
          <span>Total Lessons</span>
          <strong>200</strong>
        </div>
      </div>
      <div className="total-container">
        <span className="fa fa-dollar total-icon4" />
        <div className="total">
          <span>Total Earnings</span>
          <strong>$20K</strong>
        </div>
      </div>
    </div>
  );
}

export default Total;
