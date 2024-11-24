import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { BaseBotTitle } from "../baseBot/BaseBotTitle";

export const BotCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="baseBot.id" reference="BaseBot" label="BaseBot">
          <SelectInput optionText={BaseBotTitle} />
        </ReferenceInput>
        <TextInput label="description" multiline source="description" />
        <TextInput label="name" source="name" />
        <NumberInput step={1} label="tokensRequired" source="tokensRequired" />
      </SimpleForm>
    </Create>
  );
};
