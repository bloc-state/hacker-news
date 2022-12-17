import { Cubit } from "@bloc-state/bloc"
import { HomeState } from "./home.state"

export class HomeBloc extends Cubit<HomeState> {
  constructor() {
    super(
      new HomeState({
        transformer: "concurrent",
        id: 9001,
      }),
    )
  }
}
