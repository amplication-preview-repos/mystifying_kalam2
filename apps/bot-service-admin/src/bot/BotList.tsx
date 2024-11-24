import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { BASEBOT_TITLE_FIELD } from "../baseBot/BaseBotTitle";

export const BotList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Bots"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <ReferenceField label="BaseBot" source="basebot.id" reference="BaseBot">
          <TextField source={BASEBOT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="tokensRequired" source="tokensRequired" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
