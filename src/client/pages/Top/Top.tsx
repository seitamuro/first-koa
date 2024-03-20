import { useQuery, useSuspenseQuery } from "@apollo/client";
import { Book, GetBooksDocument, GetBooksQuery } from "../../generated/graphql";

export const Top = () => {
  //const { loading, error, data } = useQuery<GetBooksQuery>(GetBooksDocument);
  const { data } = useSuspenseQuery<GetBooksQuery>(GetBooksDocument);
  return (
    <div>
      <h1>Top</h1>
      {<ul>{data?.books.map((book) => { return <li>¥{book.price} {book.title}({book.author})</li> })}</ul>}
    </div>
  )
}