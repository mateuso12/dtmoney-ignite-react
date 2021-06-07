import { useState } from "react";
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionOpenModal, setIsNewTransactionOpenModal] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionOpenModal(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionOpenModal(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>

      <Dashboard />

     <NewTransactionModal 
     isOpen={isNewTransactionOpenModal}
     onRequestClose={handleCloseNewTransactionModal}
     />

      <GlobalStyle />
    </TransactionsProvider>
  );
}
