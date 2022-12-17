import { useBlocSetValue } from "@bloc-state/react-bloc"
import { HomeBloc } from "../../home/bloc"

type PostNextProps = {
  id: number
}

export function PostNext({ id }: PostNextProps) {
  const emit = useBlocSetValue(HomeBloc)
  return (
    <button onClick={ () => emit( ( state ) => state.ready( ( data ) => {
      data.id = state.data.id + 1
    }))}>
      <div>→</div>
    </button>
  )
}
