import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { text } from "@storybook/addon-knobs";

import { Button, Welcome } from "@storybook/react/demo";
import TextInput from "../reusable/TextInput";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf("TextInput", module)
  .add("default", () => (
    <TextInput id="title" name="title" label="Title" onChange={() => {}} />
  ))
  .add("error", () => (
    <TextInput
      id="title"
      name="title"
      label={text("Label", "Example label")}
      error={text("Error", "Example error")}
      onChange={() => {}}
    />
  ))
  .add("placeholder", () => (
    <TextInput
      id="title"
      name="title"
      label="Title"
      placeholder="Example placeholder"
      onChange={() => {}}
    />
  ));
