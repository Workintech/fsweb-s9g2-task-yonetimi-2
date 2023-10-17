import React from "react";
import { formatDistanceToNow, differenceInDays } from "date-fns/locale";
import { tr } from "date-fns/locale";

const Task = ({ taskObj, onComplete }) => {
  let result = formatDistanceToNow(new Date(taskObj.deadline));
  console.log("formatDistanceToNow", result);

  let differResult = differenceInDays(
    new Date(taskObj.deadline),
    /* new Date(), */ {
      locale: "tr",
    }
  ); //birinci parametre deadline, ikinci parametre "şu an" verdik

  new Date(taskObj.deadline);
  new Date();

  console.log("differenceInDays", differResult);

  return (
    <div className="task">
      <h3>{taskObj.title}</h3>
      <div className="deadline">
        son teslim:{" "}
        <span>
          {" "}
          className={differResult <= 3 ? "bg-[#ffd9d4]" : ""} {result}{" "}
        </span>
      </div>

      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>
      )}
    </div>
  );
};

export default Task;
