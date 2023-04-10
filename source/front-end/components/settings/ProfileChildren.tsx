import React, { useState } from "react";
import TabsChildrenLayout from "../../layouts/TabsChildrenLayout";
import FileUpload from "../core/utils/FileUpload";
import { Button } from "antd";
import Message from "../core/utils/message";
import Form from "../Members/Form";

function ProfileChildren() {
  const [passwordPromptDisplay, setPromptDisplay] = useState(false);
  const triggerPromptOpen = (e:React.MouseEvent) => {
    e.stopPropagation()

    setPromptDisplay(true);
  };
  const triggerPromptClose = (e:React.MouseEvent) => {
    e.stopPropagation()
    setPromptDisplay(false);
  };
  return (
    <>
      {passwordPromptDisplay ? 
      <Form>
        <label htmlFor="pass">Enter Password to confirm action </label>
        <input type="password" required name="" id="pass" />
        <Message text={'Save Changes'}  loading={"Saving....."} success={"Saved"} />
        <Button onClick={triggerPromptClose} danger>Cancel</Button>
      </Form> : <></>}
      <TabsChildrenLayout closePassPrompt={triggerPromptClose}>
        <p>Current Profile Picture</p>
        <FileUpload />
        <label htmlFor="">Upload Profile Picture</label>
        <p>Current Username:Uri3l</p>
        <label htmlFor="uname" className="left">
          Change User name:
        </label>
        <input type="text" name="" id="uname" />
        <p>Current e-mail: solomonhemigadon@gmail.com</p>
        <label htmlFor="" className="left">
          Change E-mail Address:
        </label>
        <input type="email" />
        <div className="rflexable">
            <Button onClick={triggerPromptOpen}>Save</Button>
          <Button danger>Cancel</Button>
        </div>
      </TabsChildrenLayout>
    </>
  );
}

export default ProfileChildren;
