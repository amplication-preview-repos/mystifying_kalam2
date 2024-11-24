import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { AIMODEL_TITLE_FIELD } from "./AiModelTitle";

export const AiModelShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="apiEndpoint" source="apiEndpoint" />
        <TextField label="costPerToken" source="costPerToken" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="BaseBot"
          target="aiModelId"
          label="BaseBots"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="aiModel"
              source="aimodel.id"
              reference="AiModel"
            >
              <TextField source={AIMODEL_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="name" source="name" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
