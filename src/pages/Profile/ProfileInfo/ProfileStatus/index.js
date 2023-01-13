import React from "react";

import s from "./ProfileStatus.module.scss";
import TextField from "../../../../components/TextField";

class ProfileStatus extends React.Component {
  constructor() {
    super();
    this.state = {
      editMode: false,
    };
  }

  turnOnEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  turnOffEditMode = () => {
    this.setState({
      editMode: false,
    });
  };

  render() {
    const { editMode } = this.state;

    return (
      <div className={s.root}>
        {editMode ? (
          <div className={s.fieldWrapper}>
            <TextField autofocus onBlur={this.turnOffEditMode} />
          </div>
        ) : (
          <button type="button" className={s.turnOffStatus} onDoubleClick={this.turnOnEditMode}>
            My hardcode status
          </button>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
