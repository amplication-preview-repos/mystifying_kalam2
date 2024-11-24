import React, { useEffect, useState, useRef } from "react";
import { Admin, AuthProvider, DataProvider, Resource } from "react-admin";
import Keycloak from "keycloak-js";
import {
  keycloakClient,
  keycloakAuthProvider,
} from "./auth-provider/ra-auth-keycloak";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { BaseBotList } from "./baseBot/BaseBotList";
import { BaseBotCreate } from "./baseBot/BaseBotCreate";
import { BaseBotEdit } from "./baseBot/BaseBotEdit";
import { BaseBotShow } from "./baseBot/BaseBotShow";
import { BotList } from "./bot/BotList";
import { BotCreate } from "./bot/BotCreate";
import { BotEdit } from "./bot/BotEdit";
import { BotShow } from "./bot/BotShow";
import { AiModelList } from "./aiModel/AiModelList";
import { AiModelCreate } from "./aiModel/AiModelCreate";
import { AiModelEdit } from "./aiModel/AiModelEdit";
import { AiModelShow } from "./aiModel/AiModelShow";
import { TransactionList } from "./transaction/TransactionList";
import { TransactionCreate } from "./transaction/TransactionCreate";
import { TransactionEdit } from "./transaction/TransactionEdit";
import { TransactionShow } from "./transaction/TransactionShow";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  const [keycloak, setKeycloak] = useState<Keycloak | null>();
  const authProvider = useRef<AuthProvider | null>();

  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const initKeyCloakClient = async () => {
      await keycloakClient.init({
        onLoad: "login-required",
      });
      authProvider.current = keycloakAuthProvider(keycloakClient, {});
      setKeycloak(keycloakClient);
    };
    if (!keycloak) {
      initKeyCloakClient();
    }
  }, [keycloak]);

  if (!dataProvider || !authProvider.current) {
    return <div>Loading</div>;
  }

  return (
    <div className="App">
      <Admin
        title={"BotService-1"}
        dataProvider={dataProvider}
        authProvider={authProvider.current}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="BaseBot"
          list={BaseBotList}
          edit={BaseBotEdit}
          create={BaseBotCreate}
          show={BaseBotShow}
        />
        <Resource
          name="Bot"
          list={BotList}
          edit={BotEdit}
          create={BotCreate}
          show={BotShow}
        />
        <Resource
          name="AiModel"
          list={AiModelList}
          edit={AiModelEdit}
          create={AiModelCreate}
          show={AiModelShow}
        />
        <Resource
          name="Transaction"
          list={TransactionList}
          edit={TransactionEdit}
          create={TransactionCreate}
          show={TransactionShow}
        />
      </Admin>
    </div>
  );
};

export default App;
