import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { AiModelTitle } from "../aiModel/AiModelTitle";
import { BotTitle } from "../bot/BotTitle";

export const BaseBotEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="aiModel.id" reference="AiModel" label="aiModel">
          <SelectInput optionText={AiModelTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="bots" reference="Bot">
          <SelectArrayInput
            optionText={BotTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="description" multiline source="description" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
