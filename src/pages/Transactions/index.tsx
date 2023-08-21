import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de software</td>
              <td><PriceHighLight variant="income">R$ 5999,90</PriceHighLight></td>
              <td>Venda</td>
              <td>13/07/2023</td>
            </tr>

            <tr>
              <td width="50%">lanche de sabado</td>
              <td><PriceHighLight variant="outcome">-R$ 5999,90</PriceHighLight></td>
              <td>Alimentação</td>
              <td>13/07/2023</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}