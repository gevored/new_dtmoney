import { Header } from "../../components/Headers";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import {
  TransactionsContainer,
  TransactionsTable,
  PriceHighLight,
} from "./styles";
export function Transaction() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de Site</td>

              <td>
                <PriceHighLight variant="income">R$ 12.000,00 </PriceHighLight>
              </td>

              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Alimentação</td>

              <td>
                {" "}
                <PriceHighLight variant="outcome"> - R$ 100,00 </PriceHighLight>
              </td>

              <td>Venda</td>
              <td>12/04/2022</td>
            </tr>

            <tr>
              <td width="50%">Saúde</td>

              <td>
                {" "}
                <PriceHighLight variant="outcome">- R$ 500,00 </PriceHighLight>
              </td>

              <td>Venda</td>
              <td>10/04/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
