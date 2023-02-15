import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./stryles";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionsContext } from "../../../../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";
import { memo } from "react";

const searchFormSchema = z.object({
  query: z.string(),
});

/*
Por que que um componente renderiza?

1) Hooks mudou ( mudou estado, contexto, reducer ...)
2) Props mudou
3) Componente Pai renderizado

Qual o fluxo de renderização ?

1) O React recria o HTML da interface virtualmente daquele componente
2) Compara a versão antiga com a nova versão do HTML
3) Caso tenha tido alguma alteração ele rescreve o HTML

a utilização do "memo" altera o fluxo da seguinte maneira:

-etapa anterior ao fluxo de renderização:
0) Verifica se houve alteração nos Hooks e ou Propriedades
0.1) Compara a versão anterior dos hooks e props
0.2) caso tenha alguma alteação nos Hooks e Props ele prossegue no fluxo normal 
*/
type SearchFormInputs = z.infer<typeof searchFormSchema>;

function SearchFormComponent() {
  const fetchTransactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.fetchTransactions;
    }
  );

  const { register, handleSubmit, formState } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransactions(data.query);
  }
  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register("query")}
      />

      <button type="submit" disabled={formState.isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  );
}

export const SearchForm = memo(SearchFormComponent);
