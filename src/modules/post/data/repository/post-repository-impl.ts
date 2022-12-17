import { Observable } from "rxjs"
import { Post, PostRepository } from "../../domain"
import { PostResource } from "../resource"

export type PostRepositoryProps = {
  postResource: PostResource
}

export class PostRepositoryImpl implements PostRepository {
  #postResource: PostResource

  constructor({ postResource }: PostRepositoryProps) {
    this.#postResource = postResource
  }

  getPost = (id: number): Observable<Post> => this.#postResource.getPost(id)
}
