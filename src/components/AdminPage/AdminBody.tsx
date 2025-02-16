import Total from "./Total";
import "./Admin.css";
import TopStudent from "../../TopStuden";
import TopStudentTable from "./TopStudentTable";
import { useState } from "react";

function StudentDetails(Details:any) {
  return (
    <TopStudentTable
      image={Details.image}
      name={Details.name}
      id={Details.id}
      point={Details.point}
      rank={Details.rank}
    />
  );
}

function AdminBody() {
  const [search, setSearch] = useState(false);

  const handleSearch = () => {
    setSearch(!search);
  };
  return (
    <div className="body-container">
      <div className="activity-container">
        <div className="greetings">
          <strong>Hello Admin!</strong>
        </div>
        <div className="activity-days">
          <ul>
            <li style={{ borderRadius: "10px 0px 0px 10px" }}>
              <a href="#">Day</a>
            </li>
            <li>
              <a href="#">Week</a>
            </li>
            <li>
              <a href="#">Month</a>
            </li>
            <li>
              <a href="#">Quarter</a>
            </li>
            <li style={{ border: "none", borderRadius: "0px 10px 10px 0px" }}>
              <a href="#">Year</a>
            </li>
          </ul>

          <div className="search">
            <span style={{ color: "#a2b0a3" }} onClick={handleSearch}>
              <span className="fa fa-search" />
            </span>
            <input type="text" placeholder="search" className="input-desktop" />
            {search ? (
              <span className="span-input">
                <input
                  type="text"
                  placeholder="search"
                  className="input-mobile"
                />
              </span>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>

      <div className="main-body-container">
        <Total />
        <div className="main-student-container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              padding: "2rem",
            }}
          >
            <h4>
              <strong>Top Student</strong>
            </h4>
            <button className="btn btn-default">See Full List</button>
          </div>
          <table className="table-container">
            <tr className="thead">
              <th>Name</th>
              <th>Id</th>
              <th>Point</th>
              <th>Rank</th>
            </tr>
            {TopStudent.map(StudentDetails)}
          </table>
        </div>
        <div className="main-teacher-container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              padding: "2rem",
            }}
          >
            <h4>
              <strong>Top Teachers</strong>
            </h4>
            <button className="btn btn-default">See Full List</button>
          </div>
          <table className="table-container">
            <tr className="thead">
              <th>Name</th>
              <th>Id</th>
              <th>Point</th>
              <th>Rank</th>
            </tr>
            {TopStudent.map(StudentDetails)}
          </table>
        </div>
      </div>
      <div className="schedule-main-body-container">
        <div className="background-container">
          <div className="schedule-dropdown-menu">
            <h4>Schedule</h4>
            <div className="dropdown-container">
              <h5>Full Chart</h5>
              <span style={{ backgroundColor: "#ff6bb8", padding: "1rem" }}>
                26
                <span
                  style={{ marginLeft: "1rem" }}
                  className="fa fa-chevron-down"
                />
              </span>
              <span style={{ backgroundColor: "#d4ffd7", padding: "1rem" }}>
                JUne
                <span
                  style={{ marginLeft: "1rem" }}
                  className="fa fa-chevron-down"
                />
              </span>
            </div>
          </div>
          <div className="schedule-container">
            <div className="time-container" style={{}}>
              <div></div>
              <div>10:00pm</div>
              <div>11:00pm</div>
              <div>12:00pm</div>
              <div>4:00pm</div>
              <div>5:00pm</div>
            </div>
            <table className="schedule-table">
              <tr className="schedule-row">
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesda</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
                <th>Sunday</th>
              </tr>
              <tr className="schedule-row">
                <td>
                  English <br />
                  <span className="hub-icon">
                    <span className="fa fa-video-camera" /> Hub 1
                  </span>
                </td>
                <td>
                  English <br />
                  <span className="hub-icon">
                    <span className="fa fa-video-camera" /> Hub 1
                  </span>
                </td>
                <td>
                  English <br />
                  <span className="hub-icon">
                    <span className="fa fa-video-camera" /> Hub 1
                  </span>
                </td>
                <td>
                  English <br />
                  <span className="hub-icon">
                    <span className="fa fa-video-camera" /> Hub 1
                  </span>
                </td>
                <td>
                  English <br />
                  <span className="hub-icon">
                    <span className="fa fa-video-camera" /> Hub 1
                  </span>
                </td>
                <td>
                  English <br />
                  <span className="hub-icon">
                    <span className="fa fa-video-camera" /> Hub 1
                  </span>
                </td>
                <td>
                  English <br />
                  <span className="hub-icon">
                    <span className="fa fa-video-camera" /> Hub 1
                  </span>
                </td>
              </tr>
              <tr className="schedule-row">
                <td>
                  English <br />
                  <span className="hub-icon">
                    <span className="fa fa-video-camera" /> Hub 1
                  </span>
                </td>
                <td>
                  English <br />
                  <span className="hub-icon">
                    <span className="fa fa-video-camera" /> Hub 1
                  </span>
                </td>
                <td>
                  English <br />
                  <span className="hub-icon">
                    <span className="fa fa-video-camera" /> Hub 1
                  </span>
                </td>
                <td>
                  English <br />
                  <span className="hub-icon">
                    <span className="fa fa-video-camera" /> Hub 1
                  </span>
                </td>
                <td>
                  English <br />
                  <span className="hub-icon">
                    <span className="fa fa-video-camera" /> Hub 1
                  </span>
                </td>
                <td>
                  English <br />
                  <span className="hub-icon">
                    <span className="fa fa-video-camera" /> Hub 1
                  </span>
                </td>
                <td>
                  English <br />
                  <span className="hub-icon">
                    <span className="fa fa-video-camera" /> Hub 1
                  </span>
                </td>
              </tr>
              <tr className="schedule-row">
                <td>
                  English <br />
                  <span className="hub-icon">
                    <span className="fa fa-video-camera" /> Hub 1
                  </span>
                </td>
                <td>
                  English <br />
                  <span className="hub-icon">
                    <span className="fa fa-video-camera" /> Hub 1
                  </span>
                </td>
                <td>
                  English <br />
                  <span className="hub-icon">
                    <span className="fa fa-video-camera" /> Hub 1
                  </span>
                </td>
                <td>
                  English <br />
                  <span className="hub-icon">
                    <span className="fa fa-video-camera" /> Hub 1
                  </span>
                </td>
                <td>
                  English <br />
                  <span className="hub-icon">
                    <span className="fa fa-video-camera" /> Hub 1
                  </span>
                </td>
                <td>
                  English <br />
                  <span className="hub-icon">
                    <span className="fa fa-video-camera" /> Hub 1
                  </span>
                </td>
                <td>
                  English <br />
                  <span className="hub-icon">
                    <span className="fa fa-video-camera" /> Hub 1
                  </span>
                </td>
              </tr>
              <tr className="schedule-row">
                <td>
                  English <br />
                  <span className="hub-icon">
                    <span className="fa fa-video-camera" /> Hub 1
                  </span>
                </td>
                <td>
                  English <br />
                  <span className="hub-icon">
                    <span className="fa fa-video-camera" /> Hub 1
                  </span>
                </td>
                <td>
                  English <br />
                  <span className="hub-icon">
                    <span className="fa fa-video-camera" /> Hub 1
                  </span>
                </td>
                <td>
                  English <br />
                  <span className="hub-icon">
                    <span className="fa fa-video-camera" /> Hub 1
                  </span>
                </td>
                <td>
                  English <br />
                  <span className="hub-icon">
                    <span className="fa fa-video-camera" /> Hub 1
                  </span>
                </td>
                <td>
                  English <br />
                  <span className="hub-icon">
                    <span className="fa fa-video-camera" /> Hub 1
                  </span>
                </td>
                <td>
                  English <br />
                  <span className="hub-icon">
                    <span className="fa fa-video-camera" /> Hub 1
                  </span>
                </td>
              </tr>
              <tr className="schedule-row">
                <td>
                  English <br />
                  <span className="hub-icon">
                    <span className="fa fa-video-camera" /> Hub 1
                  </span>
                </td>
                <td>
                  English <br />
                  <span className="hub-icon">
                    <span className="fa fa-video-camera" /> Hub 1
                  </span>
                </td>
                <td>
                  English <br />
                  <span className="hub-icon">
                    <span className="fa fa-video-camera" /> Hub 1
                  </span>
                </td>
                <td>
                  English <br />
                  <span className="hub-icon">
                    <span className="fa fa-video-camera" /> Hub 1
                  </span>
                </td>
                <td>
                  English <br />
                  <span className="hub-icon">
                    <span className="fa fa-video-camera" /> Hub 1
                  </span>
                </td>
                <td>
                  English <br />
                  <span className="hub-icon">
                    <span className="fa fa-video-camera" /> Hub 1
                  </span>
                </td>
                <td>
                  English <br />
                  <span className="hub-icon">
                    <span className="fa fa-video-camera" /> Hub 1
                  </span>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div className="admin-footer">
        <div className="payment-card">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <h4>
              <strong>Payment</strong>
            </h4>
            <div
              style={{
                backgroundColor: "#d4ffd7",
                padding: "1rem",
                borderRadius: "5px",
              }}
            >
              June
              <span
                style={{ marginRight: "1rem" }}
                className="fa fa-chevron-down"
              />
            </div>
          </div>
          <div style={{ display: "flex", gap: "2rem", marginTop: "3.5rem" }}>
            <img
              src="asset\images\payment-chart.PNG"
              style={{ width: "50%" }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "10px",
                gap: "3rem",
                width: "50%",
                textAlign: "left",
                marginTop: "3.5rem",
              }}
            >
              <span>
                <span
                  style={{
                    backgroundColor: "green",
                    color: "#fff",
                    padding: "1rem",
                    borderRadius: "5px",
                  }}
                >
                  75%
                </span>{" "}
                Complete Payment
              </span>
              <span>
                <span
                  style={{
                    backgroundColor: "yellow",
                    color: "#fff",
                    padding: "1rem",
                    borderRadius: "5px",
                  }}
                >
                  15%
                </span>{" "}
                Part Payment
              </span>
              <span>
                <span
                  style={{
                    backgroundColor: "red",
                    color: "#fff",
                    padding: "1rem",
                    borderRadius: "5px",
                  }}
                >
                  10%
                </span>{" "}
                10% Unpaid
              </span>
            </div>
          </div>
        </div>
        <div className="attendance-card">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <h4>
              <strong>Attendance</strong>
            </h4>
            <div
              style={{
                backgroundColor: "#d4ffd7",
                padding: "1rem",
                borderRadius: "5px",
              }}
            >
              June
              <span
                style={{ marginRight: "1rem" }}
                className="fa fa-chevron-down"
              />
            </div>
          </div>
          <div style={{ display: "flex", gap: "2rem", marginTop: "1rem" }}>
            <span
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
                gap: "1rem",
                width: "50%",
                marginTop: "2rem",
                borderRight: "1px solid #ccc",
              }}
            >
              <span>Students</span>
              <img src="asset\images\student-attendance.PNG" />
            </span>
            <span
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
                gap: "1rem",
                width: "50%",
                marginTop: "2rem",
                borderRight: "1px solid #ccc",
              }}
            >
              <span>Teachers</span>
              <img src="asset\images\teachers-attendance.PNG" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminBody;
