import React, { useState } from "react";
import { Input } from "./Input";

type propsType = {
  value: string;
  changeTaskName?: (taskName: string) => void;
  description: string;
};

export const EditableSpan = ({
  value,
  changeTaskName,
  description,
}: propsType) => {
  const [editMode, setEditMode] = useState(true);
  const [title, setTitle] = useState(value);

  const onChangeHandler = (e: any) => {
    setTitle(e);
  };
  const onBlueHandler = () => {
    changeTaskName && changeTaskName(title);
    setEditMode(true);
  };

  return (
    <>
      {editMode ? (
        <span onClick={() => setEditMode(false)} style={{ cursor: "pointer" }}>
          {value}
        </span>
      ) : (
        <Input
          value={title}
          autoFocus
          onChangeHandler={onChangeHandler}
          onBlurHandler={onBlueHandler}
          placeholder={description}
        />
      )}
    </>
  );
};
