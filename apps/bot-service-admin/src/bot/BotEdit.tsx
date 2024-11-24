import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { BaseBotTitle } from "../baseBot/BaseBotTitle";

export const BotEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="baseBot.id" reference="BaseBot" label="BaseBot">
          <SelectInput optionText={BaseBotTitle} />
        </ReferenceInput>
        <TextInput label="description" multiline source="description" />
        <TextInput label="name" source="name" />
        <NumberInput step={1} label="tokensRequired" source="tokensRequired" />
      </SimpleForm>
    </Edit>
  );
};
