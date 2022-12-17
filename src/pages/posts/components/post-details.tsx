import Parser from "html-react-parser";
import { PostBloc } from "../bloc";
import { useBlocSelector } from "@bloc-state/react-bloc";

export function PostDetails() {
  const details = useBlocSelector(PostBloc, {
    selector: (data) => data.details,
		suspendWhen: ( state ) => state.status === "loading",
		suspend: true
  });


  const { by, text, time, title, url } = details;

  return (
    <>
      <h2>{by}</h2>
      <h6>{new Date(time * 1000).toLocaleDateString("en-US")}</h6>
      {title && <h4>{title}</h4>}
      {url && <a href={url}>{url}</a>}
      {text && <div>{Parser(text)}</div>}
    </>
  );
}