import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { BaseBotTitle } from "../baseBot/BaseBotTitle";

export const AiModelCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="apiEndpoint" source="apiEndpoint" />
        <ReferenceArrayInput source="baseBots" reference="BaseBot">
          <SelectArrayInput
            optionText={BaseBotTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <NumberInput label="costPerToken" source="costPerToken" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
