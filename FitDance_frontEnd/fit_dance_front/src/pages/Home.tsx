import { useState } from "react";
import CardEdit from "../components/CardEdit/CardEdit";

import CardInformation from "../components/CardInformation/CardInformation";
import Head from "../components/Head/Head";
import Table from "../components/Table/Table";
import CardNewUser from "../components/CardNewUser/CardNewUser";

function Home() {
  const [showTable, setShowTable] = useState(true);
  const [showNewUserCard, setShowNewUserCard] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(Number);

  console.log("Estou no selectedUserId", selectedUserId);

  const handleCards = (id: number) => {
    console.log("Estou no handleCards", id);
    setSelectedUserId(id);
    setShowTable(!showTable);
    setShowNewUserCard(false);
  };

  const openNewCardUser = () => {
    setShowTable(false);
    setShowNewUserCard(true);
  };

  return (
    <>
      <Head title="Usuários" />
      <CardInformation
        stateButtos={!showNewUserCard}
        butonCardNewUser={showTable}
        onClick={openNewCardUser}
      />
      {showTable && <Table onClickEdit={handleCards} />}
      {!showTable && !showNewUserCard && <CardEdit id={selectedUserId} />}
      {showNewUserCard && <CardNewUser />}
    </>
  );
}

export default Home;
