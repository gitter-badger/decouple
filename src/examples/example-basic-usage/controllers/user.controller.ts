import { inject } from "../../../decorators";
import { UserService } from "../services/user.service";

export class UserController {
  @inject(UserService)
  private userService: UserService;

  which() {
    console.log("UserController");
    this.userService.which();
  }
}
