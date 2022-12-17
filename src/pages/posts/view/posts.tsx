import { BlocListener, BlocProvider, useBlocValue } from "@bloc-state/react-bloc"
import { PostBloc, PostFetched, PostSubscribed } from "../bloc"
import { PostId } from "../components/post-id"
import { Suspense } from "react"
import { PostDetails } from "../components/post-details"
import { PostNext } from "../components/post-next"
import { HomeBloc } from "../../home/bloc"

export function PostPage() {
  const state = useBlocValue(HomeBloc)
  const { id, transformer } = state.data

  return (
    <BlocProvider
      bloc={[PostBloc]}
      deps={[transformer]}
      onCreate={(get) => {
        get(PostBloc).add(new PostSubscribed(id, transformer))
      }}
    >
      <PostView id={id} />
    </BlocProvider>
  )
}

type PostViewProps = {
  id: number
}

export function PostView ( { id } : PostViewProps) {
  return (
    <BlocListener
      bloc={HomeBloc}
      listenWhen={ ( previous, next ) => {
        return previous.data.id !== next.data.id
      } }
      listener={ ( get, state ) => {
        get(PostBloc).add(new PostFetched(state.data.id))
      }}
    >
      <PostId id={id} />
      <div>
        <Suspense fallback={<h2>Loading...</h2>}>
          <PostDetails />
        </Suspense>
      </div>
      <PostNext id={id} />
    </BlocListener>
  )
}
