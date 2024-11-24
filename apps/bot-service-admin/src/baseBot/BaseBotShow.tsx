import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { BASEBOT_TITLE_FIELD } from "./BaseBotTitle";
import { AIMODEL_TITLE_FIELD } from "../aiModel/AiModelTitle";

export const BaseBotShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="aiModel" source="aimodel.id" reference="AiModel">
          <TextField source={AIMODEL_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Bot" target="baseBotId" label="Bots">
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="BaseBot"
              source="basebot.id"
              reference="BaseBot"
            >
              <TextField source={BASEBOT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="name" source="name" />
            <TextField label="tokensRequired" source="tokensRequired" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
