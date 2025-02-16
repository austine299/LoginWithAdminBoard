import TopStudent from "../../TopStuden";

function TopStudentTable(props:any) {
  return (
    <tr>
      <td>
        <img
          src={props.image}
          style={{
            height: "2rem",
            borderRadius: "5rem",
            marginRight: "1rem",
          }}
          className="student-profile"
        />
        {props.name}
      </td>
      <td>
        <i>{props.id}</i>
      </td>
      <td>
        <i>{props.point}</i>
      </td>
      <td>
        <i className="ranking">{props.rank}%</i>
      </td>
    </tr>
  );
}

export default TopStudentTable;
