import { AwilixContainer, asClass } from "awilix"
import { PostRepositoryImpl } from "./data/repository/post-repository-impl"
import { RestPostResource } from "./data/resource/rest-posts-resource"

export function PostModule(container: AwilixContainer) {
  container.register({
    postResource: asClass(RestPostResource).singleton(),
    postRepository: asClass(PostRepositoryImpl).scoped(),
  })
}
