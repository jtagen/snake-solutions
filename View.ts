import WorldModel from "./WorldModel";
interface View {
  display(world: WorldModel): void;
}

export default View;
