import { State } from "@bloc-state/state"
import { PostViewModel } from "../models/post-view-model"

export class PostState extends State<PostViewModel> {
  constructor() {
    super({
      details: {
        by: "",
        time: 0,
        type: "comment",
      },
    })
  }
}
